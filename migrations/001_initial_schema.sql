BEGIN;

CREATE EXTENSION IF NOT EXISTS "pgcrypto";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  permissions JSONB DEFAULT '{}'::jsonb
);

CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author_id UUID,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  short_description TEXT,
  description TEXT,
  category_id UUID REFERENCES categories(id),
  license TEXT DEFAULT 'MIT',
  status TEXT DEFAULT 'published',
  metadata JSONB DEFAULT '{}'::jsonb,
  demo_url TEXT,
  search_vector tsvector,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE template_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  version_tag TEXT NOT NULL,
  storage_path TEXT,
  file_count INT,
  size_bytes BIGINT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE template_tags (
  template_id UUID REFERENCES templates(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (template_id, tag_id)
);

CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  role_id INT REFERENCES roles(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id),
  template_version_id UUID REFERENCES template_versions(id),
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  actor_id UUID REFERENCES profiles(id),
  action TEXT NOT NULL,
  details JSONB,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE FUNCTION templates_search_vector_trigger() RETURNS trigger AS $$
BEGIN
  NEW.search_vector := to_tsvector('english', coalesce(NEW.title,'') || ' ' || coalesce(NEW.description,''));
  RETURN NEW;
END
$$ LANGUAGE plpgsql;

CREATE TRIGGER templates_tsvector BEFORE INSERT OR UPDATE ON templates
  FOR EACH ROW EXECUTE FUNCTION templates_search_vector_trigger();

CREATE INDEX templates_search_idx ON templates USING GIN (search_vector);
CREATE INDEX idx_templates_created_at ON templates (created_at);

COMMIT;

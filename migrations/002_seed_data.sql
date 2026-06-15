BEGIN;

INSERT INTO roles (name, permissions) VALUES
  ('admin', '{"all": true}'::jsonb),
  ('moderator', '{"moderate": true, "view_logs": true}'::jsonb),
  ('author', '{"submit": true, "view_own": true}'::jsonb),
  ('user', '{"download": true, "view": true}'::jsonb);

INSERT INTO categories (name, slug, description) VALUES
  ('Landing Pages', 'landing-pages', 'Modern landing page templates'),
  ('Dashboards', 'dashboards', 'Admin dashboards and analytics'),
  ('E-Commerce', 'ecommerce', 'Online store templates'),
  ('SaaS', 'saas', 'Software as a Service templates'),
  ('Portfolio', 'portfolio', 'Portfolio and resume templates'),
  ('UI Components', 'ui-components', 'Reusable UI components'),
  ('Authentication', 'authentication', 'Auth system templates'),
  ('Full Stack', 'fullstack', 'Complete full-stack projects');

INSERT INTO tags (name) VALUES
  ('Next.js'),
  ('React'),
  ('TypeScript'),
  ('Tailwind CSS'),
  ('Vercel'),
  ('Supabase'),
  ('Node.js'),
  ('PostgreSQL'),
  ('Responsive'),
  ('Dark Mode'),
  ('Animation'),
  ('Free');

COMMIT;

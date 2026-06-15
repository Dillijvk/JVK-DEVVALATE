# JVK DevValat

Free premium developer templates marketplace. Browse, filter, download full-stack projects, UI components, landing pages, and more.

## Features

- 🎨 Premium dark theme UI
- 🔐 OAuth authentication (Google, GitHub)
- 📦 Template marketplace with search & filters
- ⚡ Full-stack templates, UI components, landing pages
- 👥 User accounts and profiles
- 🛡️ Admin panel with moderation
- 📊 Analytics and audit logs
- 📱 Fully responsive design
- ✨ Smooth animations (Framer Motion)
- 🚀 Production-ready

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Supabase Edge Functions
- **Database**: Supabase PostgreSQL
- **Auth**: Supabase OAuth (Google, GitHub)
- **Storage**: Supabase Storage (template ZIPs)
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

## Setup

1. Clone repo: `git clone https://github.com/Dillijvk/JVK-DEVVALATE.git`
2. Install: `npm install`
3. Create Supabase project at supabase.com (free)
4. Create .env.local:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_key
   ```
5. Run migrations in Supabase SQL editor (see migrations/)
6. Configure OAuth redirects in Supabase Auth
7. Dev: `npm run dev`
8. Deploy to Vercel

## Project Structure

```
src/
  app/
    (auth)/           # Auth pages
    (dashboard)/      # Admin pages
    api/              # API routes
    layout.tsx        # Root layout
    page.tsx          # Home page
  components/
    layout/           # Header, Footer, Navbar
    marketplace/      # TemplateCard, Grid, Filters
    admin/            # Admin dashboard components
  lib/
    supabase.ts       # Supabase client
    auth.ts           # Auth helpers
  styles/
    globals.css       # Tailwind + custom
migrations/           # Supabase SQL migrations
```

## Database Schema

Core tables: profiles, roles, templates, template_versions, categories, tags, downloads, reviews, submissions, audit_logs, moderation_logs.

## API Endpoints

- `GET /api/templates` - List templates
- `GET /api/templates/[id]` - Get template details
- `POST /api/templates` - Create template (auth)
- `GET /api/search` - Search templates
- `POST /api/downloads` - Track download
- `GET /api/admin/*` - Admin routes

## Deployment

1. Push to GitHub
2. Create project on Vercel
3. Add env vars (Supabase keys)
4. Deploy
5. Set production OAuth redirects in Supabase

## License

MIT - free to use and modify

## Support

Report issues on GitHub

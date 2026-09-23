# Sanket Bhatt — Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion, with content managed through an embedded Sanity Studio at `/studio` so text, projects, and images can be edited directly from the site — no code changes needed for day-to-day updates.

## Tech stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, Lenis (smooth scroll)
- **CMS:** Sanity (embedded Studio, free tier)
- **Contact form:** Formspree
- **Hosting:** Vercel

## Project structure

```
src/
  app/
    (site)/           # the actual portfolio pages (share header/footer/etc.)
      page.tsx         # home page — assembles all sections
      music/           # "coming soon" music page
      projects/[slug]/ # project detail pages
      not-found.tsx    # custom 404
      layout.tsx       # site chrome: header, footer, cursor, background
    studio/[[...tool]]/ # embedded Sanity Studio — NOT wrapped in site chrome
    layout.tsx          # minimal root layout (fonts, theme provider only)
  components/
    layout/    # header, footer, cursor, scroll effects, theme toggle
    sections/  # Hero, About, Skills, Projects, Ventures, Education, Contact
    ui/        # shared building blocks (Reveal, TiltCard, MagneticButton, …)
  content/     # static fallback content (used until Sanity has real data)
  lib/content.ts  # merges live Sanity data with the static fallback
  sanity/      # Sanity schema, client, GROQ queries, Studio config
```

### How content works

Every section fetches from Sanity first. If a document doesn't exist yet (or Sanity isn't configured at all), it falls back to the placeholder content in `src/content/*.ts` — so the site always renders something reasonable, and switches over to your real content automatically the moment you publish it in Studio. You should never need to touch component code to update text, projects, skills, etc. — only if you want to change layout or design.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. The Studio is at `http://localhost:3000/studio`.

## Setting up Sanity (do this once)

The site works and looks complete without this — it just shows placeholder content until you do this.

1. **Create a free account** at [sanity.io](https://www.sanity.io) (no credit card required).
2. **Create a project**: easiest way is running this from the project root —
   ```bash
   npx sanity@latest init
   ```
   - Choose **"Create new project"**, give it any name (e.g. "Sanket Bhatt Portfolio").
   - Dataset name: `production`. Choose **Public** dataset visibility (so the live site can read content without needing a secret token).
   - When asked to use the existing schema / output path, you can skip that — the schema already lives in `src/sanity/schemaTypes/`, so just let it create the project and stop there (don't let it overwrite files).
3. It will print a **Project ID**. Copy it.
4. Create a `.env.local` file in the project root (copy `.env.local.example`) and fill in:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
5. Run `npm run dev` and open `http://localhost:3000/studio` — log in with the same account, and you'll see the content editor.
6. **Add the same two environment variables to Vercel** (Project Settings → Environment Variables) so the live site can read them too, then redeploy.

Once that's done, `/studio` on your live domain becomes your content editor — log in there any time to update text, add projects, swap the photo, or upload transcripts. Changes go live immediately (no redeploy needed for content, only for code changes).

## Deploying to Vercel

- **Framework Preset:** Next.js (should auto-detect; verify in Project Settings → General if it doesn't)
- **Build command:** `next build` (default)
- **Environment variables:** the two `NEXT_PUBLIC_SANITY_*` variables above
- Every push to `main` deploys automatically.

## Content checklist (TODO)

Everything below can be filled in from `/studio` once Sanity is set up — no code editing required. A Word doc covering the same list was also sent separately if you'd rather write answers there and send them back.

- [ ] **Site Settings** → Formspree form ID (create one free at [formspree.io](https://formspree.io)) so the contact form actually sends
- [ ] **About** → your photo
- [ ] **About** → bio paragraphs (a sensible default is pre-filled — edit as you like)
- [ ] **Skill Groups** → Frameworks, Tools, Currently Learning (Languages already has Python & C from CS50)
- [ ] **Projects** → 4 placeholder projects: title, summary, overview, problem, approach, tech stack, GitHub URL, live URL, and optionally a cover image
- [ ] **Ventures** → Apex Web Solution and Stratosphere website URLs
- [ ] **Education** → transcript files, if you want them shown publicly (uploaded per entry, shown as a download link)

## Notes

- The custom domain URL is hardcoded in a few places as a placeholder (`https://sanketbhatt.dev`) — update it in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` once the real domain is confirmed.
- The old music-only site (pre-portfolio) is preserved on the `music-site-archive` branch and at the `backup-old-portfolio` tag, untouched.

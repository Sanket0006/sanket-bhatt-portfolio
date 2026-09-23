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
    (site)/            # the actual portfolio pages (share header/footer/etc.)
      page.tsx          # home — hero + links out to every other page
      about/            # /about
      skills/           # /skills
      work/             # /work — project list (cards link to /projects/[slug])
      ventures/         # /ventures
      education/        # /education — includes the "View transcript" link
      music/            # /music — "coming soon"
      contact/          # /contact
      projects/[slug]/  # project detail pages
      not-found.tsx     # custom 404
      layout.tsx        # site chrome: header, footer, cursor, background
    studio/[[...tool]]/ # embedded Sanity Studio — NOT wrapped in site chrome
    transcript.pdf/      # route handler — proxies the transcript file from
                          # Sanity, or a 404 with an explanation if none is set
    layout.tsx          # minimal root layout (fonts, theme provider only)
  components/
    layout/    # header, footer, cursor, scroll effects, theme toggle
    sections/  # Hero, About, Skills, Projects, Ventures, Education, Contact
               # (each is a reusable component; every /page.tsx above just
               # fetches its own data and renders the matching one)
    ui/        # shared building blocks (Reveal, TiltCard, MagneticButton, …)
  content/     # static fallback content (used until Sanity has real data)
  lib/content.ts  # merges live Sanity data with the static fallback
  sanity/      # Sanity schema, client, GROQ queries, Studio config
```

Nav order (matches the order pages were built in): About → Skills → Work → Ventures → Education → Music → Contact.

### How content works

Every section fetches from Sanity first. If a document doesn't exist yet (or Sanity isn't configured at all), it falls back to the placeholder content in `src/content/*.ts` — so the site always renders something reasonable, and switches over to your real content automatically the moment you publish it in Studio. You should never need to touch component code to update text, projects, skills, etc. — only if you want to change layout or design.

## Workflow

This project is managed entirely through GitHub → Vercel — no local dev server needed day-to-day. Push to `main`, Vercel builds and deploys automatically, content is edited live at `/studio` on the production domain.

(`npm install && npm run dev` still works locally if you ever want it — `http://localhost:3000`, Studio at `http://localhost:3000/studio` — it's just not the normal workflow here.)

## Setting up Sanity (do this once)

The site works and looks complete without this — it just shows placeholder content until you do this. Project already created: **Sanket Bhatt Portfolio**, project ID `188jezxf`, dataset `production`.

1. **Add environment variables in Vercel** — Project Settings → Environment Variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=188jezxf
   NEXT_PUBLIC_SANITY_DATASET=production
   ```
   Redeploy after adding them (or wait for the next push).
2. **Register the live domain as a CORS origin** in Sanity — go to [sanity.io/manage](https://sanity.io/manage) → this project → API → CORS Origins → Add CORS origin → `https://www.sanketbhatt.com`. Allow credentials: yes.
3. Visit `https://www.sanketbhatt.com/studio` and log in with your Sanity account — that's the content editor from now on.

Changes published in Studio go live immediately — no redeploy needed for content, only for code changes.

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
- [ ] **Site Settings** → Transcript PDF — upload it here and it's served permanently at `sanketbhatt.com/transcript.pdf` (linked from the Education page). Replace the file any time to update that link everywhere; if it's ever removed, that URL shows a proper 404 explaining it's not available instead of breaking.

## Notes

- Live domain: `https://www.sanketbhatt.com` — used in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` for SEO/OG metadata.
- The old music-only site (pre-portfolio) is preserved on the `music-site-archive` branch and at the `backup-old-portfolio` tag, untouched.

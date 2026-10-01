# Sanket Bhatt — Portfolio

A personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. All content lives in plain TypeScript files under `src/content/` — there's no CMS; you edit content by editing those files and pushing to GitHub, and Vercel deploys automatically.

## Tech stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion, Lenis (smooth scroll)
- **Contact form:** Formspree
- **Hosting:** Vercel

## Project structure

```
src/
  app/
    page.tsx           # home — hero + links out to every other page
    about/              # /about
    skills/             # /skills
    work/                # /work — project list (cards link to /projects/[slug])
    ventures/            # /ventures
    education/           # /education — transcript + certificate links live here
    music/               # /music — "coming soon"
    contact/             # /contact
    projects/[slug]/     # project detail pages
    not-found.tsx        # custom 404 ("Lost in the clouds")
    layout.tsx           # everything shared: fonts, theme, header, footer,
                          # cursor, background, scroll effects
  components/
    layout/    # header, footer, cursor, scroll effects, theme toggle
    sections/  # Hero, About, Skills, Projects, Ventures, Education, Contact
               # (each is a reusable component; every /page.tsx above just
               # imports the matching content file and renders one)
    ui/        # shared building blocks (Reveal, TiltCard, MagneticButton, …)
  content/     # ALL site content — this is what you edit
```

Nav order: About → Skills → Work → Ventures → Education → Music → Contact.

## Editing content

Everything is in `src/content/`:

| File | What it controls |
|---|---|
| `site.ts` | Name, taglines, email, social links, nav, quick facts, Formspree ID |
| `about.ts` | Bio paragraphs, photo path |
| `projects.ts` | The 4 project cards + their detail pages |
| `skills.ts` | Skill groups (Languages, Frameworks, Tools, Currently Learning) |
| `ventures.ts` | Apex Web Solution, Stratosphere |
| `education.ts` | School/certifications, including the transcript and certificate links |

To add an image (photo, project cover, transcript PDF): drop the file in `/public`, then reference its path as a string (e.g. `/profile.jpg`) in the relevant content file.

## Transcript & certificate links

- **Transcript:** `sanketbhatt.com/transcript.pdf` is served automatically by Next.js if a file exists at `public/transcript.pdf` — just drop the file there, no code change needed. If it's missing, that URL falls through to the custom 404 page.
- **Certificates:** `education.ts` entries have an optional `credentialUrl` + `credentialLabel`. The University of Windsor entry points at `/transcript.pdf`; the CS50x/CS50P entries point directly at their official `certificates.cs50.io` verification links.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`. Not required day-to-day — the normal workflow is edit → commit → push → Vercel deploys.

## Deploying to Vercel

- **Framework Preset:** Next.js (should auto-detect)
- **Build command:** `next build` (default)
- No environment variables required.
- Every push to `main` deploys automatically.

## Content checklist (TODO)

- [ ] **About** → your photo (`src/content/about.ts` → `photoUrl`)
- [ ] **Skills** → Frameworks, Tools, Currently Learning (Languages already has Python & C from CS50)
- [ ] **Projects** → 4 placeholder projects: title, summary, overview, problem, approach, tech stack, GitHub URL, live URL
- [ ] **Ventures** → Apex Web Solution and Stratosphere website URLs
- [ ] **Contact** → Formspree form ID (`src/content/site.ts` → `formspreeId`) so the contact form actually sends
- [ ] **Transcript** → drop the PDF at `public/transcript.pdf`

## Notes

- Live domain: `https://www.sanketbhatt.com` — used in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` for SEO/OG metadata.
- The old music-only site (pre-portfolio) is preserved on the `music-site-archive` branch and at the `backup-old-portfolio` tag, untouched.

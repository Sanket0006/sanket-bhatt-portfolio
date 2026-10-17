import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { Mail, FileDown } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { ExperienceSnapshot } from "@/components/home/ExperienceSnapshot";
import { Stack } from "@/components/home/Stack";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { experience } from "@/content/experience";
import { skillGroups } from "@/content/skills";

const explore = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/work", label: "Work" },
  { href: "/education", label: "Education" },
  { href: "/extras", label: "Extras" },
];

// The CV buttons only render once public/cv.pdf exists, so the page never
// ships a dead link. Checked at build time; adding the file triggers a deploy.
const CV_HREF = "/cv.pdf";
const hasCv = fs.existsSync(path.join(process.cwd(), "public", "cv.pdf"));

export default function Home() {
  return (
    <>
      <Hero
        name={site.name}
        roleLine={site.roleLine}
        availability={site.availability}
        intro={site.shortIntro}
        email={site.email}
        github={site.social.github}
        linkedin={site.social.linkedin}
        cvHref={hasCv ? CV_HREF : undefined}
      />

      <SelectedProjects projects={projects} />

      <ExperienceSnapshot experience={experience} />

      <Stack skillGroups={skillGroups} />

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-3">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Explore
          </div>
          <nav aria-label="Explore" className="flex flex-wrap gap-x-5 gap-y-2">
            {explore.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <div className="rounded-2xl glass p-10 sm:p-12">
              <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
                <div>
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                    Contact
                  </div>
                  <h2 className="font-display text-2xl font-medium sm:text-3xl">Let&apos;s talk</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm text-muted sm:mx-0">
                    Open to new projects, collaborations, or just a chat. Reach out any time.
                  </p>
                </div>
                <div className="flex flex-col items-center gap-4 sm:items-end">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
                    <a
                      href={`mailto:${site.email}`}
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      <Mail size={15} />
                      {site.email}
                    </a>
                    {hasCv && (
                      <a
                        href={CV_HREF}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
                      >
                        <FileDown size={15} />
                        Download CV
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={site.social.github}
                      target="_blank"
                      rel="noopener"
                      aria-label="GitHub"
                      className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn"
                      className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

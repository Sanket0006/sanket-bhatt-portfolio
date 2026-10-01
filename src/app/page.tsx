import Link from "next/link";
import {
  ArrowUpRight,
  User,
  Terminal,
  Code2,
  GraduationCap,
  Sparkles,
  Mail,
  FileDown,
} from "lucide-react";
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
  { href: "/about", label: "About", desc: "Background, quick facts, and what I care about.", icon: User },
  { href: "/skills", label: "Skills", desc: "Languages, frameworks, tools, and what I'm learning.", icon: Terminal },
  { href: "/work", label: "Work", desc: "Selected projects, from idea to build.", icon: Code2 },
  { href: "/education", label: "Education", desc: "University, certifications, and transcript.", icon: GraduationCap },
  { href: "/extras", label: "Extras", desc: "Music and aviation, just for fun.", icon: Sparkles },
];

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
      />

      <SelectedProjects projects={projects} />

      <ExperienceSnapshot experience={experience} />

      <Stack skillGroups={skillGroups} />

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Explore
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {explore.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.href} direction="up" delay={i * 0.06}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col justify-between rounded-2xl glass p-6 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent"
                  >
                    <div>
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <Icon size={18} />
                      </div>
                      <div className="mb-1.5 flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-medium">{item.label}</h3>
                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
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
                      data-cursor-magnet
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                      <Mail size={15} />
                      {site.email}
                    </a>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener"
                      data-cursor-magnet
                      className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
                    >
                      <FileDown size={15} />
                      Download resume
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={site.social.github}
                      target="_blank"
                      rel="noopener"
                      aria-label="GitHub"
                      data-cursor-magnet
                      className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={site.social.linkedin}
                      target="_blank"
                      rel="noopener"
                      aria-label="LinkedIn"
                      data-cursor-magnet
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

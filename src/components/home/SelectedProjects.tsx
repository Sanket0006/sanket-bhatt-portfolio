import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Reveal } from "@/components/ui/Reveal";
import type { Project } from "@/content/projects";

const validLink = (href: string) => Boolean(href) && !href.startsWith("[TODO");
const isReal = (p: Project) => !p.title.startsWith("[TODO");

const cardClass =
  "flex h-full flex-col justify-between rounded-2xl glass p-6 transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent";

export function SelectedProjects({ projects }: { projects: Project[] }) {
  const real = projects.filter(isReal).slice(0, 2);
  const showTeaser = real.length < 3;

  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Selected projects</h2>
          <Link
            href="/work"
            className="inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            All projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {real.map((project, i) => (
            <Reveal key={project.slug} direction="up" delay={i * 0.06}>
              <div className={cardClass}>
                <div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="font-display text-lg font-medium transition-colors hover:text-accent"
                  >
                    {project.title}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
                  {project.tech.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-surface-border px-2.5 py-1 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {(validLink(project.live) || validLink(project.github)) && (
                  <div className="mt-5 flex items-center gap-4 text-xs">
                    {validLink(project.live) && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener"
                        data-cursor-magnet
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        Live
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    {validLink(project.github) && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener"
                        data-cursor-magnet
                        className="inline-flex items-center gap-1 text-muted transition-colors hover:text-foreground"
                      >
                        <GithubIcon size={12} />
                        Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}

          {showTeaser && (
            <Reveal direction="up" delay={real.length * 0.06}>
              <Link
                href="/work"
                className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-surface-border p-6 text-sm text-muted transition-colors duration-200 ease-out hover:border-accent hover:text-foreground"
              >
                More projects on the way.
                <span className="mt-2 inline-flex items-center gap-1 text-accent">
                  View all
                  <ArrowRight size={12} />
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

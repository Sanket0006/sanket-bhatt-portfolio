import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import type { Project } from "@/content/projects";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Things I have built and worked on."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const imageUrl = project.image;
            return (
              <Reveal key={project.slug} direction="up" delay={i * 0.06}>
                <Card>
                  <Link href={`/projects/${project.slug}`} className="block">
                    {imageUrl && (
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-medium">
                          {project.title}
                        </h3>
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </div>
                      <p className="mb-4 text-sm leading-relaxed text-muted">
                        {project.summary}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, j) => (
                          <span
                            key={`${project.slug}-tech-${j}`}
                            className="rounded-full border border-surface-border px-3 py-1 text-xs text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

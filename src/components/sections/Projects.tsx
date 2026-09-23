import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import type { Project } from "@/sanity/queries";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects"
          description="Edit these in Sanity Studio at /studio — until then, placeholder cards are shown."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => {
            const imageUrl = project.image?.asset?.url;
            return (
              <Reveal key={project.slug} direction="up" delay={i * 0.06}>
                <TiltCard>
                  <Link href={`/projects/${project.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/25 via-transparent to-accent-2/25">
                          <span className="font-display text-5xl font-medium text-foreground/15 transition-transform duration-500 group-hover:scale-110">
                            0{i + 1}
                          </span>
                        </div>
                      )}
                    </div>
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
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

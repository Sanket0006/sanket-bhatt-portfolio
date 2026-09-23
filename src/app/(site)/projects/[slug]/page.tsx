import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { getMergedProjectBySlug, getAllProjectSlugs } from "@/lib/content";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getMergedProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getMergedProjectBySlug(slug);
  if (!project) notFound();

  const validLink = (href?: string) => Boolean(href) && !href!.startsWith("[TODO");
  const imageUrl = project.image?.asset?.url;

  return (
    <article className="mx-auto max-w-3xl px-5 py-28 sm:px-8">
      <Reveal direction="up">
        <Link
          href="/#work"
          className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          Back to work
        </Link>

        <h1 className="font-display text-4xl font-medium sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={`${project.slug}-tech-${i}`}
              className="rounded-full border border-surface-border px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {validLink(project.github) && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              data-cursor-magnet
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm transition-colors hover:border-accent"
            >
              <GithubIcon size={14} />
              Source
            </a>
          )}
          {validLink(project.live) && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener"
              data-cursor-magnet
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-90"
            >
              Live demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

        <div className="relative mt-14 aspect-video w-full overflow-hidden rounded-2xl glass">
          {imageUrl && <Image src={imageUrl} alt="" fill className="object-cover" />}
        </div>

        <div className="mt-14 space-y-10">
          <div>
            <h2 className="font-display text-xl font-medium">Overview</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {project.description}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium">The problem</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-xl font-medium">Approach</h2>
            <p className="mt-3 leading-relaxed text-muted">{project.approach}</p>
          </div>
        </div>
      </Reveal>
    </article>
  );
}

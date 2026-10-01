import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import type { ExperienceEntry } from "@/content/experience";

export function ExperienceSnapshot({ experience }: { experience: ExperienceEntry[] }) {
  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Experience</h2>
          <Link
            href="/experience"
            className="inline-flex shrink-0 items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
          >
            Full experience
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-surface-border rounded-2xl glass">
          {experience.map((entry, i) => (
            <Reveal key={entry.title} direction="up" delay={i * 0.06}>
              <div className="p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="font-display text-base font-medium">
                    {entry.title}
                    <span className="font-sans text-sm font-normal text-muted"> · {entry.org}</span>
                  </div>
                  <div className="shrink-0 text-xs text-muted">{entry.period}</div>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

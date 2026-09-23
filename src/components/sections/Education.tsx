import Link from "next/link";
import { FileText } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { EducationEntry } from "@/sanity/queries";

export function Education({ education }: { education: EducationEntry[] }) {
  return (
    <section id="education" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Education" title="Education & certifications" />

        <div className="relative border-l border-surface-border pl-8">
          {education.map((entry, i) => (
            <Reveal key={entry.title} direction="up" delay={i * 0.08} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
              <div className="text-xs uppercase tracking-wider text-accent">
                {entry.period}
              </div>
              <h3 className="mt-1 font-display text-lg font-medium">
                {entry.title}
              </h3>
              <div className="mt-1 text-sm text-muted">{entry.org}</div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {entry.description}
              </p>

              {entry.transcripts && entry.transcripts.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.transcripts.map((t, j) =>
                    t.asset?.url ? (
                      <Link
                        key={j}
                        href={t.asset.url}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center gap-1.5 rounded-full border border-surface-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-accent hover:text-foreground"
                      >
                        <FileText size={13} />
                        {t.label || "Transcript"}
                      </Link>
                    ) : null
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

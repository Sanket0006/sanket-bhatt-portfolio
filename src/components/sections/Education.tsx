import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/content/education";

export function Education() {
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

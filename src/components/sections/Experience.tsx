import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import type { ExperienceEntry } from "@/content/experience";

type ExperienceProps = {
  experience: ExperienceEntry[];
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Campus roles alongside my degree, from front-of-house support to hands-on teaching."
        />

        <div className="space-y-5">
          {experience.map((entry, i) => (
            <Reveal key={entry.title} direction="up" delay={i * 0.08}>
              <TiltCard>
                <div className="flex items-start gap-5 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Briefcase size={17} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-accent">
                      {entry.period}
                    </div>
                    <h3 className="mt-1 font-display text-lg font-medium">
                      {entry.title}
                    </h3>
                    <div className="mt-1 text-sm text-muted">{entry.org}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

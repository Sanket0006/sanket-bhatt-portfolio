import { Code2, Layers, Wrench, BookOpen, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { TiltCard } from "@/components/ui/TiltCard";
import type { SkillGroup } from "@/content/skills";

const ICONS: Record<string, LucideIcon> = {
  Languages: Code2,
  Frameworks: Layers,
  Tools: Wrench,
  "Currently learning": BookOpen,
};

export function Skills({ skillGroups }: { skillGroups: SkillGroup[] }) {
  const marqueeItems = [...new Set(skillGroups.flatMap((g) => g.items))];

  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Python and C are confirmed from Harvard's CS50. Everything else is a placeholder until the real stack is filled in."
        />

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = ICONS[group.title] ?? Code2;
            return (
              <Reveal key={group.title} direction="up" delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Icon size={18} />
                    </div>
                    <h3 className="mb-4 text-sm font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={`${group.title}-${j}`} className="text-sm text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>

        {marqueeItems.length > 0 && (
          <Reveal direction="up">
            <Marquee items={marqueeItems} />
          </Reveal>
        )}
      </div>
    </section>
  );
}

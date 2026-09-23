import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import type { SkillGroup } from "@/sanity/queries";

export function Skills({ skillGroups }: { skillGroups: SkillGroup[] }) {
  const marqueeItems = [...new Set(skillGroups.flatMap((g) => g.items))];

  return (
    <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Python and C are confirmed from Harvard's CS50 — everything else is a placeholder until the real stack is filled in."
        />

        <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} direction="up" delay={i * 0.08}>
              <div className="h-full rounded-2xl glass p-6">
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
            </Reveal>
          ))}
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

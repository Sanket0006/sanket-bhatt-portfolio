import { Reveal } from "@/components/ui/Reveal";
import type { SkillGroup } from "@/content/skills";

export function Stack({ skillGroups }: { skillGroups: SkillGroup[] }) {
  const learning = skillGroups.find((g) => g.title === "Currently learning");
  const core = skillGroups.filter((g) => g.title !== "Currently learning").flatMap((g) => g.items);

  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal direction="up">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Stack</h2>
            <div className="flex flex-wrap gap-2">
              {core.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-surface-border px-3 py-1 text-xs text-foreground"
                >
                  {item}
                </span>
              ))}
              {learning && learning.items.length > 0 && (
                <span className="self-center pl-2 text-xs text-muted">Learning:</span>
              )}
              {learning?.items.map((item) => (
                <span
                  key={item}
                  title="Currently learning"
                  className="rounded-full border border-dashed border-surface-border px-3 py-1 text-xs text-muted/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

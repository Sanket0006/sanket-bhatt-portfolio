import { Reveal } from "@/components/ui/Reveal";
import type { SkillGroup } from "@/content/skills";

function ChipRow({ label, items, muted }: { label: string; items: string[]; muted?: boolean }) {
  if (items.length === 0) return null;
  return (
    <div className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-6">
      <div className="w-32 shrink-0 text-xs uppercase tracking-wider text-muted">{label}</div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className={
              muted
                ? "rounded-full border border-dashed border-surface-border px-3 py-1 text-xs text-muted/70"
                : "rounded-full border border-surface-border px-3 py-1 text-xs text-foreground"
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Stack({ skillGroups }: { skillGroups: SkillGroup[] }) {
  const learning = skillGroups.find((g) => g.title === "Currently learning");
  const core = skillGroups.filter((g) => g.title !== "Currently learning");

  return (
    <section className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <h2 className="font-display text-2xl font-medium sm:text-3xl">Stack</h2>
        </div>

        <Reveal direction="up">
          <div className="divide-y divide-surface-border rounded-2xl glass px-6">
            {core.map((group) => (
              <ChipRow key={group.title} label={group.title} items={group.items} />
            ))}
            {learning && <ChipRow label="Learning" items={learning.items} muted />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

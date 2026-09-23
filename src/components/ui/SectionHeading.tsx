import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <Reveal direction="up">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">{title}</h2>
        {description && (
          <p className="mt-4 text-muted leading-relaxed">{description}</p>
        )}
      </Reveal>
    </div>
  );
}

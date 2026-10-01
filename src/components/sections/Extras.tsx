import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import type { ExtraEntry } from "@/content/extras";

export function Extras({ extras }: { extras: ExtraEntry[] }) {
  return (
    <section id="extras" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Extras"
          title="A few other things"
          description="Stuff I do outside of code and class, just for fun."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {extras.map((entry, i) => {
            const hasLink = Boolean(entry.href) && !entry.href.startsWith("[TODO");
            return (
              <Reveal key={entry.name} direction="up" delay={i * 0.08}>
                <TiltCard className="group">
                  <Link
                    href={hasLink ? entry.href : "#"}
                    target={hasLink && entry.href.startsWith("http") ? "_blank" : undefined}
                    rel={hasLink && entry.href.startsWith("http") ? "noopener" : undefined}
                    className="block p-7"
                  >
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-medium">{entry.name}</h3>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{entry.description}</p>
                    {!hasLink && (
                      <p className="mt-3 text-xs text-muted/60">[TODO: add a link]</p>
                    )}
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

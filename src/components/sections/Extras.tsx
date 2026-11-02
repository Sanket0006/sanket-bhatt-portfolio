import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
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
                <Card>
                  {hasLink ? (
                    <Link
                      href={entry.href}
                      target={entry.href.startsWith("http") ? "_blank" : undefined}
                      rel={entry.href.startsWith("http") ? "noopener" : undefined}
                      className="block p-7"
                    >
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <h3 className="font-display text-xl font-medium">{entry.name}</h3>
                        <ArrowUpRight
                          size={18}
                          className="mt-1 shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                        />
                      </div>
                      <p className="text-sm leading-relaxed text-muted">{entry.description}</p>
                    </Link>
                  ) : (
                    <div className="p-7">
                      <h3 className="mb-3 font-display text-xl font-medium">{entry.name}</h3>
                      <p className="text-sm leading-relaxed text-muted">{entry.description}</p>
                    </div>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import type { Venture } from "@/sanity/queries";

export function Ventures({ ventures }: { ventures: Venture[] }) {
  return (
    <section id="ventures" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Ventures" title="What I've built outside of school" />

        <div className="grid gap-6 sm:grid-cols-2">
          {ventures.map((venture, i) => {
            const hasLink = Boolean(venture.href) && !venture.href?.startsWith("[TODO");
            return (
              <Reveal key={venture.name} direction="up" delay={i * 0.08}>
                <TiltCard className="group">
                  <Link
                    href={hasLink ? venture.href! : "#"}
                    target={hasLink ? "_blank" : undefined}
                    rel={hasLink ? "noopener" : undefined}
                    className="block p-7"
                  >
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-medium">
                          {venture.name}
                        </h3>
                        <div className="mt-1 text-xs uppercase tracking-wider text-accent">
                          {venture.role}
                        </div>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      {venture.description}
                    </p>
                    {!hasLink && (
                      <p className="mt-3 text-xs text-muted/60">[TODO: add a website URL]</p>
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

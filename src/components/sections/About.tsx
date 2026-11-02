import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type AboutProps = {
  bioParagraphs: string[];
  photoUrl: string | null;
  quickFacts: { label: string; value: string }[];
};

export function About({ bioParagraphs, photoUrl, quickFacts }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className={photoUrl ? "grid gap-10 md:grid-cols-[280px_1fr] md:gap-14" : "max-w-3xl"}>
          {photoUrl && (
            <Reveal direction="right">
              <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl glass">
                <Image src={photoUrl} alt="" fill className="object-cover" />
              </div>
            </Reveal>
          )}

          <Reveal direction="up" delay={0.1}>
            <div className="space-y-5 leading-relaxed text-muted">
              {bioParagraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <div className="grid grid-cols-1 gap-x-6 gap-y-3 pt-4 sm:grid-cols-2">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="border-t border-surface-border pt-3">
                    <div className="text-xs uppercase tracking-wider text-muted/70">
                      {fact.label}
                    </div>
                    <div className="mt-1 text-sm text-foreground">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

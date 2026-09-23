import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-14">
          <Reveal direction="right">
            <div className="relative aspect-square w-full max-w-xs overflow-hidden rounded-2xl glass">
              <div className="flex h-full w-full items-center justify-center p-6 text-center text-sm text-muted">
                [TODO: Add your photo here — replace this placeholder in About.tsx]
              </div>
              <Image
                src="/brand-mark.webp"
                alt=""
                width={64}
                height={64}
                className="absolute bottom-4 right-4 rounded-full opacity-60"
              />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div className="space-y-5 leading-relaxed text-muted">
              <p>
                I&apos;m a first-year Honours Bachelor of Computer Science student at
                the University of Windsor, specializing in Artificial
                Intelligence with a minor in Mathematics. Originally from
                Ahmedabad, India, I&apos;m now based in Windsor, Ontario.
              </p>
              <p>
                Before university, I completed Harvard&apos;s CS50x and CS50P.
                Alongside school, I co-founded{" "}
                <span className="text-foreground">Apex Web Solution</span>, a
                web design business I run with my sister, and I founded{" "}
                <span className="text-foreground">Stratosphere</span>, an
                aviation content brand. I&apos;m also an independent EDM
                producer, making melodic bass and progressive electronic
                music.
              </p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-3 pt-4 sm:grid-cols-2">
                {site.quickFacts.map((fact) => (
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

import Link from "next/link";
import {
  ArrowUpRight,
  User,
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  Sparkles,
  Mail,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { site } from "@/content/site";

const explore = [
  {
    href: "/work",
    label: "Work",
    desc: "Selected projects, from idea to build. A look at what I've made and how it came together.",
    icon: Code2,
    big: true,
  },
  {
    href: "/experience",
    label: "Experience",
    desc: "Campus roles and hands-on teaching work, from front-of-house support to running labs.",
    icon: Briefcase,
    big: true,
  },
  { href: "/about", label: "About", desc: "Background, quick facts, and what I care about.", icon: User },
  { href: "/skills", label: "Skills", desc: "Languages, frameworks, tools, and what I'm learning.", icon: Terminal },
  { href: "/education", label: "Education", desc: "University, certifications, and transcript.", icon: GraduationCap },
  { href: "/extras", label: "Extras", desc: "Music and aviation, just for fun.", icon: Sparkles },
];

export default function Home() {
  return (
    <>
      <Hero name={site.name} taglines={site.taglines} shortIntro={site.shortIntro} />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-xl">
            <Reveal direction="up">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Explore
              </div>
              <h2 className="font-display text-3xl font-medium sm:text-4xl">
                Find your way around
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {explore.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.href}
                  direction="up"
                  delay={i * 0.06}
                  className={item.big ? "sm:col-span-2" : undefined}
                >
                  <TiltCard className="h-full">
                    <Link href={item.href} className="flex h-full flex-col justify-between p-7">
                      <div>
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                          <Icon size={20} />
                        </div>
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h3 className="font-display text-xl font-medium">{item.label}</h3>
                          <ArrowUpRight
                            size={18}
                            className="mt-1 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                          />
                        </div>
                        <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                      </div>
                    </Link>
                  </TiltCard>
                </Reveal>
              );
            })}

            <Reveal direction="up" delay={explore.length * 0.06} className="sm:col-span-2 lg:col-span-4">
              <TiltCard className="h-full">
                <div className="flex flex-col items-center gap-6 p-10 text-center sm:flex-row sm:justify-between sm:p-12 sm:text-left">
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                      Contact
                    </div>
                    <h3 className="font-display text-2xl font-medium sm:text-3xl">
                      Let&apos;s talk
                    </h3>
                    <p className="mx-auto mt-2 max-w-sm text-sm text-muted sm:mx-0">
                      Open to new projects, collaborations, or just a chat. Reach out any time.
                    </p>
                  </div>
                  <a
                    href={`mailto:${site.email}`}
                    data-cursor-magnet
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    <Mail size={15} />
                    {site.email}
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

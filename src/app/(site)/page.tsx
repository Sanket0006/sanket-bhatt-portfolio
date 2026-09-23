import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { Reveal } from "@/components/ui/Reveal";
import { getMergedSite } from "@/lib/content";

const explore = [
  { href: "/about", label: "About", desc: "Background, quick facts, and what I care about." },
  { href: "/skills", label: "Skills", desc: "Languages, frameworks, tools, and what I'm learning." },
  { href: "/work", label: "Work", desc: "Selected projects, from idea to build." },
  { href: "/ventures", label: "Ventures", desc: "Apex Web Solution and Stratosphere." },
  { href: "/education", label: "Education", desc: "University, certifications, and transcript." },
  { href: "/music", label: "Music", desc: "Electronic music — coming soon." },
  { href: "/contact", label: "Contact", desc: "Get in touch, or find me elsewhere." },
];

export default async function Home() {
  const site = await getMergedSite();

  return (
    <>
      <Hero name={site.name} taglines={site.taglines} shortIntro={site.shortIntro} />

      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Explore
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {explore.map((item, i) => (
              <Reveal key={item.href} direction="up" delay={i * 0.05}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-2xl glass p-6 transition-colors hover:border-accent"
                >
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-display text-lg font-medium">{item.label}</h3>
                      <ArrowUpRight
                        size={16}
                        className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

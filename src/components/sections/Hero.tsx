"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

type HeroProps = {
  name: string;
  roleLine: string;
  availability: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
};

export function Hero({ name, roleLine, availability, intro, email, github, linkedin }: HeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative px-5 pt-28 pb-16 sm:px-8 sm:pt-36 sm:pb-20">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-6xl"
      >
        {availability && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            {availability}
          </div>
        )}

        <h1 className="font-display text-5xl font-medium tracking-tight text-gradient sm:text-7xl">
          {name}
        </h1>

        <div className="mt-4 text-lg text-muted sm:text-xl">{roleLine}</div>

        <p className="mt-5 max-w-xl leading-relaxed text-muted">{intro}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener"
            data-cursor-magnet
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Resume
          </a>
          <a
            href="#projects"
            data-cursor-magnet
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium transition-colors hover:border-accent"
          >
            View projects
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            data-cursor-magnet
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            data-cursor-magnet
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={`mailto:${email}`}
            aria-label="Email"
            data-cursor-magnet
            className="flex h-9 w-9 items-center justify-center rounded-full glass text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            <Mail size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

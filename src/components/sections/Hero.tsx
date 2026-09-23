"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { site } from "@/content/site";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ROTATE_MS = 2200;

function RotatingTagline() {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % site.taglines.length);
    }, ROTATE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-block h-[1.4em] min-w-[11ch] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={site.taglines[index]}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 top-0 text-accent"
        >
          {site.taglines[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function AnimatedName() {
  const prefersReducedMotion = useReducedMotion();
  const letters = site.name.split("");

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: prefersReducedMotion ? 0 : 0.035, delayChildren: 0.15 },
        },
      }}
      className="font-display text-5xl font-medium tracking-tight sm:text-7xl"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className="inline-block text-gradient"
        >
          {letter === " " ? " " : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-5 pt-24 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-muted"
        >
          Portfolio
        </motion.div>

        <AnimatedName />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 font-display text-xl text-muted sm:text-2xl"
        >
          <RotatingTagline />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 max-w-xl leading-relaxed text-muted"
        >
          {site.shortIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="bg-foreground text-background hover:opacity-90"
          >
            View work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="glass hover:border-accent"
          >
            <Mail size={15} />
            Get in touch
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-muted"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

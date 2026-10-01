"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Plane } from "lucide-react";

export default function NotFound() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-5 text-center sm:px-8">
      <motion.div
        aria-hidden
        animate={
          prefersReducedMotion
            ? undefined
            : { x: ["-10vw", "110vw"], y: [0, -30, 10, -15, 0] }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute top-1/3 text-accent/70"
      >
        <Plane size={28} className="rotate-45" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          404
        </div>
        <h1 className="font-display text-4xl font-medium sm:text-6xl">
          Lost in the clouds
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-muted">
          This page has flown off course. Let&apos;s get you back on
          the ground.
        </p>

        <Link
          href="/"
          data-cursor-magnet
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <ArrowLeft size={14} />
          Back home
        </Link>
      </motion.div>
    </section>
  );
}

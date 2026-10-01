"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useFinePointer } from "@/hooks/useFinePointer";

const INTERACTIVE_SELECTOR = "a, button, [data-cursor-magnet]";

export function CustomCursor() {
  const isFine = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const enabled = isFine && !prefersReducedMotion;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    // Position tracking only — no DOM queries here, this fires on every pixel of movement.
    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    }
    function handleLeave() {
      setVisible(false);
    }

    // Hover-state tracking via delegated enter/leave — these only fire on
    // element-boundary transitions, not per pixel, so a DOM query here is cheap.
    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest(INTERACTIVE_SELECTOR)) setIsHoveringInteractive(true);
    }
    function handleOut(e: MouseEvent) {
      const related = e.relatedTarget as HTMLElement | null;
      if (!related || !related.closest(INTERACTIVE_SELECTOR)) {
        setIsHoveringInteractive(false);
      }
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] h-4 w-4 rounded-full border border-accent bg-accent/30"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: visible ? 1 : 0,
      }}
      animate={{ scale: isHoveringInteractive ? 2.75 : 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  );
}

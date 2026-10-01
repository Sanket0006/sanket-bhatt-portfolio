"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useFinePointer } from "@/hooks/useFinePointer";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  target?: string;
  rel?: string;
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  strength = 0.35,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  const isFine = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const enabled = isFine && !prefersReducedMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 12, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 12, mass: 0.2 });

  function handleMouseEnter() {
    if (!enabled || !ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!enabled || !rectRef.current) return;
    const rect = rectRef.current;
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Comp = motion[href ? "a" : "button"] as typeof motion.a;

  return (
    <Comp
      ref={ref as never}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      data-cursor-magnet
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors",
        className
      )}
    >
      {children}
    </Comp>
  );
}

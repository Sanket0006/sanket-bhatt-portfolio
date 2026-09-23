"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
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
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const isFine = useFinePointer();
  const prefersReducedMotion = useReducedMotion();
  const enabled = isFine && !prefersReducedMotion;

  function handleMouseMove(e: React.MouseEvent) {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * strength, y: y * strength });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  const Comp = motion[href ? "a" : "button"] as typeof motion.a;

  return (
    <Comp
      ref={ref as never}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.2 }}
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

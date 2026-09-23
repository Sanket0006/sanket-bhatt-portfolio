"use client";

import { useReducedMotion } from "framer-motion";

export function Marquee({ items }: { items: string[] }) {
  const prefersReducedMotion = useReducedMotion();
  const doubled = [...items, ...items];

  if (prefersReducedMotion) {
    return (
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span
            key={i}
            className="rounded-full glass px-4 py-2 text-sm text-muted"
          >
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-3">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="shrink-0 rounded-full glass px-4 py-2 text-sm text-muted"
          >
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

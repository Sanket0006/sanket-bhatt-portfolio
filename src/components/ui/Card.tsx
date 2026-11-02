import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl glass transition-[transform,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent",
        className
      )}
    >
      {children}
    </div>
  );
}

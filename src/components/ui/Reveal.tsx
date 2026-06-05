"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export function Reveal({
  children,
  delayMs = 0,
}: {
  children: ReactNode;
  delayMs?: number;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={[
        "will-change-transform",
        "transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(0.21,0.84,0.32,1)]",
        "motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:blur-0 motion-reduce:transition-none",
        visible ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-6 blur-sm",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

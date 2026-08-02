"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

export function Reveal({
  children,
  delayMs = 0,
  className,
}: {
  children: ReactNode;
  delayMs?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      // Exposed so descendants can drive their own entrance off the same
      // observer — see .rule-draw in globals.css.
      data-revealed={visible}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
      className={[
        // `translate`, not `transform`: Tailwind v4 emits translate utilities
        // on the standalone translate property, so transitioning `transform`
        // animates nothing and the element snaps into place.
        "reveal transition-[opacity,translate] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

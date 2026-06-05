"use client";

import { useEffect, useRef, useState } from "react";

export function useReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -10% 0px",
}: {
  threshold?: number;
  rootMargin?: string;
} = {}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) return;

    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    if (reduce || !supportsIntersectionObserver) {
      const raf = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(raf);
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, threshold, visible]);

  return { ref, visible };
}

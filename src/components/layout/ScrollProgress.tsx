"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = document.documentElement;
      const height = el.scrollHeight - el.clientHeight;
      setProgress(height > 0 ? el.scrollTop / height : 0);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] h-px"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-plum via-rose to-gold"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

import type { ReactNode } from "react";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-sm text-foreground/80 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-accent-soft hover:text-accent-foreground">
      {children}
    </span>
  );
}

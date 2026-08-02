import type { ReactNode } from "react";

export function Card({
  className,
  interactive = false,
  children,
}: {
  className?: string;
  /** Adds the hover treatment used by linked cards. */
  interactive?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-rule bg-surface shadow-[var(--shadow-card)]",
        interactive &&
          "transition-[border-color,box-shadow,translate] duration-300 group-hover:-translate-y-0.5 group-hover:border-rule-2 group-hover:shadow-[var(--shadow-lift)] motion-reduce:group-hover:translate-y-0",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}

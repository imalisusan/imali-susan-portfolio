import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal>
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <div className="h-px flex-1 bg-[linear-gradient(90deg,var(--color-border),var(--color-accent),var(--color-border))] opacity-70" />
        </div>
      </Reveal>
      <div className="mt-6">
        <Reveal delayMs={90}>{children}</Reveal>
      </div>
    </section>
  );
}

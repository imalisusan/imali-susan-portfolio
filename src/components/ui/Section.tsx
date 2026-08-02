import type { ReactNode } from "react";
import type { Tone } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

// Full literal strings so Tailwind can find them.
const numberClasses: Record<Tone, string> = {
  plum: "text-plum",
  rose: "text-rose",
  terracotta: "text-terracotta",
  teal: "text-teal",
  gold: "text-gold",
  indigo: "text-indigo",
  neutral: "text-neutral",
};

const ruleClasses: Record<Tone, string> = {
  plum: "from-plum-line",
  rose: "from-rose-line",
  terracotta: "from-terracotta-line",
  teal: "from-teal-line",
  gold: "from-gold-line",
  indigo: "from-indigo-line",
  neutral: "from-neutral-line",
};

export function Section({
  id,
  index,
  title,
  tone = "plum",
  lede,
  children,
}: {
  id: string;
  /** Two-digit section number shown in the header. */
  index: string;
  title: string;
  /** Rotates down the page so the eye gets colour variety without noise. */
  tone?: Tone;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <Reveal>
        <header className="flex items-baseline gap-4">
          <span className={`label shrink-0 ${numberClasses[tone]}`}>
            {index}
          </span>
          <h2 className="display shrink-0 text-2xl sm:text-3xl">{title}</h2>
          <span
            aria-hidden="true"
            className={`h-px min-w-8 flex-1 translate-y-[-0.35rem] bg-gradient-to-r via-rule to-transparent ${ruleClasses[tone]}`}
          />
        </header>
        {lede && (
          <p className="mt-4 max-w-2xl text-[0.9375rem] leading-7 text-ink-2">
            {lede}
          </p>
        )}
      </Reveal>
      <div className="mt-8">{children}</div>
    </section>
  );
}

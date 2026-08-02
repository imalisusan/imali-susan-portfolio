import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const supportUrl = "https://buymeacoffee.com/imalisusan";

function CoffeeCupIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 9.5h10.5a1 1 0 0 1 1 1v2.5A5 5 0 0 1 11.5 18H10A5 5 0 0 1 5 13v-3.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.5 10.5H18a2 2 0 1 1 0 4h-1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8.5 4.5c1 1 .9 1.8 0 2.8m3-2.8c1 1 .9 1.8 0 2.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.5 20h13"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SupportSection() {
  return (
    <Section id="support" index="08" tone="gold" title="Support my work">
      <Reveal>
        <div className="flex flex-col gap-8 rounded-2xl border border-gold-line bg-gold-tint/60 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          {/* Stacked on mobile so the icon, the paragraph and the button all
              share one flush left edge — side-by-side, the icon indents the
              paragraph and the button below it looks misaligned. */}
          <div className="flex max-w-xl flex-col items-start gap-5 sm:flex-row">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold text-white">
              <CoffeeCupIcon className="h-[1.35rem] w-[1.35rem]" />
            </span>
            <p className="text-[0.9375rem] leading-8 text-ink-2">
              If you’ve found my work helpful or enjoyed browsing my projects,
              you can support me with a coffee. It helps me keep building,
              learning, and sharing.
            </p>
          </div>

          <a
            href={supportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="label pill shrink-0 self-start bg-plum text-white transition-colors duration-200 hover:bg-rose sm:self-auto"
          >
            Buy me a coffee
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

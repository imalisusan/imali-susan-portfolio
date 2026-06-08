import { Card } from "@/components/ui/Card";
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
    <Section id="support" title="Support My Work">
      <Reveal>
        <Card className="relative overflow-hidden p-8 sm:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_400px_at_15%_20%,rgba(255,221,85,0.24),transparent),radial-gradient(800px_500px_at_85%_30%,rgba(181,126,220,0.28),transparent)]" />
          <div className="pointer-events-none absolute -left-14 -top-14 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,202,40,0.30),transparent_65%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-52 w-52 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(181,126,220,0.26),transparent_65%)] blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ffd54f,#ffca28,#b57edc)] text-white shadow-lg shadow-[rgba(181,126,220,0.22)]">
                <CoffeeCupIcon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
                Buy Me A Coffee
              </h3>
              <p className="mt-3 text-sm leading-7 text-foreground/80 sm:text-base">
                If you’ve found my work helpful or enjoyed browsing my projects,
                you can support me with a coffee. It helps me keep building,
                learning, and sharing.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:items-end">
              <a
                href={supportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffd54f,#ffca28,#b57edc)] px-6 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:hover:translate-y-0"
              >
                Support With A Coffee
              </a>
              <p className="text-xs text-foreground/60">
                buymeacoffee.com/imalisusan
              </p>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

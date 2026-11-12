import Image from "next/image";
import working from "@/assets/photos/susan-working.jpg";
import { leadership } from "@/data/leadership";
import { TechList } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function LeadershipSection() {
  return (
    <Section
      id="leadership"
      theme="muted"
      eyebrow="Beyond the day job"
      title="Leadership & community"
      highlight="Leadership"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <div className="grid gap-5">
          {leadership.map((item, index) => (
            <Reveal
              key={`${item.company}-${item.role}-${item.dates}`}
              delayMs={index * 60}
            >
              <article className="rounded-3xl border border-rule bg-surface p-7 shadow-[var(--shadow-card)] sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="display text-xl text-ink">{item.company}</h3>
                  <p className="font-display text-sm font-semibold text-brand-ink">
                    {item.dates}
                  </p>
                </div>
                <p className="mt-1.5 text-[0.9375rem] font-medium text-ink-2">
                  {item.role}
                </p>

                <ul className="mt-5 grid gap-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-6 text-[0.9375rem] leading-7 text-ink-2 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <TechList items={item.tech} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={120} className="relative lg:sticky lg:top-28">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-1/2 w-1/2 rounded-[2rem] bg-brand"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <Image
              src={working}
              alt="Susan taking notes beside her laptop at a tech event"
              placeholder="blur"
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="h-auto w-full"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

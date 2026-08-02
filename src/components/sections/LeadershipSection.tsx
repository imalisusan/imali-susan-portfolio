import { leadership } from "@/data/leadership";
import { TechList } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function LeadershipSection() {
  return (
    <Section id="leadership" index="04" tone="indigo" title="Leadership">
      <div className="grid gap-px">
        {leadership.map((item, index) => (
          <Reveal
            key={`${item.company}-${item.role}-${item.dates}`}
            delayMs={index * 60}
          >
            <article className="grid gap-x-10 gap-y-3 border-t border-rule py-8 sm:grid-cols-[12rem_1fr]">
              <div className="label pt-1 leading-4 text-balance text-ink-3">
                {item.dates}
              </div>

              <div>
                <h3 className="text-[1.0625rem] font-semibold tracking-tight text-ink">
                  {item.role}
                </h3>
                <p className="mt-1 text-[0.9375rem] text-indigo">
                  {item.company}
                </p>

                <ul className="mt-4 grid gap-2.5">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-[0.9375rem] leading-7 text-ink-2 before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-2.5 before:bg-rule-2"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <TechList items={item.tech} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

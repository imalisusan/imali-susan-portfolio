import { experiences } from "@/data/experiences";
import { TechList } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      index="02"
      tone="teal"
      title="Experience"
      lede="Eight roles across contracting, product teams and internships — mostly backend, mostly Laravel, consistently test-driven."
    >
      <div className="grid gap-px">
        {experiences.map((exp, index) => (
          <Reveal
            key={`${exp.company}-${exp.role}-${exp.dates}`}
            delayMs={Math.min(index, 4) * 60}
          >
            <article className="group grid gap-x-10 gap-y-3 py-8 sm:grid-cols-[12rem_1fr]">
              <div className="label pt-1 leading-4 text-balance text-ink-3">
                {exp.dates}
              </div>

              <div className="relative border-l border-rule pl-7 sm:pl-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[3px] top-2 h-1.5 w-1.5 rounded-full bg-rule-2 transition-colors duration-300 group-hover:bg-teal"
                />

                <h3 className="text-[1.0625rem] font-semibold tracking-tight text-ink">
                  {exp.role}
                </h3>
                <p className="mt-1 text-[0.9375rem] text-teal">
                  {exp.company}
                </p>

                <ul className="mt-4 grid gap-2.5">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-5 text-[0.9375rem] leading-7 text-ink-2 before:absolute before:left-0 before:top-[0.85em] before:h-px before:w-2.5 before:bg-rule-2"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <TechList items={exp.tech} />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

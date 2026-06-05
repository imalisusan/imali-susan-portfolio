import { experiences } from "@/data/experiences";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Reveal
            key={`${exp.company}-${exp.role}-${exp.dates}`}
            delayMs={index * 70}
          >
            <article
              className={[
                "relative overflow-hidden rounded-3xl border border-border p-7",
                "transition-transform duration-200 hover:-translate-y-0.5",
                "hover:shadow-[0_14px_38px_-28px_rgba(181,126,220,0.55)]",
                index % 2 === 0 ? "bg-surface" : "bg-muted",
              ].join(" ")}
            >
              <div
                className={[
                  "pointer-events-none absolute left-0 top-0 h-full w-1",
                  index % 2 === 0 ? "bg-accent" : "bg-accent-2",
                ].join(" ")}
              />
              <div
                className={[
                  "pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl",
                  index % 2 === 0
                    ? "bg-[rgba(181,126,220,0.18)]"
                    : "bg-[rgba(124,58,237,0.14)]",
                ].join(" ")}
              />

              <div className="relative">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="mt-1 text-sm text-foreground/80">
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-foreground/70">
                    {exp.dates}
                  </div>
                </div>

                <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-foreground/80">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { experiences } from "@/data/experiences";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function ExperienceSection() {
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-6">
        {experiences.map((exp, index) => (
          <Reveal key={`${exp.company}-${exp.role}-${exp.dates}`} delayMs={index * 70}>
            <Card className="p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-28px_rgba(181,126,220,0.6)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{exp.role}</h3>
                  <div className="mt-1 text-sm text-foreground/80">{exp.company}</div>
                </div>
                <div className="text-sm font-medium text-foreground/70">{exp.dates}</div>
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
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

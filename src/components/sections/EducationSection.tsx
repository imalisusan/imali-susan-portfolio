import { education } from "@/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function EducationSection() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-5">
        {education.map((e, index) => (
          <Reveal key={`${e.school}-${e.dates}`} delayMs={index * 70}>
            <Card className="p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-28px_rgba(181,126,220,0.6)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">{e.school}</h3>
                  <div className="mt-1 text-sm text-foreground/80">
                    {e.qualification}
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground/70">{e.dates}</div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

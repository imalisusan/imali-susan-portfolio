import { education } from "@/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function EducationSection() {
  return (
    <Section id="education" index="05" tone="gold" title="Education">
      <div>
        {education.map((item, index) => (
          <Reveal key={`${item.school}-${item.dates}`} delayMs={index * 60}>
            <article className="grid gap-x-10 gap-y-1.5 border-t border-rule py-6 sm:grid-cols-[12rem_1fr] sm:items-baseline">
              <div className="label leading-4 text-balance text-ink-3">
                {item.dates}
              </div>
              <div>
                <h3 className="text-[1.0625rem] font-semibold tracking-tight text-ink">
                  {item.school}
                </h3>
                <p className="mt-1 text-[0.9375rem] leading-7 text-ink-2">
                  {item.qualification}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

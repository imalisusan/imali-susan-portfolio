import Image from "next/image";
import { education } from "@/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Where I learned"
      highlight="learned"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {education.map((item, index) => (
          <Reveal key={`${item.school}-${item.dates}`} delayMs={index * 60}>
            <article className="group h-full rounded-3xl border border-rule bg-surface p-7 transition-colors duration-300 hover:border-brand-line hover:bg-brand-tint/40">
              <div className="flex items-center justify-between gap-4">
                {/* Every logo shares one height and keeps its own width, so
                    the square crests and the eMobilis wordmark sit level. */}
                {item.logo && (
                  <span className="inline-flex h-16 items-center rounded-2xl border border-rule bg-white px-3">
                    <Image
                      src={item.logo}
                      alt={`${item.school} logo`}
                      sizes="6rem"
                      className="h-11 w-auto max-w-[6rem] object-contain"
                    />
                  </span>
                )}
                <span className="inline-flex shrink-0 rounded-full bg-brand px-4 py-2 font-display text-sm font-bold text-white">
                  {item.dates}
                </span>
              </div>
              <h3 className="display mt-6 text-xl leading-snug text-ink">
                {item.school}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-7 text-ink-2">
                {item.qualification}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

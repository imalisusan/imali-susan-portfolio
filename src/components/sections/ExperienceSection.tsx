import Image from "next/image";
import { experiences } from "@/data/experiences";
import { TechList } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      theme="dark"
      eyebrow="My experience"
      title="My work experience"
      highlight="experience"
      lede="Nine roles across contracting, product teams and internships; mostly backend, mostly Laravel, consistently test-driven."
    >
      <div className="border-t border-night-rule">
        {experiences.map((exp, index) => (
          <Reveal
            key={`${exp.company}-${exp.role}-${exp.dates}`}
            delayMs={Math.min(index, 4) * 60}
          >
            <article className="group grid gap-x-12 gap-y-4 border-b border-night-rule py-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
              <div>
                {/* One tile height for every company, so the wide wordmarks,
                    the round Ocean Sole badge and the initials sit level. */}
                <span
                  className="mb-5 inline-flex h-16 min-w-16 items-center justify-center rounded-2xl border border-night-rule bg-white px-3"
                  style={exp.logoBg ? { backgroundColor: exp.logoBg } : undefined}
                >
                  {exp.logo ? (
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      sizes="10rem"
                      className="h-10 w-auto max-w-[10rem] object-contain"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="font-display text-lg font-extrabold tracking-wide text-brand-ink"
                    >
                      {exp.initials}
                    </span>
                  )}
                </span>
                <p className="font-display text-sm font-semibold text-brand-soft">
                  {exp.dates}
                </p>
                <p className="display mt-3 text-xl text-on-night">
                  {exp.company}
                </p>
              </div>

              <div>
                <h3 className="display text-2xl leading-snug text-on-night transition-colors duration-300 group-hover:text-brand-soft">
                  {exp.role}
                </h3>

                <ul className="mt-5 grid gap-3">
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="relative pl-6 text-[0.9375rem] leading-7 text-on-night-2 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-brand-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <TechList items={exp.tech} dark />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

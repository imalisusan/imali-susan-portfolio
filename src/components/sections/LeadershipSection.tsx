import { leadership } from "@/data/leadership";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function LeadershipSection() {
  return (
    <Section id="leadership" title="Leadership & Community">
      <div className="grid gap-6">
        {leadership.map((item, index) => (
          <Reveal
            key={`${item.company}-${item.role}-${item.dates}`}
            delayMs={index * 70}
          >
            <Card className="p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-28px_rgba(181,126,220,0.6)]">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.role}
                  </h3>
                  <div className="mt-1 text-sm text-foreground/80">
                    {item.company}
                  </div>
                </div>
                <div className="text-sm font-medium text-foreground/70">
                  {item.dates}
                </div>
              </div>

              <ul className="mt-4 grid list-disc gap-2 pl-5 text-sm leading-6 text-foreground/80">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((t) => (
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

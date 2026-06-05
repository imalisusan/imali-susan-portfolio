import { websites } from "@/data/websites";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function WebsitesSection() {
  return (
    <Section id="websites" title="Website Work">
      <div className="grid gap-5 sm:grid-cols-2">
        {websites.map((w, index) => (
          <Reveal key={w.href} delayMs={index * 70}>
            <a href={w.href} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="relative overflow-hidden p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-28px_rgba(181,126,220,0.55)]">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#efe2ff]/0 via-[#efe2ff]/55 to-[#ead7ff]/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold tracking-tight">{w.name}</h3>
                    <span className="text-sm font-medium text-accent">Visit</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-foreground/80">
                    {w.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {w.tech.map((t) => (
                      <Chip key={`${w.href}-${t}`}>{t}</Chip>
                    ))}
                  </div>
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

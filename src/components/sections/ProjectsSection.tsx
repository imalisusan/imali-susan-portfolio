import { projects } from "@/data/projects";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, index) => (
          <Reveal key={p.href} delayMs={index * 70}>
            <a href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
              <Card className="relative overflow-hidden p-7 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_-28px_rgba(181,126,220,0.6)]">
                <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br from-[#efe2ff]/0 via-[#efe2ff]/70 to-[#ead7ff]/80 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <span className="text-sm font-medium text-accent">Visit</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/80">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Chip key={`${p.href}-${t}`}>{t}</Chip>
                  ))}
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

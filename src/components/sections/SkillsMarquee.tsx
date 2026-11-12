import { Sparkle } from "@/components/ui/Icons";

const skills = [
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "Livewire",
  "Vue.js",
  "REST APIs",
  "MySQL",
  "PostgreSQL",
  "Tailwind CSS",
  "Pest",
  "Docker",
];

/** The template's dark scrolling band, filled with the core stack. */
export function SkillsMarquee() {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center"
    >
      {skills.map((skill) => (
        <li key={skill} className="flex items-center">
          <span className="display px-7 text-2xl uppercase tracking-tight text-on-night sm:text-3xl">
            {skill}
          </span>
          <Sparkle className="h-5 w-5 text-brand-soft" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden bg-night py-7 sm:py-9">
      <p className="sr-only">Core stack: {skills.join(", ")}</p>
      <div className="anim-marquee flex w-max" aria-hidden="true">
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}

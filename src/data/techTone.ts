import type { Tone } from "@/components/ui/Chip";

/**
 * Tags are coloured by what a technology *is*, not at random — so a reader
 * learns the code after two cards: plum is the PHP/Laravel core, teal is
 * front-end, indigo is data, gold is APIs and integrations, rose is testing,
 * terracotta is CMS work. Anything unrecognised stays neutral, which keeps
 * infrastructure and tooling quiet rather than adding a seventh colour.
 */
const toneByTech: Record<string, Tone> = {};

const assign = (tone: Tone, items: string[]) => {
  for (const item of items) toneByTech[item.toLowerCase()] = tone;
};

assign("plum", [
  "Laravel",
  "PHP",
  "CodeIgniter",
  "Livewire",
  "Filament",
  "OOP",
  "MVC",
  "Website",
  "Portal",
  "Events",
  "Programs",
  "Community Data",
]);

assign("teal", [
  "React",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "Tailwind CSS",
  "AngularJS",
  "JavaScript",
  "TypeScript",
  "Flutter",
]);

assign("indigo", ["MySQL", "PostgreSQL", "MongoDB", "Adminer"]);

assign("gold", [
  "REST APIs",
  "REST",
  "Payments APIs",
  "Stripe",
  "Daraja API",
  "Flutterwave API",
  "Google Maps API",
  "OpenAI APIs",
  "API Integration",
  "Node.js",
  "Express.js",
  "Nest.js",
  "gRPC",
  "RabbitMQ",
]);

assign("rose", ["Pest", "Pest PHP", "PHPUnit", "TDD", "Unit Tests"]);

assign("terracotta", ["WordPress", "Elementor", "Plugins", "SEO"]);

export function toneForTech(tech: string): Tone {
  return toneByTech[tech.toLowerCase()] ?? "neutral";
}

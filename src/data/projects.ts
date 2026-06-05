import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    name: "Revelation Collective",
    description:
      "Website + community portal to manage events, programs, and community data for a growing discipleship movement.",
    href: "https://revelationcollective.org",
    tech: ["Website", "Portal", "Events", "Programs", "Community Data"],
  },
  {
    name: "MajiSafi",
    description:
      "Web application delivered with Laravel + Livewire, focused on dynamic UI and integrated systems.",
    href: "https://majisafi.app/",
    tech: ["Laravel", "Livewire", "Tailwind CSS", "PostgreSQL"],
  },
  {
    name: "PulaPOS",
    description:
      "Online point-of-sale platform APIs for sales, inventory, payments, and customer management.",
    href: "https://pulapos.com/",
    tech: ["Laravel", "MySQL", "REST APIs"],
  },
  {
    name: "Sokomak",
    description:
      "Platform for farmers to procure inputs, manage operations, and access planning tools online.",
    href: "https://sokomak.co/",
    tech: ["Laravel", "React", "Nest.js", "PostgreSQL", "Payments APIs"],
  },
  {
    name: "FarijiCare Policy",
    description:
      "User-driven insurance policy purchase experience with admin panels and secure payments.",
    href: "https://policy.dawitdigital.com/",
    tech: ["Laravel", "AngularJS", "Daraja API"],
  },
  {
    name: "Shuzia Books",
    description: "eBook platform for a Christian community in Nigeria.",
    href: "https://shuzia.com/",
    tech: ["Laravel", "Stripe", "REST APIs"],
  },
  {
    name: "Shuzia Blog",
    description: "Blog platform for publishing and community engagement.",
    href: "https://shuzia.com/blog",
    tech: ["Laravel", "TDD", "Pest"],
  },
  {
    name: "iTestify",
    description: "Community-focused web application within the Shuzia ecosystem.",
    href: "https://shuzia.com/",
    tech: ["Laravel", "OOP", "Unit Tests"],
  },
];

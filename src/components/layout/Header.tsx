import { ScrollProgress } from "@/components/layout/ScrollProgress";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#websites", label: "Websites" },
  { href: "#revelation", label: "Revelation" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <ScrollProgress />
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight">
          MISS. IMALI SUSAN
        </a>
        <nav className="hidden items-center gap-6 text-sm text-foreground/80 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-foreground shadow-sm transition-colors hover:bg-accent/90"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}

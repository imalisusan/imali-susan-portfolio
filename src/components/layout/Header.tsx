import { MobileNav, type NavLink } from "@/components/layout/MobileNav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";

const navLinks: readonly NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      {/* z-50 keeps the bar above the mobile menu's backdrop. */}
      <div className="relative z-50 mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a
          href="#top"
          className="display text-lg tracking-tight text-ink transition-colors hover:text-plum"
        >
          Imali Susan
        </a>

        <nav className="hidden items-center gap-7 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="label relative text-ink-2 transition-colors duration-200 hover:text-plum after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-plum after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="label pill-sm bg-plum text-white transition-colors duration-200 hover:bg-rose"
          >
            Get in touch
          </a>
          <MobileNav links={navLinks} />
        </div>
      </div>

      <ScrollProgress />
    </header>
  );
}

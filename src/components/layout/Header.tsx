import { MobileNav, type NavLink } from "@/components/layout/MobileNav";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ArrowUpRight } from "@/components/ui/Icons";

const navLinks: readonly NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      {/* z-50 keeps the bar above the mobile menu's backdrop. */}
      <div className="relative z-50 mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="display inline-flex items-center gap-2.5 text-xl text-ink"
        >
          <span aria-hidden="true" className="relative inline-flex h-7 w-7">
            <span className="absolute left-0 top-0 h-4 w-4 rounded-full bg-brand" />
            <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-ink" />
          </span>
          Imali Susan
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-[0.9375rem] font-semibold text-ink transition-colors duration-200 hover:text-brand-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn btn-dark btn-sm hidden sm:inline-flex">
            Hire me
            <ArrowUpRight />
          </a>
          <MobileNav links={navLinks} />
        </div>
      </div>

      <ScrollProgress />
    </header>
  );
}

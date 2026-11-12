import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="bg-night text-on-night">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <a
          href="#top"
          className="display inline-flex items-center gap-2.5 text-lg text-on-night"
        >
          <span aria-hidden="true" className="relative inline-flex h-6 w-6">
            <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-brand-soft" />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-white" />
          </span>
          Imali Susan
        </a>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {socials.map((link) => (
            <a
              key={`footer-${link.label}`}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="font-display text-sm font-semibold text-on-night transition-colors duration-200 hover:text-brand-soft"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-on-night-2">
          © {new Date().getFullYear()} Imali Susan
        </p>
      </div>
    </footer>
  );
}

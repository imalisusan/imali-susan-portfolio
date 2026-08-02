import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-ink-3">
          © {new Date().getFullYear()} Imali Susan
        </p>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          {socials.map((link) => (
            <a
              key={`footer-${link.label}`}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="label text-ink-2 transition-colors duration-200 hover:text-plum"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

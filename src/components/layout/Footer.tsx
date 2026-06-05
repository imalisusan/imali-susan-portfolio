import { socials } from "@/data/socials";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-10 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Imali Susan</div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((link) => (
            <a
              key={`footer-${link.label}`}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

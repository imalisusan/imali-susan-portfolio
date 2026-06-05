import { socials } from "@/data/socials";
import { Chip } from "@/components/ui/Chip";
import { Card } from "@/components/ui/Card";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-[radial-gradient(80%_60%_at_50%_0%,var(--color-accent-soft),transparent)]">
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#efe2ff] via-[#f8dcff] to-[#e2ddff] opacity-80 blur-3xl anim-float motion-reduce:animate-none" />
      <div className="pointer-events-none absolute -bottom-44 -right-28 h-[560px] w-[560px] rounded-full bg-gradient-to-br from-[#f3e0ff] via-[#ead7ff] to-[#d9d6ff] opacity-70 blur-3xl anim-float-slow motion-reduce:animate-none" />

      <div className="mx-auto w-full max-w-5xl px-6 py-14 sm:py-20">
        <Card className="relative bg-surface/90 p-8 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur sm:p-10 anim-fade-up motion-reduce:animate-none">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-70" />

          <p className="text-sm font-medium text-foreground/70">
            Full-stack Software Engineer
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Building software-supported products with real impact.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-foreground/80 sm:text-lg">
            Career objective: To exhibit excellence in matters of
            software-supported product development so that they may have an
            impact on people.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Chip>Laravel</Chip>
            <Chip>PHP</Chip>
            <Chip>React</Chip>
            <Chip>Next.js</Chip>
            <Chip>Node.js</Chip>
            <Chip>REST APIs</Chip>
            <Chip>Testing (Pest / PHPUnit)</Chip>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {socials.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground/90 transition-colors duration-200 hover:bg-muted hover:shadow-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-8 grid gap-3 text-sm text-foreground/80 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="font-medium text-foreground">Phone</div>
              <div className="mt-1">+254 724 920 456</div>
            </div>
            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="font-medium text-foreground">Email</div>
              <div className="mt-1 break-all">susanimali52@gmail.com</div>
            </div>
            <div className="rounded-2xl border border-border bg-muted px-5 py-4">
              <div className="font-medium text-foreground">Location</div>
              <div className="mt-1">Kenya</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

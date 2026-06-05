import { Section } from "@/components/ui/Section";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact">
      <div className="rounded-3xl border border-border bg-muted p-8 sm:p-10">
        <p className="max-w-2xl text-base leading-7 text-foreground/80">
          If you’re building a product and need someone who can ship reliable
          backend APIs, clean UIs, and production-ready integrations, reach out.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="mailto:susanimali52@gmail.com"
            className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#b57edc] via-[#c084fc] to-[#b57edc] px-5 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0"
          >
            Email: susanimali52@gmail.com
          </a>
          <a
            href="tel:+254724920456"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground/90 transition-colors duration-200 hover:bg-surface hover:shadow-sm"
          >
            Call: +254 724 920 456
          </a>
          <a
            href="https://github.com/imalisusan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-5 text-sm font-medium text-foreground/90 transition-colors duration-200 hover:bg-surface hover:shadow-sm"
          >
            GitHub: imalisusan
          </a>
        </div>
      </div>
    </Section>
  );
}

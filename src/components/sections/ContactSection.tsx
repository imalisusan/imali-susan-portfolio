import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const channels = [
  {
    label: "Email",
    value: "susanimali52@gmail.com",
    href: "mailto:susanimali52@gmail.com",
  },
  { label: "Phone", value: "+254 724 920 456", href: "tel:+254724920456" },
  {
    label: "GitHub",
    value: "github.com/imalisusan",
    href: "https://github.com/imalisusan",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/imalisusan",
    href: "https://www.linkedin.com/in/imalisusan/",
  },
];

export function ContactSection() {
  return (
    <Section id="contact" index="07" tone="plum" title="Get in touch">
      <Reveal>
        <div className="rounded-2xl border border-rule bg-surface p-7 shadow-[var(--shadow-card)] sm:p-10">
          <p className="max-w-2xl text-lg leading-8 text-ink">
            If you’re building a product and need someone who can ship reliable
            backend APIs, clean UIs, and production-ready integrations, reach
            out.
          </p>

          <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {channels.map((channel) => (
              <div key={channel.label} className="border-t border-rule pt-4">
                <dt className="label text-ink-3">{channel.label}</dt>
                <dd className="mt-2">
                  <a
                    href={channel.href}
                    target={
                      channel.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-[0.9375rem] leading-7 text-ink underline decoration-rule-2 underline-offset-4 transition-colors duration-200 hover:text-plum hover:decoration-plum"
                  >
                    {channel.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="mailto:susanimali52@gmail.com"
            className="label pill mt-10 bg-plum text-white transition-colors duration-200 hover:bg-rose"
          >
            Start a conversation
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

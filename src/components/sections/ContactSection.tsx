import Image from "next/image";
import smiling from "@/assets/photos/susan-smiling.jpg";
import { ArrowUpRight } from "@/components/ui/Icons";
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
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Let’s work together"
      highlight="together"
    >
      <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <Reveal className="relative">
          <div className="relative h-full overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <Image
              src={smiling}
              alt="Susan smiling, seated outdoors in front of greenery"
              placeholder="blur"
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="aspect-[4/4.4] h-full w-full object-cover object-[50%_30%] lg:aspect-auto"
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="flex h-full flex-col rounded-[2rem] bg-night p-8 text-on-night sm:p-10">
            <p className="display text-[clamp(1.5rem,3vw,2rem)] leading-snug">
              If you’re building a product and need someone who can ship
              reliable backend APIs, clean UIs, and production-ready
              integrations, <span className="text-brand-soft">reach out.</span>
            </p>

            <dl className="mt-10 grid flex-1 content-start gap-x-10 gap-y-6 sm:grid-cols-2">
              {channels.map((channel) => (
                <div
                  key={channel.label}
                  className="border-t border-night-rule pt-4"
                >
                  <dt className="label text-[0.6875rem] text-on-night-2">
                    {channel.label}
                  </dt>
                  <dd className="mt-2.5">
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
                      className="break-words text-[0.9375rem] leading-7 text-on-night underline decoration-white/25 underline-offset-4 transition-colors duration-200 hover:text-brand-soft hover:decoration-brand-soft"
                    >
                      {channel.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href="mailto:susanimali52@gmail.com"
              className="btn mt-10 self-start"
              style={{ ["--btn-sweep" as string]: "#fff", ["--btn-sweep-fg" as string]: "var(--ink)" }}
            >
              Start a conversation
              <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

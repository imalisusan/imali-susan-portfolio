import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17.35 6.65h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M14 4c.4 2.6 2.1 4.5 4.8 4.9V12c-1.9 0-3.6-.6-4.8-1.6v5.2a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.9 2.5V4h2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

const channels = [
  {
    name: "Instagram",
    handle: "@imali_susan_",
    blurb: "Personal life and the work I do around my faith.",
    href: "https://www.instagram.com/imali_susan_/",
    Icon: InstagramIcon,
    tile: "bg-[linear-gradient(135deg,#ffdd55,#ff543e,#c837ab,#405de6)]",
  },
  {
    name: "TikTok",
    handle: "@controlcxcontrolv",
    blurb: "Tech jokes and dev life.",
    href: "https://www.tiktok.com/@controlcxcontrolv",
    Icon: TikTokIcon,
    tile: "bg-[#0b0b0f]",
  },
];

export function SocialFollowSection() {
  return (
    <Section
      id="follow"
      index="06"
      tone="terracotta"
      title="Beyond the resume"
      lede="Two channels, two different sides of the same person."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map(({ name, handle, blurb, href, Icon, tile }, index) => (
          <Reveal key={name} delayMs={index * 60}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <Card interactive className="flex h-full flex-col p-6">
                <div className="flex items-center gap-4">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white ring-1 ring-black/10 ${tile}`}
                  >
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.0625rem] font-semibold tracking-tight text-ink">
                      {name}
                    </h3>
                    <p className="label mt-1 truncate text-ink-3">{handle}</p>
                  </div>
                </div>

                <p className="mt-5 text-[0.9375rem] leading-7 text-ink-2">
                  {blurb}
                </p>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

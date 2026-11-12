import Image from "next/image";
import speaking from "@/assets/photos/susan-speaking.jpg";
import { Chip } from "@/components/ui/Chip";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const pillars = [
  {
    title: "My Role",
    body: "Co-Founder, community leader, and technology lead. I established the vision for Revelation Collective and built the website and community platform used to manage events, programs, communications, and community data.",
  },
  {
    title: "Our Mission",
    body: "We help young Christians grow in their faith through discipleship, worship gatherings, mentorship, community engagement, and programs designed to foster spiritual maturity and meaningful relationships.",
  },
];

const tags = [
  "Discipleship",
  "Worship",
  "Community",
  "Events",
  "Programs",
  "Portal",
];

export function CommunitySection() {
  return (
    <Section
      id="community"
      eyebrow="Co-Founder · 2025"
      title="Revelation Collective"
      highlight="Collective"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal className="relative mx-auto w-full max-w-[24rem] lg:mx-0 lg:justify-self-center">
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 h-1/2 w-1/2 rounded-[2rem] bg-brand"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <Image
              src={speaking}
              alt="Susan speaking into a microphone on stage"
              placeholder="blur"
              sizes="(min-width: 640px) 24rem, 100vw"
              className="aspect-[4/4.4] h-auto w-full object-cover object-[45%_30%]"
            />
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <p className="text-base leading-8 text-ink-2">
            In 2025, I founded Revelation Collective, a community of young
            Christians dedicated to discipleship, worship, fellowship, and
            spiritual growth. What began as a personal response to God’s call
            grew into a movement focused on helping young people build
            authentic relationships with Christ and with one another.
          </p>
          <p className="mt-4 text-base leading-8 text-ink-2">
            As the founder, I lead the vision and growth of the community while
            creating spaces where young people can encounter God, discover
            purpose, and be equipped to impact their generation. Through
            gatherings, discipleship programs, mentorship, and digital
            platforms, Revelation Collective continues to connect and serve
            young Christians across different backgrounds and denominations.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-rule bg-surface-2 p-6"
              >
                <h3 className="display text-lg text-ink">{pillar.title}</h3>
                <p className="mt-2.5 text-[0.9375rem] leading-7 text-ink-2">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Chip key={tag}>{tag}</Chip>
            ))}
          </div>

          <a
            href="https://revelationcollective.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn mt-9"
          >
            revelationcollective.org
            <ArrowUpRight />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

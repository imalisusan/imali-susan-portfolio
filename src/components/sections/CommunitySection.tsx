import { Chip } from "@/components/ui/Chip";
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
    <Section id="community" index="03" tone="rose" title="Revelation Collective">
      <Reveal>
        {/* The one section that deliberately breaks the page rhythm — it is the
            only piece of work she founded rather than was hired for. */}
        <div className="overflow-hidden rounded-2xl border border-rose-line bg-rose-tint/50">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.35fr_1fr]">
            <div>
              <p className="label text-rose">Co-Founder · 2025</p>

              <p className="mt-6 text-[0.9375rem] leading-8 text-ink-2">
                In 2025, I founded Revelation Collective, a community of young
                Christians dedicated to discipleship, worship, fellowship, and
                spiritual growth. What began as a personal response to God’s
                call grew into a movement focused on helping young people build
                authentic relationships with Christ and with one another.
              </p>
              <p className="mt-4 text-[0.9375rem] leading-8 text-ink-2">
                As the founder, I lead the vision and growth of the community
                while creating spaces where young people can encounter God,
                discover purpose, and be equipped to impact their generation.
                Through gatherings, discipleship programs, mentorship, and
                digital platforms, Revelation Collective continues to connect
                and serve young Christians across different backgrounds and
                denominations.
              </p>

              <div className="mt-8 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <Chip key={tag} tone="rose">
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-rose-line/70 bg-surface p-6"
                >
                  <h3 className="label text-rose">{pillar.title}</h3>
                  <p className="mt-3 text-[0.9375rem] leading-7 text-ink-2">
                    {pillar.body}
                  </p>
                </div>
              ))}

              <a
                href="https://revelationcollective.org"
                target="_blank"
                rel="noopener noreferrer"
                className="label pill bg-rose text-white hover:bg-plum"
              >
                revelationcollective.org
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

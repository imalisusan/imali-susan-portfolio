import { Chip } from "@/components/ui/Chip";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";

export function RevelationSection() {
  return (
    <Section id="revelation" title="Revelation Collective">
      <Reveal>
        <Card className="p-7 sm:p-9">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Co-Founder, Revelation Collective
                </h3>
                <p className="mt-2 text-sm leading-6 text-foreground/80">
                  In 2025, I founded Revelation Collective, a community of young
                  Christians dedicated to discipleship, worship, fellowship, and
                  spiritual growth. What began as a personal response to God’s
                  call grew into a movement focused on helping young people
                  build authentic relationships with Christ and with one
                  another.
                </p>
                <p className="mt-3 text-sm leading-6 text-foreground/80">
                  As the founder, I lead the vision and growth of the community
                  while creating spaces where young people can encounter God,
                  discover purpose, and be equipped to impact their generation.
                  Through gatherings, discipleship programs, mentorship, and
                  digital platforms, Revelation Collective continues to connect
                  and serve young Christians across different backgrounds and
                  denominations.
                </p>
              </div>
              <a
                href="https://revelationcollective.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#b57edc] via-[#c084fc] to-[#b57edc] px-5 text-sm font-medium text-white shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0"
              >
                Visit revelationcollective.org
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur">
                <div className="text-sm font-medium text-foreground">
                  My Role
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/80">
                  Co-Founder, community leader, and technology lead. I
                  established the vision for Revelation Collective and built the
                  website and community platform used to manage events,
                  programs, communications, and community data.
                </div>
              </div>
              <div className="rounded-2xl border border-border bg-background/70 px-5 py-4 backdrop-blur">
                <div className="text-sm font-medium text-foreground">
                  Our Mission
                </div>
                <div className="mt-2 text-sm leading-6 text-foreground/80">
                  We help young Christians grow in their faith through
                  discipleship, worship gatherings, mentorship, community
                  engagement, and programs designed to foster spiritual maturity
                  and meaningful relationships.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Chip>Discipleship</Chip>
              <Chip>Worship</Chip>
              <Chip>Community</Chip>
              <Chip>Events</Chip>
              <Chip>Programs</Chip>
              <Chip>Portal</Chip>
            </div>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}

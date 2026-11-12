import Image from "next/image";
import laptop from "@/assets/photos/susan-laptop.jpg";
import { experiences } from "@/data/experiences";
import { work } from "@/data/work";
import { ArrowUpRight, Sparkle } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "4+", label: "Years building software" },
  { value: `${work.length}`, label: "Products & websites shipped" },
  { value: `${experiences.length}`, label: "Roles across teams" },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow text-ink">
            <Sparkle className="h-4 w-4 text-brand" />
            About me
          </span>
          <h2 className="display mt-4 text-[clamp(2rem,4.2vw,3rem)] leading-[1.1]">
            Solving problems with{" "}
            <span className="text-brand-ink">reliable software</span>
          </h2>
          <p className="mt-6 text-base leading-8 text-ink-2">
            I’m a full-stack engineer working mostly in Laravel and PHP, across
            utility billing, point-of-sale, insurance, donor management and
            institutional websites. I build backend services and REST APIs, and
            the dashboards and portals teams use every day, with tests written
            alongside the code.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-rule pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="display block text-[clamp(2rem,4vw,2.75rem)] leading-none text-ink">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-sm leading-5 text-ink-2">
                    {stat.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#experience" className="btn">
              My experience
              <ArrowUpRight />
            </a>
            <a
              href="tel:+254724920456"
              className="group flex items-center gap-3 text-ink"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-rule-2 transition-colors group-hover:border-brand group-hover:bg-brand">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
                </svg>
              </span>
              <span className="leading-tight">
                <span className="block text-sm text-ink-3">Phone</span>
                <span className="font-display font-semibold">
                  +254 724 920 456
                </span>
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal
          delayMs={120}
          className="relative mx-auto w-full max-w-[24rem] lg:justify-self-center"
        >
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-lift)]">
            <Image
              src={laptop}
              alt="Susan at her laptop, glancing to the side mid-thought"
              placeholder="blur"
              sizes="(min-width: 640px) 24rem, 100vw"
              className="aspect-[4/3.6] h-auto w-full object-cover object-center"
            />
          </div>

          <div className="anim-bob absolute -top-5 right-4 rounded-2xl bg-surface px-5 py-4 shadow-[var(--shadow-lift)] sm:-right-6">
            <p className="label text-ink-3">Core stack</p>
            <p className="font-display mt-2 font-bold text-ink">
              Laravel · PHP · React
            </p>
          </div>

          <div
            className="anim-bob absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl border border-brand-line bg-surface px-5 py-4 shadow-[var(--shadow-lift)] sm:-left-6"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-brand" />
            </span>
            <p className="font-display font-semibold text-ink">
              Based in Kenya
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

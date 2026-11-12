import Image from "next/image";
import portrait from "@/assets/photos/susan-hero.jpg";
import { ArrowUpRight, Sparkle } from "@/components/ui/Icons";
import { TypedRole } from "@/components/ui/TypedRole";

const roles = [
  "Full-Stack Developer",
  "Laravel Engineer",
  "Community Builder",
] as const;

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* The template's pastel wash, kept within the violet family: violet
          from the left, orchid from below, periwinkle in the top-right. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-[34rem] w-[34rem] rounded-full bg-[#a78bfa]/35 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/2 h-[30rem] w-[30rem] rounded-full bg-[#f0abfc]/30 blur-[120px]" />
        <div className="absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[#c7d2fe]/55 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:pb-28 lg:pt-20">
        {/* Portrait */}
        <div
          className="anim-rise relative mx-auto w-full max-w-[21rem] lg:mx-0 lg:justify-self-center"
          style={{ animationDelay: "120ms" }}
        >
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-2/3 w-2/3 rounded-[2rem] bg-brand"
          />
          <div className="relative overflow-hidden rounded-[2rem] bg-surface-2 shadow-[var(--shadow-lift)]">
            <Image
              src={portrait}
              alt="Susan Imali"
              placeholder="blur"
              preload
              sizes="(min-width: 640px) 21rem, 100vw"
              className="aspect-[4/5] h-auto w-full object-cover"
            />
          </div>

          <div className="anim-bob absolute right-3 bottom-10 rounded-2xl bg-surface px-5 py-4 shadow-[var(--shadow-lift)] sm:-right-8">
            <p className="display text-3xl leading-none text-ink">4+</p>
            <p className="mt-1.5 text-sm leading-5 text-ink-2">
              Years building
              <br />
              software
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div>
          <span className="eyebrow anim-rise text-ink">
            <Sparkle className="h-4 w-4 text-brand" />
            Hey there!{" "}
            <span className="anim-wave" role="img" aria-label="waving hand">
              👋
            </span>
          </span>

          <h1
            className="display anim-rise mt-5 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05]"
            style={{ animationDelay: "60ms" }}
          >
            I’m Susan Imali
            {/* One fixed-height line, so typing and deleting never moves the
                paragraph below. */}
            <span className="mt-2 block h-[1.15em] whitespace-nowrap text-[0.6em] text-ink-3 sm:text-[0.72em]">

              <TypedRole roles={roles} />
            </span>
          </h1>

          <p
            className="anim-rise mt-7 max-w-xl text-[1.0625rem] leading-8 text-ink-2"
            style={{ animationDelay: "120ms" }}
          >
            I’m a Full-Stack Software Developer based in Kenya, passionate
            about building technology that solves real problems and creates
            meaningful impact. I primarily work with PHP, Laravel, React, and
            modern web technologies, building everything from backend systems
            and RESTful APIs to customer portals, dashboards, payment
            integrations, and internal tools.
          </p>

          <div
            className="anim-rise mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "180ms" }}
          >
            <a href="#work" className="btn">
              See my work
              <ArrowUpRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

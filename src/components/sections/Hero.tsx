const facts = [
  { label: "Most recently", value: "Compassion International" },
  { label: "Core stack", value: "Laravel · PHP · React" },
  { label: "Based in", value: "Kenya" },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-rule">
      {/* One soft wash. Three of them read as a product launch page. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-[-12%] h-[38rem] w-[38rem] rounded-full bg-plum-tint opacity-60 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-20 sm:pb-24 sm:pt-24">
        {/* Staggered entrance rather than one block fading in together. */}
        <h1 className="display anim-rise max-w-3xl text-[clamp(2rem,4.5vw,3rem)] leading-[1.05]">
          Hi, I’m Susan.{" "}
          <span className="anim-wave" role="img" aria-label="waving hand">
            👋
          </span>
        </h1>

        <p
          className="anim-rise mt-6 max-w-xl text-base leading-8 text-ink-2"
          style={{ animationDelay: "90ms" }}
        >
         I’m a Full-Stack Software Developer based in Kenya, passionate about building technology that solves real problems and creates meaningful impact. I primarily work with PHP, Laravel, React, and modern web technologies, building everything from backend systems and RESTful APIs to customer portals, dashboards, payment integrations, and internal tools.
        </p>

        <div
          className="anim-rise mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href="#work"
            className="label pill bg-plum text-white hover:bg-rose"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="label pill border border-plum-line bg-surface text-plum hover:border-plum hover:bg-plum-tint"
          >
            Get in touch
          </a>
        </div>

        <dl
          className="anim-rise mt-16 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3"
          style={{ animationDelay: "270ms" }}
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label text-ink-3">{fact.label}</dt>
              <dd className="mt-2.5 text-[0.9375rem] leading-6 text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

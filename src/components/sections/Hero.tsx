const facts = [
  { label: "Most recently", value: "Compassion International" },
  { label: "Core stack", value: "Laravel · PHP · React" },
  { label: "Based in", value: "Kenya" },
];

export function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-rule">
      {/* Three soft washes from the accent family rather than one flat bloom —
          enough colour movement to feel warm, all well below text contrast. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-[-12%] h-[40rem] w-[40rem] rounded-full bg-plum-tint opacity-70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-[22%] h-[32rem] w-[32rem] rounded-full bg-rose-tint opacity-60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-56 right-[-8%] h-[36rem] w-[36rem] rounded-full bg-gold-tint opacity-50 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-20 sm:pb-24 sm:pt-28">
        <div className="anim-rise">
          <p className="label flex items-center gap-2.5 text-ink-3">
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-rose"
            />
            Full-stack Engineer · Kenya
          </p>

          <h1 className="display mt-7 max-w-3xl text-[clamp(2.5rem,7vw,4.5rem)] leading-[0.98]">
            I build the systems behind billing, payments, and operations.
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-ink-2">
            Laravel and PHP across utility billing, point-of-sale, insurance and
            donor management — backend services, REST APIs, and the dashboards
            teams actually work in. Shipped with Pest and PHPUnit.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="label pill bg-plum text-white transition-colors duration-200 hover:bg-rose"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="label pill border border-plum-line bg-surface text-plum transition-colors duration-200 hover:border-plum hover:bg-plum-tint"
            >
              Get in touch
            </a>
          </div>
        </div>

        <dl className="mt-16 grid gap-8 border-t border-rule pt-8 sm:grid-cols-3">
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

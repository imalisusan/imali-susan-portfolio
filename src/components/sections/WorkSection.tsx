"use client";

import { useState } from "react";
import { work, workFilters, type WorkFilterId } from "@/data/work";
import { Chip } from "@/components/ui/Chip";
import { ArrowUpRight } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const MAX_TAGS = 4;

export function WorkSection() {
  const [filter, setFilter] = useState<WorkFilterId>("all");

  const items =
    filter === "all" ? work : work.filter((item) => item.kind === filter);

  const filters = (
    <div className="flex flex-wrap items-center gap-2">
      {workFilters.map((option) => {
        const active = option.id === filter;
        const count =
          option.id === "all"
            ? work.length
            : work.filter((item) => item.kind === option.id).length;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setFilter(option.id)}
            aria-pressed={active}
            className={[
              "font-display inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-200",
              active
                ? "border-ink bg-ink text-white"
                : "border-rule-2 bg-surface text-ink hover:border-ink",
            ].join(" ")}
          >
            {option.label}
            <span className={active ? "text-brand-soft" : "text-ink-3"}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );

  return (
    <Section
      id="work"
      theme="muted"
      eyebrow="My work"
      title="Selected work & projects"
      highlight="projects"
      lede="Platforms and websites shipped for utilities, retailers, insurers, clinics and communities."
      aside={filters}
    >
      {/* Keyed on the filter so every card remounts and re-runs its reveal —
          otherwise cards common to two filters keep their identity and the
          switch happens with no transition at all. */}
      <div key={filter} className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {/* Keyed on name, not href — Shuzia Books and iTestify share a URL. */}
        {items.map((item, index) => (
          <Reveal
            key={`${item.kind}-${item.name}`}
            delayMs={Math.min(index, 5) * 55}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-3xl border border-rule bg-surface p-7 shadow-[var(--shadow-card)] transition-[box-shadow,translate,border-color] duration-300 hover:-translate-y-1 hover:border-brand-line hover:shadow-[var(--shadow-lift)] motion-reduce:hover:translate-y-0 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="label text-ink-3">
                    {item.kind === "product" ? "Product" : "Website"}
                  </p>
                  <h3 className="display mt-3 text-xl leading-snug text-ink">
                    {item.name}
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand text-brand-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </div>

              <p className="mt-4 flex-1 text-[0.9375rem] leading-7 text-ink-2">
                {item.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {item.tech.slice(0, MAX_TAGS).map((tech) => (
                  <Chip key={`${item.href}-${tech}`}>
                    {tech}
                  </Chip>
                ))}
                {item.tech.length > MAX_TAGS && (
                  <span className="label inline-flex items-center px-1.5 py-2 text-[0.6875rem] text-ink-3">
                    +{item.tech.length - MAX_TAGS}
                  </span>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import { work, workFilters, type WorkFilterId } from "@/data/work";
import { toneForTech } from "@/data/techTone";
import { Card } from "@/components/ui/Card";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

const MAX_TAGS = 4;

export function WorkSection() {
  const [filter, setFilter] = useState<WorkFilterId>("all");

  const items =
    filter === "all" ? work : work.filter((item) => item.kind === filter);

  return (
    <Section
      id="work"
      index="01"
      tone="plum"
      title="Selected work"
      lede="Platforms and websites shipped for utilities, retailers, insurers, clinics and communities."
    >
      <Reveal>
        <div className="mb-8 flex flex-wrap items-center gap-2">
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
                  // pr trimmed by the tracking's trailing space, as with .pill
                  "label inline-flex items-center gap-2 rounded-full border py-2.5 pl-4 pr-[calc(1rem-0.14em)] transition-colors duration-200",
                  active
                    ? "border-plum bg-plum text-white"
                    : "border-rule text-ink-2 hover:border-plum-line hover:bg-plum-tint hover:text-plum",
                ].join(" ")}
              >
                {option.label}
                <span className={active ? "text-white/65" : "text-ink-3"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
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
              className="group block h-full"
            >
              <Card interactive className="flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-[1.0625rem] font-semibold tracking-tight text-ink">
                    {item.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-ink-3 transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:text-plum motion-reduce:group-hover:translate-x-0"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5.5 10.5 10.5 5.5M6 5.5h4.5V10" />
                    </svg>
                  </span>
                </div>

                <p className="mt-3 flex-1 text-[0.9375rem] leading-7 text-ink-2">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.tech.slice(0, MAX_TAGS).map((tech) => (
                    <Chip key={`${item.href}-${tech}`} tone={toneForTech(tech)}>
                      {tech}
                    </Chip>
                  ))}
                  {item.tech.length > MAX_TAGS && (
                    <span className="label inline-flex items-center px-1.5 py-1.5 text-ink-3">
                      +{item.tech.length - MAX_TAGS}
                    </span>
                  )}
                </div>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

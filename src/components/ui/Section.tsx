import type { ReactNode } from "react";
import { Sparkle } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

export type SectionTheme = "light" | "muted" | "dark";

const themeClasses: Record<SectionTheme, string> = {
  light: "bg-paper text-ink",
  muted: "bg-surface-2 text-ink",
  dark: "bg-night text-on-night",
};

/**
 * Splits the title around `highlight` so that word can take the accent
 * colour — the template's "The Ease-**Service** Process" treatment.
 */
function Title({
  title,
  highlight,
  dark,
}: {
  title: string;
  highlight?: string;
  dark: boolean;
}) {
  const at = highlight ? title.indexOf(highlight) : -1;
  if (!highlight || at === -1) return <>{title}</>;

  return (
    <>
      {title.slice(0, at)}
      <span className={dark ? "text-brand-soft" : "text-brand-ink"}>
        {highlight}
      </span>
      {title.slice(at + highlight.length)}
    </>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  highlight,
  lede,
  theme = "light",
  align = "left",
  aside,
  children,
}: {
  id: string;
  /** Short line above the heading, shown with a sparkle. */
  eyebrow: string;
  title: string;
  /** Part of the title to colour with the accent. */
  highlight?: string;
  lede?: string;
  theme?: SectionTheme;
  align?: "left" | "center";
  /** Optional element shown opposite the heading on wide screens. */
  aside?: ReactNode;
  children: ReactNode;
}) {
  const dark = theme === "dark";
  const centered = align === "center";

  return (
    <section
      id={id}
      className={`scroll-mt-20 py-20 sm:py-28 ${themeClasses[theme]}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <Reveal>
          <header
            className={[
              "flex flex-col gap-6",
              centered
                ? "items-center text-center"
                : "lg:flex-row lg:items-end lg:justify-between",
            ].join(" ")}
          >
            <div className={centered ? "max-w-2xl" : "max-w-2xl"}>
              <span
                className={`eyebrow ${dark ? "text-on-night" : "text-ink"}`}
              >
                <Sparkle
                  className={`h-4 w-4 ${dark ? "text-brand-soft" : "text-brand"}`}
                />
                {eyebrow}
              </span>
              <h2 className="display mt-4 text-[clamp(2rem,4.2vw,3rem)] leading-[1.1]">
                <Title title={title} highlight={highlight} dark={dark} />
              </h2>
              {lede && (
                <p
                  className={`mt-5 text-base leading-7 ${
                    dark ? "text-on-night-2" : "text-ink-2"
                  }`}
                >
                  {lede}
                </p>
              )}
            </div>
            {aside}
          </header>
        </Reveal>
        <div className="mt-12 sm:mt-14">{children}</div>
      </div>
    </section>
  );
}

import type { ReactNode } from "react";

/**
 * One quiet pill for every tag. An earlier design tinted each tag by
 * category; next to a single bold accent those extra hues read as noise.
 */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="label inline-flex items-center rounded-full border border-tag-line bg-tag-bg px-3 py-2 text-[0.6875rem] text-tag-ink">
      {children}
    </span>
  );
}

/**
 * Dense tech listing for the experience entries, which carry up to twelve
 * technologies each — a row of pills there would turn into noise.
 *
 * Flex-wrap rather than inline text: separators drawn with margins give the
 * line-breaker no break opportunity, so the whole list becomes one unbreakable
 * token and blows out the layout on narrow viewports. The separator trails its
 * item so a wrapped line never begins with "/".
 */
export function TechList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul
      className={`label flex flex-wrap gap-x-1.5 gap-y-2 text-[0.6875rem] ${
        dark ? "text-on-night-2" : "text-ink-3"
      }`}
    >
      {items.map((item, i) => (
        <li key={item} className="flex gap-x-1.5">
          {item}
          {i < items.length - 1 && (
            <span
              aria-hidden="true"
              className={dark ? "text-white/25" : "text-rule-2"}
            >
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

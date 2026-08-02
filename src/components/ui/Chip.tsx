import type { ReactNode } from "react";

export type Tone =
  | "plum"
  | "rose"
  | "terracotta"
  | "teal"
  | "gold"
  | "indigo"
  | "neutral";

/**
 * Every tag shares one neutral pill — only the text carries the category hue,
 * at low chroma. Written out in full rather than composed from the tone name,
 * because Tailwind only emits classes it can find as complete literal strings.
 */
const toneText: Record<Tone, string> = {
  plum: "text-plum-muted",
  rose: "text-rose-muted",
  terracotta: "text-terracotta-muted",
  teal: "text-teal-muted",
  gold: "text-gold-muted",
  indigo: "text-indigo-muted",
  neutral: "text-neutral-muted",
};

export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`label inline-flex items-center rounded-full border border-tag-line bg-tag-bg px-2.5 py-1.5 ${toneText[tone]}`}
    >
      {children}
    </span>
  );
}

/**
 * Dense tech listing, used where a row of pills would turn into noise — the
 * experience entries carry up to twelve technologies each. Deliberately left
 * uncoloured: the colour coding earns its keep on the work cards, and
 * repeating it across eighty more items would make the page restless.
 *
 * Flex-wrap rather than inline text: separators drawn with margins give the
 * line-breaker no break opportunity, so the whole list becomes one unbreakable
 * token and blows out the layout on narrow viewports. The separator trails its
 * item so a wrapped line never begins with "/".
 */
export function TechList({ items }: { items: string[] }) {
  return (
    <ul className="label flex flex-wrap gap-x-1.5 gap-y-1.5 text-ink-3">
      {items.map((item, i) => (
        <li key={item} className="flex gap-x-1.5">
          {item}
          {i < items.length - 1 && (
            <span aria-hidden="true" className="text-rule-2">
              /
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

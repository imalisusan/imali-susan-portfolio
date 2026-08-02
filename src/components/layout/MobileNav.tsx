"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type NavLink = { href: string; label: string };

export function MobileNav({ links }: { links: readonly NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      // Send focus back to the control that opened the panel, or the trigger
      // is lost to keyboard users once the panel unmounts.
      buttonRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-rule bg-surface text-ink-2 transition-colors duration-200 hover:border-plum-line hover:text-plum sm:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[1.05rem] w-[1.05rem]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {/* Backdrop, so a tap anywhere outside dismisses the menu. Portalled to
          <body> rather than left in place: the header carries backdrop-blur,
          and backdrop-filter makes an element the containing block for its
          fixed-position descendants, so `fixed inset-0` here would resolve to
          the header's own box and cover nothing. Only rendered while open, so
          document.body is always available by then. */}
      {open &&
        createPortal(
          <div
            aria-hidden="true"
            onClick={close}
            className="fixed inset-0 z-40 bg-ink/10 sm:hidden"
          />,
          document.body,
        )}

      {/* Kept mounted so it can transition. `inert` (not `hidden`) does the
          accessibility work while closed — it drops the panel out of the
          a11y tree and out of the tab order, which `hidden` would do too but
          without allowing any animation. */}
      <div
        id={panelId}
        inert={!open}
        className={[
          "absolute inset-x-0 top-full z-50 origin-top border-b border-rule bg-paper shadow-[var(--shadow-card)]",
          "transition-[opacity,translate] duration-250 ease-[cubic-bezier(0.16,1,0.3,1)] sm:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <nav className="mx-auto w-full max-w-5xl px-6 py-2">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-rule last:border-0">
                <a
                  href={link.href}
                  onClick={close}
                  className="label flex min-h-12 items-center text-ink-2 transition-colors duration-200 hover:text-plum"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

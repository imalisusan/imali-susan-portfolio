"use client";

import { useEffect, useState } from "react";

/**
 * The template's typed second line under the name. Types each role out,
 * holds, deletes, moves on. Screen readers get the full list once via the
 * sr-only text rather than a stream of partial words.
 */
export function TypedRole({ roles }: { roles: readonly string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(roles[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    if (!reduce && roles.length > 1) {
      const id = setTimeout(() => setAnimate(true), 2200);
      return () => clearTimeout(id);
    }
  }, [roles.length]);

  useEffect(() => {
    if (!animate) return;
    const role = roles[roleIndex];

    let delay = deleting ? 45 : 85;
    if (!deleting && length === role.length) delay = 2200;
    if (deleting && length === 0) delay = 350;

    const id = setTimeout(() => {
      if (!deleting && length === role.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      } else {
        setLength((n) => n + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(id);
  }, [animate, deleting, length, roleIndex, roles]);

  const text = roles[roleIndex]?.slice(0, length) ?? "";

  return (
    <>
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-[3px] translate-y-[0.08em] animate-pulse self-stretch bg-current align-baseline">
          &nbsp;
        </span>
      </span>
    </>
  );
}

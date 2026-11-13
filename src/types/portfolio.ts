import type { StaticImageData } from "next/image";

export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  highlights: string[];
  tech: string[];
  /** Company logo, imported as a static image. */
  logo?: StaticImageData;
  /** Tile colour behind a logo drawn for dark backgrounds. Defaults to white. */
  logoBg?: string;
  /** Shown in the logo tile when there is no logo, e.g. "FT". */
  initials?: string;
};

export type Project = {
  name: string;
  description: string;
  href: string;
  tech: string[];
};

/** A project or website build, tagged so the Work section can filter it. */
export type WorkItem = Project & {
  kind: "product" | "website";
};

export type Education = {
  school: string;
  qualification: string;
  dates: string;
  /** School crest or wordmark, imported as a static image. */
  logo?: StaticImageData;
};

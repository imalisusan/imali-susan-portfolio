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
};

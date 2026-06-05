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

export type Education = {
  school: string;
  qualification: string;
  dates: string;
};

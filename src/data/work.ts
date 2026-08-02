import type { WorkItem } from "@/types/portfolio";
import { projects } from "@/data/projects";
import { websites } from "@/data/websites";

/**
 * Projects and website builds are two lists in the CV but one question for a
 * visitor — "what has she shipped?". They are merged here and split back apart
 * by the filter in the Work section.
 */
export const work: WorkItem[] = [
  ...projects.map((p) => ({ ...p, kind: "product" as const })),
  ...websites.map((w) => ({ ...w, kind: "website" as const })),
];

export const workFilters = [
  { id: "all", label: "All" },
  { id: "product", label: "Products" },
  { id: "website", label: "Websites" },
] as const;

export type WorkFilterId = (typeof workFilters)[number]["id"];

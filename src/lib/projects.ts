import projects from "@/data/projects.json";

export type Project = (typeof projects)[number];

export const allProjects: Project[] = projects;

export const getProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug);

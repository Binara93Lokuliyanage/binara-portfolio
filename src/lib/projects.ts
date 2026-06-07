export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  heroImage: string;
  cardVideo?: string;
  cardDescription: string;
  about: string[];
  techStack: string[];
  video?: {
    title: string;
    description: string;
    embedUrl: string;
  };
  contributions: {
    title: string;
    description: string;
  }[];
  highlights: {
    label: string;
    value: string;
  }[];
};

const PROJECTS_API_URL =
  process.env.PROJECTS_API_URL ?? "http://13.236.4.82:5000/api/projects";

const normalizeProjects = (projects: Project[]) =>
  projects.map((project) => ({
    ...project,
    about: Array.isArray(project.about) ? project.about : [],
    techStack: Array.isArray(project.techStack) ? project.techStack : [],
    contributions: Array.isArray(project.contributions)
      ? project.contributions
      : [],
    highlights: Array.isArray(project.highlights) ? project.highlights : [],
  }));

const getProjectsFromPayload = (payload: unknown): Project[] => {
  if (Array.isArray(payload)) {
    return normalizeProjects(payload as Project[]);
  }

  if (payload && typeof payload === "object") {
    const record = payload as Record<string, unknown>;

    if (Array.isArray(record.projects)) {
      return normalizeProjects(record.projects as Project[]);
    }

    if (Array.isArray(record.data)) {
      return normalizeProjects(record.data as Project[]);
    }
  }

  return [];
};

export const getProjects = cache(async (): Promise<Project[]> => {
  const response = await fetch(PROJECTS_API_URL, {
    cache: process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }

  const payload: unknown = await response.json();
  return getProjectsFromPayload(payload);
});

export const getProjectBySlug = async (slug: string) => {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
};
import { cache } from "react";

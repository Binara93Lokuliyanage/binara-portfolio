"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

type ProjectFilterProps = {
  projects: Project[];
  techStacks: string[];
};

const ProjectFilter = ({ projects, techStacks }: ProjectFilterProps) => {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  const filteredProjects = useMemo(() => {
    if (selectedTech.length === 0) {
      return projects;
    }

    return projects.filter((project) =>
      project.techStack.some((tech) =>
        selectedTech.some((selected) => tech.toLowerCase() === selected.toLowerCase())
      )
    );
  }, [projects, selectedTech]);

  const toggleTech = (tech: string) => {
    setSelectedTech((currentTech) =>
      currentTech.includes(tech)
        ? currentTech.filter((item) => item !== tech)
        : [...currentTech, tech]
    );
  };

  return (
    <>
      <div className="project-filter" aria-label="Filter projects by tech stack">
        <button
          type="button"
          className={selectedTech.length === 0 ? "active" : ""}
          onClick={() => setSelectedTech([])}
        >
          All
        </button>
        {techStacks.map((tech) => (
          <button
            key={tech}
            type="button"
            className={selectedTech.includes(tech) ? "active" : ""}
            aria-pressed={selectedTech.includes(tech)}
            onClick={() => toggleTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="projects-wrapper">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectFilter;

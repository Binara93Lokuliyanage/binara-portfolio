import Footer from "@/components/footer";
import ProjectFilter from "@/components/project-filter";
import CtaSection from "@/components/sections/cta";
import { getProjects, type Project } from "@/lib/projects";

const getTechStacks = (projects: Project[]) => {
  const techStacks = projects.flatMap((project) => project.techStack);
  return Array.from(new Set(techStacks)).sort((a, b) => a.localeCompare(b));
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main>
      <section className="section-padding-top section-padding-bottom all-projects-section">
        <div className="container text-center">
          <h1>
            All <span className="highlight">Projects</span>
          </h1>
          <p className="description-text">
            Browse the full project archive and filter by the technologies used across each build.
          </p>
          <ProjectFilter
            projects={projects}
            techStacks={getTechStacks(projects)}
            projectHrefBase="/professional/projects"
          />
        </div>
      </section>
      <CtaSection />
      <Footer />
    </main>
  );
}

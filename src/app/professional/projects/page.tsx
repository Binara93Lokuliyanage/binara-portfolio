import Footer from "@/components/footer";
import ProjectFilter from "@/components/project-filter";
import CtaSection from "@/components/sections/cta";
import { allProjects } from "@/lib/projects";

const getTechStacks = () => {
  const techStacks = allProjects.flatMap((project) => project.techStack);
  return Array.from(new Set(techStacks)).sort((a, b) => a.localeCompare(b));
};

export default function ProjectsPage() {
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
          <ProjectFilter projects={allProjects} techStacks={getTechStacks()} />
        </div>
      </section>
      <CtaSection />
      <Footer />
    </main>
  );
}

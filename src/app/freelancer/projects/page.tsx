import Footer from "@/components/footer";
import ProjectFilter from "@/components/project-filter";
import FormDarkSection from "@/components/sections/form-dark";
import { allProjects } from "@/lib/projects";

const getTechStacks = () => {
  const techStacks = allProjects.flatMap((project) => project.techStack);
  return Array.from(new Set(techStacks)).sort((a, b) => a.localeCompare(b));
};

export default function FreelancerProjectsPage() {
  return (
    <main>
      <section className="section-padding-top section-padding-bottom all-projects-section freelancer-dark bg-dark">
        <div className="container text-center">
          <h1>
            All <span className="highlight">Projects</span>
          </h1>
          <p className="description-text">
            Browse the full project archive and filter by the technologies used across each build.
          </p>
          <ProjectFilter
            projects={allProjects}
            techStacks={getTechStacks()}
            projectHrefBase="/freelancer/projects"
          />
        </div>
      </section>
      <FormDarkSection />
      <Footer />
    </main>
  );
}

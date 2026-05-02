import Image from "next/image";
import Footer from "@/components/footer";
import CtaSection from "@/components/sections/cta";
import FormDarkSection from "@/components/sections/form-dark";
import type { Project } from "@/lib/projects";

type ProjectDetailPageProps = {
  project: Project;
  variant?: "professional" | "freelancer";
};

const ProjectDetailPage = ({
  project,
  variant = "professional",
}: ProjectDetailPageProps) => {
  const isFreelancer = variant === "freelancer";
  const darkSectionClass = isFreelancer
    ? "project-detail-dark freelancer-dark bg-dark"
    : "";

  return (
    <main>
      <section className="project-hero-section">
        <Image
          src={project.heroImage}
          alt={project.title}
          width={1600}
          height={900}
          priority
        />
        <div className="project-hero-overlay" />
        <div className="project-hero-content container">
          <span className="project-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.tagline}</p>
          <div className="project-hero-actions">
            <a className="btn-primary" href="#about-project">
              Explore Project
            </a>
            <a className="project-secondary-link" href="#project-video">
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      <section
        id="about-project"
        className={`section-padding-top section-padding-bottom ${darkSectionClass}`}
      >
        <div className="container project-section-grid">
          <div className="project-section-heading">
            <span className="project-section-label">About</span>
            <h2>What this project is about</h2>
          </div>
          <div className="project-section-body">
            <div className="project-copy-block">
              {project.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="project-highlights-grid">
              {project.highlights.map((item) => (
                <div key={item.label} className="project-highlight-card">
                  <span>{item.label}</span>
                  <h3>{item.value}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`section-padding-bottom ${darkSectionClass}`}>
        <div className="container project-section-grid">
          <div className="project-section-heading">
            <span className="project-section-label">Tech Stack</span>
            <h2>Tools used to shape the experience</h2>
          </div>
          <div className="project-section-body">
            <div className="tech-items-wrapper project-tech-items">
              {project.techStack.map((tech) => (
                <div key={tech} className="item">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="project-video"
        className={`section-padding-bottom project-video-section ${darkSectionClass}`}
      >
        <div className="container">
          <div className="project-video-frame">
            <iframe
              src={project.video.embedUrl}
              title={`${project.title} demo video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <section className={`section-padding-bottom ${darkSectionClass}`}>
        <div className="container project-section-grid">
          <div className="project-section-heading">
            <span className="project-section-label">My Contribution</span>
            <h2>How I contributed to the project</h2>
          </div>
          <div className="project-contributions-grid">
            {project.contributions.map((item) => (
              <article key={item.title} className="project-contribution-card card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isFreelancer ? <FormDarkSection /> : <CtaSection />}
      <Footer />
    </main>
  );
};

export default ProjectDetailPage;

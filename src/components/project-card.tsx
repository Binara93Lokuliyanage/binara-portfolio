import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  showVideo?: boolean;
  hrefBase?: string;
};

const ProjectCard = ({
  project,
  showVideo = false,
  hrefBase = "/professional/projects",
}: ProjectCardProps) => {
  return (
    <article className="card project-card">
      <div className="image-wrapper">
        {showVideo ? (
          <video
            src={project.cardVideo}
            poster={project.heroImage}
            autoPlay
            muted
            loop
            playsInline
            aria-label={`${project.title} project preview`}
          />
        ) : (
          <Image src={project.heroImage} alt={project.title} width={1000} height={1000} />
        )}
      </div>
      <div className="details-wrapper">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.cardDescription}</p>
        <div className="tech-items-wrapper">
          {project.techStack.slice(0, 4).map((tech) => (
            <div key={tech} className="item">
              {tech}
            </div>
          ))}
        </div>
        <Link href={`${hrefBase}/${project.slug}`}>
          Read More
          <Image
            src="/icons/btn-arrow-yellow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="btn-arrow"
          />
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;

import Image from "next/image";
import Link from "next/link";
import { allProjects } from "@/lib/projects";

const ProjectsSection = () => {
    return (
        <section id="projects" className="section-padding-top section-padding-bottom">
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Projects</span>
                </h2>
                <p className="description-text">
                    These projects reflect my experience building scalable web applications and cloud-ready systems. From designing backend APIs to deploying containerized services, each solution demonstrates practical engineering, clean architecture, and a commitment to production-level quality.
                </p>
                <div className="projects-wrapper">
                    {allProjects.map((project) => (
                        <article key={project.slug} className="card project-card">
                            <div className="image-wrapper">
                                <Image
                                    src={project.heroImage}
                                    alt={project.title}
                                    width={1000}
                                    height={1000}
                                />
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
                                <Link href={`/professional/project/${project.slug}`}>
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

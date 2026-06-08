import Link from "next/link";
import Image from "next/image";
import ProjectCard from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import Reveal from "../reveal";

const ProjectsSection = async () => {
    const featuredProjects = await getFeaturedProjects();

    return (
        <section id="projects" className="section-padding-top section-padding-bottom">
            <Reveal>
                <div className="container text-center">
                <h2>
                    My <span className="highlight">Projects</span>
                </h2>
                <p className="description-text">
                    These projects reflect my experience building scalable web applications and cloud-ready systems. From designing backend APIs to deploying containerized services, each solution demonstrates practical engineering, clean architecture, and a commitment to production-level quality.
                </p>
                <div className="projects-wrapper">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            showVideo
                            hrefBase="/professional/projects"
                        />
                    ))}
                </div>
                <Link href="/professional/projects" className="btn-primary projects-show-all">
                    Show All
                    <Image
                        src="/icons/btn-arrow.svg"
                        alt="Arrow"
                        width={16}
                        height={16}
                        className="btn-arrow"
                    />
                </Link>
            </div>
            </Reveal>
        </section>
    );
};

export default ProjectsSection;

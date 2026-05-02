import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { allProjects } from "@/lib/projects";

const ProjectsDarkSection = () => {
    const featuredProjects = allProjects.slice(0, 4);

    return (
        <section id="projects" className="section-padding-top section-padding-bottom freelancer-dark bg-dark">
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Projects</span>
                </h2>
                <p className="description-text">
                    A versatile full-stack developer blending creative frontends, powerful backends, and seamless DevOps workflows to build scalable digital experiences.
                </p>
                <div className="projects-wrapper">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            showVideo
                            hrefBase="/freelancer/projects"
                        />
                    ))}
                </div>
                <Link href="/freelancer/projects" className="btn-primary projects-show-all">
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


        </section>
    );
};

export default ProjectsDarkSection;

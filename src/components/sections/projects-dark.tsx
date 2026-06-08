import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/project-card";
import { getFeaturedProjects } from "@/lib/projects";
import Reveal from "../reveal";

const ProjectsDarkSection = async () => {
    const featuredProjects = await getFeaturedProjects();

    return (
        <section id="projects" className="section-padding-top section-padding-bottom freelancer-dark bg-dark">
            <div className="container text-center">
                <Reveal>
                    <h2>
                    My <span className="highlight">Projects</span>
                </h2>
                <p className="description-text">
                    A selection of my recent work, showcasing a range of projects that demonstrate my skills and experience in web development and digital solutions.
                </p>
                </Reveal>
                <Reveal>
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
                </Reveal>
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

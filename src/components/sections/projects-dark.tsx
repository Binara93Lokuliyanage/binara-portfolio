import Image from "next/image";

const ProjectsDarkSection = () => {
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
                    <div className="card">
                        <div className="image-wrapper">
                            <Image
                                src="/projects/project-image.png"
                                alt="Project Image"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="details-wrapper">
                            <h3>DTS Group</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna.</p>
                            <div className="tech-items-wrapper">
                                <div className="item">
                                    HTML
                                </div>
                                <div className="item">
                                    SCSS
                                </div>
                            </div>
                            <a href="#">
                                Read More
                                <Image
                                    src="/icons/btn-arrow-yellow.svg"
                                    alt="Arrow"
                                    width={16}
                                    height={16}
                                    className="btn-arrow"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <div className="image-wrapper">
                            <Image
                                src="/projects/project-image.png"
                                alt="Project Image"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="details-wrapper">
                            <h3>DTS Group</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna.</p>
                            <div className="tech-items-wrapper">
                                <div className="item">
                                    HTML
                                </div>
                                <div className="item">
                                    SCSS
                                </div>
                            </div>
                            <a href="#">
                                Read More
                                <Image
                                    src="/icons/btn-arrow-yellow.svg"
                                    alt="Arrow"
                                    width={16}
                                    height={16}
                                    className="btn-arrow"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ProjectsDarkSection;
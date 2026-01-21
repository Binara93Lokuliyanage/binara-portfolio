import Image from "next/image";

const SkillsSection = () => {
    return (
        <section id="skills" className="section-padding-top section-padding-bottom bg-off-white">
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Skills</span>
                </h2>
                <p className="description-text">
                    A versatile full-stack developer blending creative frontends, powerful backends, and seamless DevOps workflows to build scalable digital experiences.
                </p>
                <div className="skills-list-section">
                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-frontend.png"
                                    alt="Arrow"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h3>
                                Frontend Development
                            </h3>
                        </div>
                        <p>HTML, CSS/SCSS, Angular, React, JavaScript</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
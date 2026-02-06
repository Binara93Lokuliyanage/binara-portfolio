import Image from "next/image";

const ServicesDarkSection = () => {
    return (
        <section id="skills" className="section-padding-top section-padding-bottom bg-light-dark freelancer-dark">
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Services</span>
                </h2>
                <p className="description-text">
                    A versatile full-stack developer blending creative frontends, powerful backends, and seamless DevOps workflows to build scalable digital experiences.
                </p>
                <div className="skills-list-section">
                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-fe.png"
                                    alt="Front end"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Frontend Development
                            </h4>
                        </div>
                        <p>HTML, CSS/SCSS, Angular, React, JavaScript</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Proficiency</p>
                                <p className="percentage">95%</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "95%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-backend.png"
                                    alt="Back end"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Backend Development
                            </h4>
                        </div>
                        <p>Node.js, Express, Laravel, REST APIs<br /></p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Proficiency</p>
                                <p className="percentage">90%</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-db.png"
                                    alt="Arrow"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Database & Cloud
                            </h4>
                        </div>
                        <p>MongoDB, MySQL, Firestore, Firebase, GCP</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Proficiency</p>
                                <p className="percentage">85%</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-upload.png"
                                    alt="Arrow"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                DevOps & Deployment
                            </h4>
                        </div>
                        <p>Docker, Kubernetes, CI/CD, GCP<br /></p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Proficiency</p>
                                <p className="percentage">75%</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-design.png"
                                    alt="Arrow"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Design & UX
                            </h4>
                        </div>
                        <p>Figma, Photoshop, wireframing, responsive<br /></p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Proficiency</p>
                                <p className="percentage">80%</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-eng.png"
                                    alt="Arrow"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Engineering & Professional
                            </h4>
                        </div>
                        <p>Agile, Git, code review, collaboration, problem solving</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Proficiency</p>
                                <p className="percentage">90%</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesDarkSection;
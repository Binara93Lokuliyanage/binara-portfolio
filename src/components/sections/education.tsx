const EducationSection = () => {
    return (
        <section id="education" className="section-padding-top section-padding-bottom bg-off-white">
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Education</span>
                </h2>
                <p className="description-text">
                    My academic journey has strengthened my expertise in modern software engineering, cloud-native architectures, and scalable system design. Combined with over five years of industry experience, it has refined my analytical thinking and reinforced my commitment to building high-quality software solutions.
                </p>
                <div className="bullet-section-wrapper padding-top">
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-invis"></div>
                            <div className="bullet-blank bullet"></div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card edu-card">
                            <div className="card-heading">
                                <div className="title-wrapper">
                                    <h3>Master of Information Technology</h3>
                                    <h5>Deakin University</h5>
                                </div>
                                <div className="duration-block">
                                    Jun 2024 - Jun 2026
                                </div>
                            </div>
                            <p>
                                Currently completing a Master of Information Technology with a focus on modern
                                software development, cloud technologies, and full stack application design. The
                                program has strengthened my practical skills in building scalable, cloud-native
                                applications, working with modern frameworks, and applying industry-standard
                                development practices in real-world projects.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-vis"></div>
                            <div className="bullet-blank"></div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card edu-card">
                            <div className="card-heading">
                                <div className="title-wrapper">
                                    <h3>Bachelor of Information Technology</h3>
                                    <h5>University of Colombo</h5>
                                </div>
                                <div className="duration-block">
                                    Oct 2018 - Oct 2022
                                </div>
                            </div>
                            <p>
                                Completed a Bachelor of Information Technology, building a strong foundation in
                                programming, software engineering principles, database systems, and web
                                development. The degree provided both theoretical knowledge and practical
                                experience in developing full stack applications and understanding system design
                                concepts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;

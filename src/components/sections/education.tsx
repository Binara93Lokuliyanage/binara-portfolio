import Image from "next/image";

const EducationSection = () => {
    return (
        <section id="education" className="section-padding-top section-padding-bottom bg-off-white">
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Education</span>
                </h2>
                <div className="educations-wrapper">
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-invis"></div>
                            <div className="bullet"></div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <div className="title-wrapper">
                                    <h3>Master of Information Technology</h3>
                                    <h5>Deakin University Burwood</h5>
                                </div>
                                <div className="duration-block">
                                    June 2024 - June 2026
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Donec id ex finibus, malesuada magna id, tempus magna. 
                                 Pellentesque at ullamcorper arcu. Duis molestie dolor 
                                 non cursus vulputate. Pellentesque placerat sed metus 
                                 dapibus posuere. Vivamus aliquam risus eu sem mollis sagittis. 
                                 Mauris dictum iaculis risus, sit amet iaculis mauris congue eu. 
                                 Vivamus mattis finibus lorem, id vehicula velit tincidunt ac. 
                                 Vestibulum eu pretium ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-vis"></div>
                            <div className="bullet-blank"></div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card">
                            <div className="card-heading">
                                <div className="title-wrapper">
                                    <h3>Master of Information Technology</h3>
                                    <h5>Deakin University Burwood</h5>
                                </div>
                                <div className="duration-block">
                                    June 2024 - June 2026
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                 Donec id ex finibus, malesuada magna id, tempus magna. 
                                 Pellentesque at ullamcorper arcu. Duis molestie dolor 
                                 non cursus vulputate. Pellentesque placerat sed metus 
                                 dapibus posuere. Vivamus aliquam risus eu sem mollis sagittis. 
                                 Mauris dictum iaculis risus, sit amet iaculis mauris congue eu. 
                                 Vivamus mattis finibus lorem, id vehicula velit tincidunt ac. 
                                 Vestibulum eu pretium ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
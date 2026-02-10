import Image from "next/image";

const ProcessDarkSection = () => {
    return (
        <section id="projects" className="section-padding-top section-padding-bottom freelancer-dark bg-dark process-section">
            <div className="container col-2 ">
                <div>
                    <h2 className="h1">
                        Own a Website<br />
                        in just <span className="highlight"> 4 STEPS</span>
                    </h2>
                    <p>
                        A versatile full-stack developer blending creative frontends, powerful backends, and seamless DevOps workflows to build scalable digital experiences.
                    </p>
                </div>
                <div className="bullet-section-wrapper process-list">
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-invis"></div>
                            <div className="number">
                                01
                            </div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card">
                            <h3>Step 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna. Pellentesque at ullamcorper arcu. Duis molestie dolor non cursus vulputate. </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-vis"></div>
                            <div className="number">
                                02
                            </div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card">
                            <h3>Step 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna. Pellentesque at ullamcorper arcu. Duis molestie dolor non cursus vulputate. </p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-vis"></div>
                            <div className="number">
                                03
                            </div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card">
                            <h3>Step 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna. Pellentesque at ullamcorper arcu. Duis molestie dolor non cursus vulputate. </p>

                        </div>
                    </div>
                    <div className="item">
                        <div className="bullet-line-wrapper">
                            <div className="bullet-line-vis"></div>
                            <div className="number">
                                04
                            </div>
                            <div className="bullet-line"></div>
                        </div>
                        <div className="card">
                            <h3>Step 4</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna. Pellentesque at ullamcorper arcu. Duis molestie dolor non cursus vulputate. </p>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default ProcessDarkSection;
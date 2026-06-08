import Image from "next/image";
import Reveal from "../reveal";

const ProcessDarkSection = () => {
    return (
        <section id="process" className="section-padding-top section-padding-bottom freelancer-dark bg-dark process-section">
            <Reveal>
                <div className="container col-2 ">
                <div>
                    <h2 className="h1">
                        Own a Website<br />
                        in just <span className="highlight"> 4 STEPS</span>
                    </h2>
                    <p>
                        Owning a website is a powerful way to establish your online presence, showcase your work, and connect with your audience. With the right approach, you can have your own website up and running in just a few simple steps. Here's a straightforward guide to help you get started on your journey to owning a website.
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
                            <p>Tell Me About Your Needs. We'll work together to understand your goals and create a website that meets your unique requirements.</p>
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
                            <p>I will design a custom website layout and user interface that aligns with your brand and objectives.</p>
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
                            <p>I will develop the website using the latest technologies and best practices to ensure it is fast, secure, and user-friendly.</p>
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
                            <p>If you are satisfied with the website, You can pay for the final version and we can proceed with the launch and promotion. </p>
                        </div>
                    </div>
                </div>
            </div>
            </Reveal>


        </section>
    );
};

export default ProcessDarkSection;
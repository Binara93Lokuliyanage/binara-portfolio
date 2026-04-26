"use client";

import { useState } from "react";

const ExperienceSection = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const experiences = [
        {
            title: "Splashbox Australia",
            role: "Web Developer",
            duration: "Feb 2023 - June 2024",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna.Pellentesque at ullamcorper arcu. Duis molestie dolor non cursus vulputate. Pellentesque placerat sed metus dapibus posuere. Vivamus aliquam risus eu sem mollis sagittis. Mauris dictum iaculis risus, sit amet iaculis mauris congue eu Vivamus mattis finibus lorem, id vehicula velit tincidunt ac. Vestibulum eu pretium ipsum."
        },
        {
            title: "Master of Information Technology",
            role: "Deakin University Burwood",
            duration: "June 2024 - June 2026",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna.Pellentesque at ullamcorper arcu. Duis molestie dolor non cursus vulputate. Pellentesque placerat sed metus dapibus posuere. Vivamus aliquam risus eu sem mollis sagittis. Mauris dictum iaculis risus, sit amet iaculis mauris congue eu Vivamus mattis finibus lorem, id vehicula velit tincidunt ac. Vestibulum eu pretium ipsum."

        },
    ];

    return (
        <section
            id="experience"
            className="section-padding-top section-padding-bottom"
        >
            <div className="container text-center">
                <h2>
                    My <span className="highlight">Experience</span>
                </h2>

                <div className="bullet-section-wrapper padding-top">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="item"
                            onMouseEnter={() => setActiveIndex(index)}
                            onMouseLeave={() => setActiveIndex(null)}
                        >
                            <div className="bullet-line-wrapper">
                                <div className="bullet-line-vis"></div>

                                <div
                                    className={`bullet-blank ${activeIndex === index ? "bullet" : ""
                                        }`}
                                ></div>

                                <div className="bullet-line"></div>
                            </div>

                            <div className="card exp-card">
                                <div className="card-heading">
                                    <div className="title-wrapper">
                                        <h3>{exp.title}</h3>
                                        <h5>{exp.role}</h5>
                                    </div>
                                    <div className="duration-block">{exp.duration}</div>

                                </div>
                                <p>{exp.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
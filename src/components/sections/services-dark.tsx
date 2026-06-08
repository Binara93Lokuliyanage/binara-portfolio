import Image from "next/image";
import Reveal from "../reveal";

const ServicesDarkSection = () => {
    return (
        <section id="skills" className="section-padding-top section-padding-bottom bg-light-dark freelancer-dark">
            <div className="container text-center">
                <Reveal>
                    <h2>
                    My <span className="highlight">Services</span>
                </h2>
                <p className="description-text">
                    Clear, reliable website services for businesses that want a professional online presence without needing to understand the technical details.
                </p>
                </Reveal>

                <Reveal>
                    <div className="skills-list-section">
                    <div className="card">
                        <div className="title-section">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/skills-fe.png"
                                    alt="Website creation"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Website Creation
                            </h4>
                        </div>
                        <p>Modern, mobile-friendly websites built around your brand, services, and customer journey.</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Best for</p>
                                <p className="percentage">Launch</p>
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
                                    alt="Online store"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Online Store Setup
                            </h4>
                        </div>
                        <p>Simple, polished shop experiences that help customers browse, enquire, book, or buy with confidence.</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Best for</p>
                                <p className="percentage">Sales</p>
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
                                    alt="Website redesign"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Website Redesign
                            </h4>
                        </div>
                        <p>Refresh an outdated site with cleaner pages, better structure, faster loading, and a more trustworthy look.</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Best for</p>
                                <p className="percentage">Refresh</p>
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
                                    alt="Forms and bookings"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Forms & Bookings
                            </h4>
                        </div>
                        <p>Contact forms, quote requests, booking flows, and customer enquiries set up so leads reach you clearly.</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Best for</p>
                                <p className="percentage">Leads</p>
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
                                    alt="Website care"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Website Care
                            </h4>
                        </div>
                        <p>Ongoing updates, content changes, issue fixes, and improvements so your website stays current.</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Best for</p>
                                <p className="percentage">Support</p>
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
                                    alt="Business automation"
                                    width={24}
                                    height={24}
                                    className="btn-arrow"
                                />
                            </div>
                            <h4>
                                Business Automation
                            </h4>
                        </div>
                        <p>Small tools and process improvements that reduce manual work and keep your business information organised.</p>
                        <div className="skill-percentage-area">
                            <div className="skill-info-wrapper">
                                <p>Best for</p>
                                <p className="percentage">Workflow</p>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ServicesDarkSection;

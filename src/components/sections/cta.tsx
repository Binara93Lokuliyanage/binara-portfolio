import Image from "next/image";
import Reveal from "@/components/reveal";


const CtaSection = () => {
    return (
        <section id="contact" className="section-padding-top section-padding-bottom bg-off-white">
            <div className="container section-padding-bottom">
                <Reveal>
                    <div className="cta-container card">
                        <div className="img-wrapper">
                            <Image
                                src="/page-divider.png"
                                alt="Project Image"
                                width={1000}
                                height={1000}
                            />
                        </div>
                        <div className="text-wrapper">
                            <Reveal delay={0.1}>
                                <h2>Strengthen Your Team With Proven Engineering</h2>
                            </Reveal>
                            <Reveal delay={0.2}>
                                <p>Looking for a developer who can integrate quickly and deliver real results? I bring strong full-stack experience, clear communication, and a focus on building scalable, production-ready solutions.</p>
                                <div className="cta-actions-wrapper">
                                    <a href="#">
                                        <Image
                                            src="/icons/contact-active.svg"
                                            alt="Arrow"
                                            width={12}
                                            height={12}
                                            className="btn-arrow"
                                        />
                                        <span className="cta-action-text"> Call Now</span>
                                    </a>
                                    <a href="mailto:mr.binara@gmail.com">
                                        <Image
                                            src="/icons/email-black.png"
                                            alt="Arrow"
                                            width={12}
                                            height={12}
                                            className="btn-arrow"
                                        />
                                        <span className="cta-action-text"> Write to me</span>
                                    </a>
                                    <a href="mailto:mr.binara@gmail.com">
                                        <Image
                                            src="/icons/download-black.svg"
                                            alt="Arrow"
                                            width={12}
                                            height={12}
                                            className="btn-arrow"
                                        />
                                        <span className="cta-action-text"> Download my CV</span>
                                    </a>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default CtaSection;
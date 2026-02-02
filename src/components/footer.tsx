import Image from "next/image";

const Footer = () => {
    return (
        <section id="footer" className="section-padding-top section-padding-bottom footer">
            <div className="container">
                <div className="contacts">
                    <div className="main-methods-wrapper">
                        <div className="method">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/email.png"
                                    alt="Project Image"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div className="details">
                                <h6>Email</h6>
                                <a href="mailto:mr.binara@gmail.com">mr.binara@gmail.com</a>
                            </div>
                        </div>

                        <div className="method">
                            <div className="icon-wrapper">
                                <Image
                                    src="/icons/call.svg"
                                    alt="Project Image"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <div className="details">
                                <h6>Contact</h6>
                                <a href="mailto:mr.binara@gmail.com">+61 433 44 1325</a>
                            </div>
                        </div>

                    </div>
                    <div className="social-links-wrapper">
                        <a href="#" className="social-link">
                            <Image
                                src="/icons/fb-icon.svg"
                                alt="Arrow"
                                width={14}
                                height={14}
                                className="btn-arrow"
                            />
                        </a>
                        <a href="#" className="social-link">
                            <Image
                                src="/icons/insta-icon.svg"
                                alt="Arrow"
                                width={12}
                                height={12}
                                className="btn-arrow"
                            />
                        </a>
                        <a href="#" className="social-link">
                            <Image
                                src="/icons/linkedin-icon.svg"
                                alt="Arrow"
                                width={12}
                                height={12}
                                className="btn-arrow"
                            />
                        </a>
                        <a href="#" className="social-link">
                            <Image
                                src="/icons/yt-icon.svg"
                                alt="Arrow"
                                width={13}
                                height={13}
                                className="btn-arrow"
                            />
                        </a>
                    </div>
                </div>
                <div className="links">
                    <div className="navbar">
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#education">Education</a>
                        <a href="#experience">Experience</a>
                        <a href="#testimonials">Testimonials</a>
                        <a href="#contacts">Contacts</a>
                    </div>
                    <p>
                        Copyright © 2025 Binara Prabhasara Lokuliyanage. All rights reserved.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Footer;
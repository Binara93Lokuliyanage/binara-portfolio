import Reveal from "../reveal";

const ExperienceSection = () => {
    const experiences = [
        {
    title: "Hair Focus Salon",
    role: "Software Developer | Digital Solutions Consultant (Contract)",
    duration: "Jul 2025 - Present",
    company: "Hair Focus Salon, Australia",
    responsibilities: [
        "Provide ongoing website development and technical support through a service-based contract for a salon business operating across two Melbourne branches.",
        "Maintain and enhance the existing WordPress website, delivering feature updates and improvements to service content, responsive layouts, and booking touchpoints.",
        "Work directly with the owner to understand operational challenges, define requirements, and prioritise website and booking improvements.",
        "Scope and design a staged website redevelopment, including a custom WordPress theme and flexible content management for services, treatment options, and pricing.",
        "Plan an integrated booking system to replace Fresha, supporting branch selection, multiple services, individual stylist selection, and appointment availability.",
        "Define workflows for single-use gift cards, online payments, refunds, and customer cancellation and rescheduling.",
        "Prepare requirements and interface concepts for employee-hours reporting, a stylist appointment portal, and an AI assistant that guides customers to relevant salon services."
    ]
},
        {
            title: "Splashbox Australia",
            role: "Web Developer",
            duration: "Feb 2023 - Jul 2024",
            company: "Splashbox (Phacilitate), Australia",
            responsibilities: [
                "Delivered 7+ end-to-end web projects for Australian clients using Laravel, React, and Next.js, ensuring high performance, responsiveness, and scalability.",
                "Contributed to 4-5 additional projects, supporting feature development and enhancements across multiple applications.",
                "Built custom CMS platforms using Laravel, enabling clients to manage website content independently.",
                "Developed and customised websites using WordPress custom themes, Shopify, and Webflow, tailored to client requirements.",
                "Took full ownership of assigned projects, managing the complete development lifecycle from design handover to deployment.",
                "Optimised SEO and performance through image optimisation, structured content, and best practices, improving usability and search visibility.",
                "Designed and managed data solutions using MySQL and Supabase.",
                "Managed multiple projects simultaneously across different tech stacks while maintaining delivery quality.",
                "Collaborated closely with designers and stakeholders to deliver user-focused solutions aligned with business goals."
            ]
        },
        {
            title: "Raditechs (Pvt) Ltd.",
            role: "Software Engineer | Team Lead",
            duration: "Jul 2019 - Jun 2024",
            responsibilities: [
                "Developed SaaS-based enterprise applications, including a POS system with integrated accounting and sales management features, with backend services and RESTful APIs built using Laravel (PHP).",
                "Led development of a payroll system aligned with Sri Lankan government regulations, designing backend logic and API structures to handle complex business rules and data processing.",
                "Progressed from Frontend Developer (Angular) to Full Stack Developer, and was promoted to Team Lead within 1.5 years based on performance.",
                "Managed a cross-functional team of 10 developers and QA engineers, ensuring code quality, scalability, and timely delivery.",
                "Designed and implemented secure, scalable backend architectures using Laravel, including API development, data handling, and system integration.",
                "Acted as Scrum Master, managing sprints, tracking progress via Jira, and aligning development with business objectives.",
                "Collaborated with senior stakeholders to define system requirements and translate them into technical solutions.",
                "Led the full development lifecycle from requirement analysis and system design to implementation and deployment.",
                "Conducted client product demonstrations and supported onboarding for subscription-based SaaS platforms.",
                "Built scalable solutions using Angular, PHP (Laravel), and MySQL, with integrations involving Firebase and AWS.",
                "Improved team efficiency through structured workflows, clear communication, and process optimisation."
            ]
        },
    ];

    return (
        <section
            id="experience"
            className="section-padding-top section-padding-bottom"
        >
            <div className="container text-center">
                <Reveal>

                    <h2>
                        My <span className="highlight">Experience</span>
                    </h2>
                </Reveal>

                <Reveal>
                    <div className="bullet-section-wrapper padding-top">
                        {experiences.map((experience, index) => (
                            <div className="item" key={experience.title}>
                                <div className="bullet-line-wrapper">
                                    <div className={index === 0 ? "bullet-line-invis" : "bullet-line-vis"}></div>
                                    <div className={index === 0 ? "bullet-blank bullet" : "bullet-blank"}></div>
                                    <div className="bullet-line"></div>
                                </div>

                                <div className="card exp-card">
                                    <div className="card-heading">
                                        <div className="title-wrapper">
                                            <h3>{experience.title}</h3>
                                            <h5>{experience.role}</h5>
                                        </div>
                                        <div className="duration-block">{experience.duration}</div>
                                    </div>
                                    <ul>
                                        {experience.responsibilities.map((responsibility) => (
                                            <li key={responsibility}>{responsibility}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default ExperienceSection;

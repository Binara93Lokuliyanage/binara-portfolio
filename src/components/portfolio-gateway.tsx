"use client";

import Image from "next/image";
import Link from "next/link";

type GatewayOption = {
  id: "professional" | "freelancer";
  href: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  details: string[];
};

const PROFESSIONAL_IMAGE = "/professional-hero.png";
const FREELANCER_IMAGE = "/freelancer-hero.png";

const gatewayOptions: GatewayOption[] = [
  {
    id: "professional",
    href: "/professional",
    imageSrc: PROFESSIONAL_IMAGE,
    imageAlt: "Professional portfolio placeholder portrait",
    eyebrow: "Career track",
    title: "Professional Portfolio",
    subtitle: "Full Stack Software Engineer",
    description:
      "Explore my software engineering experience, technical skills, real-world projects, leadership background, and career profile.",
    cta: "View Professional Profile",
    details: ["Engineering leadership", "Full stack systems", "Career profile"],
  },
  {
    id: "freelancer",
    href: "/freelancer",
    imageSrc: FREELANCER_IMAGE,
    imageAlt: "Freelancer portfolio placeholder portrait",
    eyebrow: "Client track",
    title: "Freelancer Portfolio",
    subtitle: "Freelance Web & Digital Solutions",
    description:
      "Explore creative websites, WordPress, Shopify, Webflow, branding, and digital solutions built for real businesses.",
    cta: "Explore Freelance Work",
    details: ["Websites", "Commerce", "Brand systems"],
  },
];

export default function PortfolioGateway() {
  return (
    <main className="gateway-shell">
      <section className="landing-page" aria-label="Choose a portfolio experience">
        {gatewayOptions.map((option) => (
          <Link
            key={option.id}
            href={option.href}
            className={`gateway-panel gateway-panel-${option.id}`}
            aria-label={`${option.cta}: ${option.subtitle}`}
          >
            <div className="gateway-panel-bg" aria-hidden="true" />
            <div className="gateway-orbit gateway-orbit-one" aria-hidden="true" />
            <div className="gateway-orbit gateway-orbit-two" aria-hidden="true" />

            <div className="gateway-image-wrap">
              <Image
                src={option.imageSrc}
                alt={option.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="gateway-image"
              />
            </div>

            <div className="gateway-content">
              {/* <span className="gateway-eyebrow">{option.eyebrow}</span> */}
              <h1>{option.title}</h1>
              <p className="gateway-subtitle">{option.subtitle}</p>
              <p className="gateway-copy">{option.description}</p>

              <div className="gateway-details" aria-hidden="true">
                {option.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>

              
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import logoTransition from "@/assets/lottie/logo-transition.json";

const Sidebar = () => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [isMounted, setIsMounted] = useState(false);
  const basePath = "/professional";


  const navItems = [
    { href: `${basePath}#home`, id: "home", icon: "home", alt: "Home" },
    { href: `${basePath}#skills`, id: "skills", icon: "skills", alt: "Skills" },
    { href: `${basePath}#projects`, id: "projects", icon: "projects", alt: "Projects" },
    { href: `${basePath}#education`, id: "education", icon: "education", alt: "Education" },
    { href: `${basePath}#experience`, id: "experience", icon: "experience", alt: "Experience" },
    { href: `${basePath}#contact`, id: "contact", icon: "contact", alt: "Contact" },
  ];

  useEffect(() => {
    const sections = navItems.map(item =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      entries => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        const viewportCenter = window.innerHeight / 2;
        const closestEntry = visibleEntries.reduce<IntersectionObserverEntry | null>(
          (closest, entry) => {
            const entryCenter =
              entry.boundingClientRect.top + entry.boundingClientRect.height / 2;
            const entryDistance = Math.abs(entryCenter - viewportCenter);

            if (!closest) return entry;

            const closestCenter =
              closest.boundingClientRect.top + closest.boundingClientRect.height / 2;
            const closestDistance = Math.abs(closestCenter - viewportCenter);

            return entryDistance < closestDistance ? entry : closest;
          },
          null
        );

        if (closestEntry) {
          setActiveSection(closestEntry.target.id);
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  setIsMounted(true);
}, []);


  return (
    <aside className={`sidebar ${isMounted ? "sidebar-visible" : ""}`}>

      <div
        className={`logo-wrapper ${isLogoHovered ? "logo-wrapper-active" : ""}`}
        onMouseEnter={() => {
          setIsLogoHovered(true);
          lottieRef.current?.setSpeed(0.6);
          lottieRef.current?.play();
        }}
        onMouseLeave={() => {
          setIsLogoHovered(false);
          lottieRef.current?.stop();
          lottieRef.current?.goToAndStop(0, true);
        }}
      >
        {/* Hidden logo */}
        <a href = "/freelancer" className={`logo ${isLogoHovered ? "logo-show" : "logo-hidden"}`}>
          <img src="/logo-freelancer.jpg" alt="Logo" />
        </a>

        {/* Lottie animation */}
        <div className={`logo-lottie ${isLogoHovered ? "logo-lottie-active" : ""}`}>
          <Lottie
            lottieRef={lottieRef}
            animationData={logoTransition}
            loop={false}
            autoplay={false}
          />
        </div>

        {/* Default logo */}
        <div className="logo">
          <img src="/logo-professional.jpg" alt="Logo" />
        </div>
      </div>

      <nav>
        <ul>
          {navItems.map(item => {
            const isActive = activeSection === item.id;
            const iconSrc = isActive
              ? `/icons/${item.icon}-active.svg`
              : `/icons/${item.icon}.svg`;

            return (
              <li key={item.id} className={isActive ? "active" : ""}>
                <Link href={item.href} onClick={() => setActiveSection(item.id)}>

                  <div>
                    <Image
                      src={iconSrc}
                      alt={item.alt}
                      width={28}
                      height={28}
                    />

                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="nav-extra-btn">
        <img src="/icons/download.svg" />
      </div>
    </aside>
  );
};

export default Sidebar;

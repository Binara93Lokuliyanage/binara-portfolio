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


  const navItems = [
    { href: "#home", id: "home", icon: "home", alt: "Home" },
    { href: "#skills", id: "skills", icon: "skills", alt: "Skills" },
    { href: "#projects", id: "projects", icon: "projects", alt: "Projects" },
    { href: "#education", id: "education", icon: "education", alt: "Education" },
    { href: "#experience", id: "experience", icon: "experience", alt: "Experience" },
    { href: "#footer", id: "contact", icon: "contact", alt: "Contact" },
  ];

  /* 🔥 NEW: Observe sections */
  useEffect(() => {
    const sections = navItems.map(item =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
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
        <div className={`logo ${isLogoHovered ? "logo-show" : "logo-hidden"}`}>
          <img src="/logo.jpg" alt="Logo" />
        </div>

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
          <img src="/logo.jpg" alt="Logo" />
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
                <Link href={item.href}>

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

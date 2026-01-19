"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useRef } from "react";
import logoTransition from "@/assets/lottie/logo-transition.json";


const SidebarDark = () => {
  const pathname = usePathname();
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [playLottie, setPlayLottie] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const navItems = [
    { href: "/", icon: "home-dark", alt: "Home" },
    { href: "/skills", icon: "skills-dark", alt: "Skills" },
    { href: "/projects", icon: "projects-dark", alt: "Projects" },
    { href: "/education", icon: "education-dark", alt: "Education" },
    { href: "/experience", icon: "experience-dark", alt: "Experience" },
    { href: "/contact", icon: "contact-dark", alt: "Contact" },
  ];

  return (
    <aside className="sidebar sidebar-dark">
      <div
        className={`logo-wrapper ${isLogoHovered ? "logo-wrapper-active" : ""
          }`}
        onMouseEnter={() => {
          setIsLogoHovered(true);
          lottieRef.current?.setSpeed(0.6); 
          lottieRef.current?.play();
        }}
        onMouseLeave={() => {
          setIsLogoHovered(false);
          setPlayLottie(false);
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
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const iconSrc = isActive
              ? `/icons/${item.icon}-active.svg`
              : `/icons/${item.icon}.svg`;

            return (
              <li key={item.href} className={isActive ? "active" : ""}>
                <Link href={item.href}>
                  <Image
                    src={iconSrc}
                    alt={item.alt}
                    width={28}
                    height={28}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className = "nav-extra-btn">
        <img src="/icons/download-dark.svg"  />
      </div>
    </aside>
  );
};

export default SidebarDark;

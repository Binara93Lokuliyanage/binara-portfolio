"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const words = ["Passionate", "Creative", "Driven"];

const HomeDarkSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 200); // typing speed
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 140); // deleting speed
    } else if (!isDeleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), 3000); // pause
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <section id="home" className="col-2 section-padding-top section-padding-bottom home-dark bg-dark">
      <h1>Hi, I’m Binara</h1>

      <div className="home-section-wrapper">
        <h1>
          I’m <br />
          Binara Lokuliyanage <br />
          a{" "}
          <span className="highlight typing">
            {text}
            <span className="cursor">|</span>
          </span>{" "}<br />
          Software Engineer
        </h1>

        <p>
          I’m Binara Lokuliyanage, a passionate Software Engineer with over 5 years
          of professional experience in full-stack web development.
        </p>

        <a className="btn-primary">
          Hire me
          <Image
            src="/icons/btn-arrow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="btn-arrow"
          />
        </a>
        <div className = "social-links-wrapper">
          <a href = "#" className="social-link">
            <Image
            src="/icons/fb-icon.svg"
            alt="Arrow"
            width={14}
            height={14}
            className="btn-arrow"
          />
          </a>
          <a href = "#" className="social-link">
            <Image
            src="/icons/insta-icon.svg"
            alt="Arrow"
            width={12}
            height={12}
            className="btn-arrow"
          />
          </a>
          <a href = "#" className="social-link">
            <Image
            src="/icons/linkedin-icon.svg"
            alt="Arrow"
            width={12}
            height={12}
            className="btn-arrow"
          />
          </a>
          <a href = "#" className="social-link">
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
    </section>
  );
};

export default HomeDarkSection;

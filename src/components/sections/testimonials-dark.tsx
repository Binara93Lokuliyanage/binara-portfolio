import Image from "next/image";
"use client";
import { useRef, useState } from "react";
import Reveal from "../reveal";



const TestimonialsDarkSection = () => {

    const sliderRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const startY = useRef(0);
    const currentTranslate = useRef(0);
    const [index, setIndex] = useState(0);

    const CARD_HEIGHT = 220; // card + gap
    const TOTAL_SLIDES = 3;  // number of testimonials

    const handleTouchStart = (e: React.TouchEvent) => {
        sliderRef.current?.classList.add("dragging");
        startY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const delta = e.touches[0].clientY - startY.current;
        trackRef.current!.style.transform =
            `translateY(${currentTranslate.current + delta}px)`;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        sliderRef.current?.classList.remove("dragging");

        const delta = e.changedTouches[0].clientY - startY.current;

        if (delta < -50 && index < TOTAL_SLIDES - 1) {
            setIndex(prev => prev + 1);
        }
        if (delta > 50 && index > 0) {
            setIndex(prev => prev - 1);
        }
    };

    // snap to slide when index changes
    if (trackRef.current) {
        currentTranslate.current = -index * CARD_HEIGHT;
        trackRef.current.style.transform =
            `translateY(${currentTranslate.current}px)`;
    }

    return (
        <section
            id="testimonials"
            className="section-padding-top section-padding-bottom freelancer-dark bg-light-dark process-section"
        >
            <Reveal>
                <div className="container col-2">

                <div
                    ref={sliderRef}
                    className="testimonial-slider"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div ref={trackRef} className="testimonial-track">
                        <div className="card">
                            <div className="star-wrapper">
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                            </div>
                            <p>
                                <q>
                                    Brilliant work! Binara was able to take my vision and turn it into a reality. The project was completed on time and exceeded my expectations. I would highly recommend this developer to anyone looking for high-quality work.
                                </q>
                            </p>
                            <div className="client-details-wrapper">
                                <div className="client-image-wrapper">
                                    <img src="/amali-icon.jpg" alt="Logo" />
                                </div>
                                <div className="client-details">
                                    <h4>Amali</h4>
                                    <p>Owner | Hair Focus Salon</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="star-wrapper">
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                            </div>
                            <p>
                                <q>Binara's attention to detail and commitment to excellence made all the difference in bringing my website to life. I couldn't be happier with the results!</q>
                            </p>
                            <div className="client-details-wrapper">
                                <div className="client-image-wrapper">
                                    <img src="/amali-icon-2.jpg" alt="Logo" />
                                </div>
                                <div className="client-details">
                                    <h4>Andy Lam</h4>
                                    <p>Managing Director | Salvation Auto</p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="star-wrapper">
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                                <img src="/icons/star.png" alt="Logo" />
                            </div>
                            <p>
                                <q>Binara's expertise and dedication to quality are unmatched. She delivered beyond my expectations and made the entire process seamless.</q>
                            </p>
                            <div className="client-details-wrapper">
                                <div className="client-image-wrapper">
                                    <img src="/clifton.jpg" alt="Logo" />
                                </div>
                                <div className="client-details">
                                    <h4>Dr. Clifton Clarke</h4>
                                    <p>Dean | Logos Pneuma Institute</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="h1">
                        What<br /> My <span className="highlight">Clients</span> Say
                    </h2>
                    <p>
                        A versatile full-stack developer blending creative frontends,
                        powerful backends, and seamless DevOps workflows.
                    </p>
                </div>

            </div>
            </Reveal>
        </section>
    );
};


export default TestimonialsDarkSection;
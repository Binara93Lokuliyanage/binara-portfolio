import Footer from "@/components/footer";
import CtaSection from "@/components/sections/cta";
import VideoDividerSection from "@/components/sections/video-divider";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="hero-section">
        <Image
          src="/projects/project-image.png"
          alt="Project Image"
          width={1000}
          height={1000}
        />
      </section>
      <section className="section-padding-top section-padding-bottom">
        <div className="container col-2 project-container">
          <h1 className="text-primary">DTS Group</h1>
          <div className="project-description-wrapper">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ex finibus, malesuada magna id, tempus magna.</p>
            <div className="tech-items-wrapper">
              <div className="item">
                HTML
              </div>
              <div className="item">
                SCSS
              </div>
            </div>
            <div className="smart-numbers-wrapper">
              <div className="smart-item">
                <h6>
                  My Contribution
                </h6>
                <h2>80%</h2>
              </div>
              <div className="smart-item">
                <h6>
                  My Contribution
                </h6>
                <h2>80%</h2>
              </div>
              <div className="smart-item">
                <h6>
                  My Contribution
                </h6>
                <h2>80%</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <VideoDividerSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
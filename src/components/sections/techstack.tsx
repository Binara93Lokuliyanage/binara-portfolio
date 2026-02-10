import Image from "next/image";

const ClientLogos = [
  "/clients/dts-logo.svg",
  "/clients/honan-logo.svg",
  "/clients/bonnemaman-logo.svg",
  "/clients/dualflow-logo.svg",
  "/clients/highseason-logo.png",
  "/clients/lonsdale-institute-logo.png",
];

const TechStack = () => {
  return (
    <section
      id="logo-tracks"
      className="section-padding-top section-padding-bottom bg-off-white"
    >
      <div className="container text-center">
        <div className="logo-track-logos-slider">
          <div className="logo-track-logos-track">
            {/* row 1 */}
            <div className="logos-row">
              {ClientLogos.map((logo, i) => (
                <div className="logo-track-logo-wrapper" key={"row1-" + i}>
                  <Image src={logo} alt="Client logo" width={140} height={60} />
                </div>
              ))}
            </div>

            {/* row 2 (duplicate for seamless loop) */}
            <div className="logos-row">
              {ClientLogos.map((logo, i) => (
                <div className="logo-track-logo-wrapper" key={"row2-" + i}>
                  <Image src={logo} alt="Client logo" width={140} height={60} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

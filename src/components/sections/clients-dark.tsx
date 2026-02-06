import Image from "next/image";

const clientLogos = [
  "/clients/dts-logo.svg",
  "/clients/honan-logo.svg",
  "/clients/bonnemaman-logo.svg",
  "/clients/dualflow-logo.svg",
  "/clients/highseason-logo.png",
  "/clients/lonsdale-institute-logo.png",
];

const ClientsDarkSection = () => {
  return (
    <section
      id="clients"
      className="section-padding-top section-padding-bottom bg-light-dark freelancer-dark"
    >
      <div className="container text-center">
        <div className="client-logos-slider">
          <div className="client-logos-track">
            {/* row 1 */}
            <div className="logos-row">
              {clientLogos.map((logo, i) => (
                <div className="client-logo-wrapper" key={"row1-" + i}>
                  <Image src={logo} alt="Client logo" width={140} height={60} />
                </div>
              ))}
            </div>

            {/* row 2 (duplicate for seamless loop) */}
            <div className="logos-row">
              {clientLogos.map((logo, i) => (
                <div className="client-logo-wrapper" key={"row2-" + i}>
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

export default ClientsDarkSection;

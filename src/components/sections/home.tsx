import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="col-2">
      <h1>Hi, I’m Binara</h1>
      <div>
        <h1>
          I’m <br />Binara Lokuliyanage <br />a <span className="highlight">Passionate</span> Software Engineer
        </h1>
        <p>
          I’m Binara Lokuliyanage, a passionate Software Engineer with over 5 years of professional experience in full-stack web development. My technical expertise spans React, Angular, Node.js, Laravel, and PHP, along with hands-on experience in NoSQL databases like MongoDB and relational systems such as MySQL.
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

      </div>
    </section>
  );
};

export default HomeSection;

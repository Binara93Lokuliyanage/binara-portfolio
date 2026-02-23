"use client";

const VideoDividerSection = () => {
  return (
    <section id="video" className="video-divider">
      <video
        className="background-video"
        src="/projects/videos/Laptop_Scene_10.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="video-overlay" />
    </section>
  );
};

export default VideoDividerSection;
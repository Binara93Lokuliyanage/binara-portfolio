"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Side = "freelancer" | "professional" | null;

export default function Page() {
  const [activeSide, setActiveSide] = useState<Side>(null);
  const router = useRouter();

  const handleSelect = (side: Exclude<Side, null>) => {
    if (activeSide) return;
    setActiveSide(side);

    setTimeout(() => {
      router.push(`/${side}`);
    }, 2000);
  };

  return (
    <main>
      <section className={`landing-page ${activeSide ? `active-${activeSide}` : ""}`}>
        
        <div
          className="selecter freelancer-section"
          onClick={() => handleSelect("freelancer")}
        >
          <Image src="/hero-dummy.png" alt="" width={1000} height={1000} />
          <h1>Bring Your Idea to Life</h1>
        </div>

        <div
          className="selecter professional-section"
          onClick={() => handleSelect("professional")}
        >
          <Image src="/hero-dummy.png" alt="" width={1000} height={1000} />
          <h1>Hire Me for Your Team</h1>
        </div>

      </section>
    </main>
  );
}

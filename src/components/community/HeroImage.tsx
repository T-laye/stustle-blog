import Image from "next/image";
import React from "react";

export default function HeroImage() {
  const img = [
    "/images/community/community-hero-img-1.png",
    "/images/community/community-hero-img-2.png",
    "/images/community/community-hero-img-3.png",
  ];
  return (
    <section className="bg-primary/20 pb-20">
      <div className="container">
        <div className="w-full flex justify-center max-w-[1200px] mx-auto max-sm:hidden">
          <Image
            alt="image"
            src="/images/community/community-hero-img.svg"
            height={500}
            width={500}
            className="w-full object-contain -mt-60"
          />
        </div>

        {img.map((img, i) => (
          <div
            key={i}
            className="w-full flex justify-center max-w-[250px] mx-auto sm:hidden"
          >
            <Image
              alt="image"
              src={img}
              height={500}
              width={500}
              className={`w-full object-contain ${i === 0 ? "-mt-28 mb-6" : ""}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

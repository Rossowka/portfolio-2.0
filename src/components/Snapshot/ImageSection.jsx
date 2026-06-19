"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = ({ currentProject }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(sectionRef.current, { autoAlpha: 1 });
      gsap.from(sectionRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="px-6 pb-20 lg:py-32"
    >
      <div className="max-w-7xl mx-auto flex mt-8 gap-5 lg:gap-10 overflow-hidden flex-wrap">
        {currentProject.imageShowcase.map((image, index) => (
          <Image
            src={image.src}
            alt={image.alt}
            className={`object-cover object-center md:flex-[0_0_50%] md:max-w-[calc(50%-20px)]`}
            width={620}
            height={349}
            key={index}
            loading="lazy"
            placeholder="blur"
            blurDataURL={image.src}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 620px"
          />
        ))}
      </div>
    </section>
  );
};

export default ImageSection;

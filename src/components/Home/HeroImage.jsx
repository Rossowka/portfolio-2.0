"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroImage = ({ src, alt }) => {
  const imageRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(imageRef.current, { autoAlpha: 1 });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.97,
        duration: 0.8,
        ease: "expo.out",
        delay: 0.6,
      });
    },
    { scope: imageRef }
  );

  return (
    <div
      className="relative overflow-hidden order-1 sm:order-2 w-full sm:w-1/2 lg:w-4/12 z-0 sm:justify-items-end invisible"
      ref={imageRef}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={533}
        quality={100}
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px"
        className="object-cover transition-opacity duration-700 ease-out"
      />
    </div>
  );
};

export default HeroImage;

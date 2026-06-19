"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";

gsap.registerPlugin(useGSAP);

const HeadingM = ({ headingText, className }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const heading = containerRef.current.querySelector("h3");

      gsap.set(heading, { autoAlpha: 1 });

      gsap.from(heading, {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="mt-20 mb-10"
    >
      <h3 className={`invisible text-[42px] tracking-tight leading-tight ${className ?? ""}`}>
        {headingText}
      </h3>
    </div>
  );
};

export default HeadingM;

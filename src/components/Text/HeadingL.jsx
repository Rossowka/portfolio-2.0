"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const HeadingL = ({ headingText, subheadingText, className }) => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const subheading = containerRef.current.querySelector("[data-subheading]");
      const heading = containerRef.current.querySelector("[data-heading]");

      gsap.set([subheading, heading].filter(Boolean), { autoAlpha: 1 });

      const split = new SplitText(heading, {
        type: "words,chars",
        wordsClass: "inline-block",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      if (subheading) {
        tl.from(subheading, {
          autoAlpha: 0,
          y: 12,
          duration: 0.5,
          ease: "power2.out",
        });
      }

      tl.from(
        split.chars,
        {
          autoAlpha: 0,
          y: 20,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.03,
        },
        subheading ? "-=0.3" : 0
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="mb-[60px]"
    >
      {subheadingText && (
        <p
          data-subheading
          className="invisible whitespace-nowrap text-base text-accent mb-10 ml-1 tracking-wider leading-relaxed"
        >
          {subheadingText}
        </p>
      )}
      <h2
        data-heading
        className={`invisible text-[68px] tracking-tight leading-[1.2] text-balance ${className ?? ""}`}
      >
        {headingText}
      </h2>
    </div>
  );
};

export default HeadingL;

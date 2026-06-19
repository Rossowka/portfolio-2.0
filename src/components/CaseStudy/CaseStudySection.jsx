"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger, SplitText } from "gsap/all";
import { HeadingL } from "../Text";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const CaseStudySection = ({
  id,
  sectionTitle = "placeholder title",
  sectionTag = "placeholder tag",
  children,
}) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const heading = sectionRef.current.querySelector("[data-heading]");
      const subheading = sectionRef.current.querySelector("[data-subheading]");

      gsap.set([heading, subheading], { autoAlpha: 1 });

      const split = new SplitText(heading, {
        type: "words,chars",
        wordsClass: "inline-block",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      tl.from(split.chars, {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.03,
      }).from(
        subheading,
        {
          autoAlpha: 0,
          y: 12,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id={id}
      ref={sectionRef}
      className="pt-20 md:pt-32"
    >
      <HeadingL
        headingText={sectionTitle}
        subheadingText={sectionTag}
        headingProps={{ "data-heading": true, className: "invisible" }}
        subheadingProps={{ "data-subheading": true, className: "invisible" }}
      />
      {children}
    </section>
  );
};

export default CaseStudySection;

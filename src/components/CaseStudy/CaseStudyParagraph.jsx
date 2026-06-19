"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import { HeadingM } from "../Text";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CaseStudyParagraph = ({ title, children }) => {
  const paragraphRef = useRef(null);

  useGSAP(() => {
    gsap.set(paragraphRef.current, { autoAlpha: 1 });

    gsap.from(paragraphRef.current, {
      autoAlpha: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.03,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
        once: true,
      },
    });
  });

  return (
    <>
      {title && <HeadingM headingText={title} />}
      <p
        ref={paragraphRef}
        className="invisbile mb-10 text-[26px] leading-relaxed me-[22%] text-pretty"
      >
        {children}
      </p>
    </>
  );
};

export default CaseStudyParagraph;

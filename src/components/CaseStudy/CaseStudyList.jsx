"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { ScrollTrigger } from "gsap/all";
import { HeadingM } from "../Text";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const colVariants = {
  "1col": "flex-col",
  "2col": "flex-wrap sm:flex-row ml-8 md:-mx-5  gap-x-20",
  "3col": "flex-wrap sm:flex-row ml-8 md:-mx-5",
};

const CaseStudyList = ({ title, children, variant = "2col", className }) => {
  const listRef = useRef(null);

  useGSAP(
    () => {
      const items = listRef.current.querySelectorAll("li");

      gsap.set(items, { autoAlpha: 1 });

      gsap.from(items, {
        autoAlpha: 0,
        y: 12,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: listRef.current,
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: listRef }
  );

  return (
    <>
      {title && <HeadingM headingText={title} />}
      <ul
        ref={listRef}
        className={`flex ${colVariants[variant]} ${title ? "-mt-4" : "my-32"}`}
      >
        {children}
      </ul>
    </>
  );
};

export default CaseStudyList;

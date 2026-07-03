"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const FeaturedProjectsHeader = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const label = headerRef.current.querySelector(".fph-label");
      const heading = headerRef.current.querySelector(".fph-heading");
      const para = headerRef.current.querySelector(".fph-para");

      if (!label || !heading || !para) return;

      const headingSplit = SplitText.create(heading, {
        type: "words,chars",
        autoSplit: true,
        wordsClass: "inline-block",
      });

      gsap.set(heading, { autoAlpha: 1 });
      gsap.set(headingSplit.chars, { y: 20, autoAlpha: 0 });
      gsap.set(label, { y: 12, autoAlpha: 0 });
      gsap.set(para, { y: 12, autoAlpha: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            once: true,
          },
        })
        .to(label, { y: 0, autoAlpha: 1, duration: 0.4, ease: "expo.out" })
        .to(
          headingSplit.chars,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.025,
            ease: "expo.out",
          },
          ">-0.2"
        )
        .to(
          para,
          {
            y: 0,
            autoAlpha: 0.8,
            duration: 0.8,
            ease: "expo.out",
          },
          ">-0.8"
        );
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="max-w-7xl mx-auto flex flex-col mt-20 lg:mb-10"
    >
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 md:gap-5">
        <p className="fph-label font-semibold uppercase tracking-widest text-sandyBrown whitespace-nowrap leading-normal text-base pt-4 w-full">
          what I create
        </p>
        <h2 className="fph-heading text-[42px] lg:text-[68px] tracking-tight leading-tight mb-8 lg:mb-10 w-full">
          featured work
        </h2>
      </div>

      <p className="fph-para mb-16 lg:mb-[168px] md:w-5/12 ml-auto text-[26px] leading-normal pl-5 text-pretty">
        selection of projects focused on turning complex requirements into structured design.
      </p>
    </header>
  );
};

export default FeaturedProjectsHeader;

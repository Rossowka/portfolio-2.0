"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { PROJECTS } from "@/utils/projects";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

const PortfolioHeader = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const heading = containerRef.current.querySelector(".pf-heading");
      const label = containerRef.current.querySelector(".pf-label");
      const body = containerRef.current.querySelector(".pf-body");

      const split = SplitText.create(heading, {
        type: "words,chars",
        autoSplit: true,
        wordsClass: "inline-block",
      });

      gsap.set(heading, { autoAlpha: 1 });
      gsap.set(split.chars, { yPercent: 100, autoAlpha: 0 });
      gsap.set([label, body], { yPercent: 100, autoAlpha: 0 });

      gsap.from(containerRef.current, {
        opacity: 0,
        yPercent: 100,
        duration: 0.8,
        ease: "expo.out",
      });

      const tl = gsap.timeline();

      tl.to(label, { yPercent: 0, autoAlpha: 1, duration: 0.4, ease: "expo.out" })
        .to(
          split.chars,
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.025,
            ease: "expo.out",
          },
          ">-0.2"
        )
        .to(body, { yPercent: 0, autoAlpha: 0.8, duration: 0.4, ease: "expo.out" }, ">-0.8");

      split.chars.forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            y: -8,
            rotationZ: gsap.utils.random(-6, 6),
            duration: 0.25,
            ease: "back.out(2)",
            overwrite: "auto",
          });
          gsap.to(char, {
            y: 0,
            rotationZ: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
            delay: 0.2,
            overwrite: false,
          });
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <header
      ref={containerRef}
      className="max-w-7xl mx-auto flex flex-col"
    >
      <h1 className="pf-heading tracking-tight font-normal text-[68px] leading-none md:text-[80px] lg:text-[110px] mb-20 ms-[8%] invisible">
        My digital footprint
        <sup className="text-[26px] pl-2 top-0 md:text-[42px] lg:text-[68px] align-text-top leading-normal lg:pl-4 text-sandyBrown h-full">
          {PROJECTS.length}
        </sup>
      </h1>
      <div className="mb-20 md:mb-28 lg:mb-40 flex flex-col md:flex-row gap-5">
        <p className="invisible pf-label font-semibold uppercase tracking-widest text-sandyBrown whitespace-nowrap leading-normal text-base w-full sm:w-5/12 sm:text-right pr-5 pt-1">
          project index
        </p>
        <p className="invisible pf-body leading-normal text-pretty text-[26px] w-full sm:w-7/12 max-w-[510px] ">
          A space where ideas come to life with thoughtfulness. I shape digital experiences from
          enterprise ecosystems and design systems to brands and websites that connect with people.
        </p>
      </div>
    </header>
  );
};

export default PortfolioHeader;

"use client";

import dynamic from "next/dynamic";

// Lazy load components to improve performance
const Superpowers = dynamic(() => import("@/components/About/Superpowers"));
const CareerInNumbers = dynamic(() => import("@/components/About/CareerInNumbers"));
const HowIWork = dynamic(() => import("@/components/About/HowIWork"));

const AboutSection = () => {
  return (
    <section className="px-6 py-24 lg:py-48 bg-jetBlack text-f-inverse ">
      <div className="max-w-7xl w-full mx-auto relative">
        <p className="text-[26px] leading-relaxed tracking-wide pb-20 w-full lg:w-9/12 text-pretty ml-auto">
          Good design rarely starts with answers. It starts with curiosity; understanding the people
          involved, the context they operate in, and the challenges they’re trying to solve.{" "}
          <span className="opacity-60">
            Through conversation, exploration, testing, and refinement ideas evolve. They evolve
            until they become experiences that feel effortless, even when the problems behind them
            are anything but.
          </span>
        </p>

        <Superpowers />
        <CareerInNumbers />
        <HowIWork />
      </div>
    </section>
  );
};

export default AboutSection;

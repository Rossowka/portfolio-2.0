"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const HeadingXL = ({ headingText, subheadingText, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="flex flex-col mb-4 md:mb-8 lg:mb-16"
    >
      {subheadingText && (
        <p className="whitespace-nowrap uppercase text-xs font-semibold text-accent mb-3 ml-1">
          {subheadingText}
        </p>
      )}
      <h2
        className={`font-semibold text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </h2>
    </motion.div>
  );
};

export default HeadingXL;

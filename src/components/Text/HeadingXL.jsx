"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";

const HeadingXL = ({ headingText, subheadingText, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.4 }}
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

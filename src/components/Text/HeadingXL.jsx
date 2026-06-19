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
      className="flex flex-col gap-5"
    >
      {subheadingText && (
        <p className="intro-label font-semibold uppercase tracking-widest text-reddishBrown whitespace-nowrap leading-normal text-base">
          {subheadingText}
        </p>
      )}
      <h2
        className={`text-[42px] lg:text-[68px] tracking-tight leading-tight mb-8 lg:mb-10 w-full ${className}`}
      >
        {headingText}
      </h2>
    </motion.div>
  );
};

export default HeadingXL;

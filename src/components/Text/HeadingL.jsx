"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";

const HeadingL = ({ headingText, subheadingText, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-12"
    >
      {subheadingText && (
        <p className="whitespace-nowrap text-xs uppercase font-semibold text-accent mb-4 ml-1 leading-relaxed tracking-wider">
          {subheadingText}
        </p>
      )}
      <h3
        className={`font-semibold md:font-bold text-5xl tracking-tight leading-tight text-pretty ${className}`}
      >
        {headingText}
      </h3>
    </motion.div>
  );
};

export default HeadingL;

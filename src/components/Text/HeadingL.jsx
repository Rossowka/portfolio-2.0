"use client";

import { slideUp } from "@/utils/animations";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const HeadingL = ({ headingText, subheadingText, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideUp}
      className="mb-12"
    >
      {subheadingText && (
        <p className="whitespace-nowrap text-xs uppercase font-semibold text-accent mb-4 ml-1">
          {subheadingText}
        </p>
      )}
      <h3
        className={`font-semibold md:font-bold text-5xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </h3>
    </motion.div>
  );
};

export default HeadingL;

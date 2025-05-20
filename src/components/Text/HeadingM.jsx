"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const HeadingM = ({ headingText, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="mt-16 mb-8"
    >
      <p
        className={`font-bold text-3xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </p>
    </motion.div>
  );
};

export default HeadingM;

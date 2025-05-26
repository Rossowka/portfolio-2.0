"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";

const HeadingM = ({ headingText, className }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.4 }}
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

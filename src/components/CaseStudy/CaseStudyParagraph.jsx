"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";

const CaseStudyParagraph = ({ children }) => {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.25 }}
      className="mb-6"
    >
      {children}
    </motion.p>
  );
};

export default CaseStudyParagraph;

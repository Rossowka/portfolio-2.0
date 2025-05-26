"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";

const AboutParagraph = ({ children, small }) => {
  return (
    <motion.p
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.4 }}
      className={`pb-5 leading-relaxed text-f-primary/80  ${
        small ? " text-base" : " text-xl"
      }`}
    >
      {children}
    </motion.p>
  );
};

export default AboutParagraph;

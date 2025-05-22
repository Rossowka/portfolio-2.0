"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const AboutParagraph = ({ children, small }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <motion.p
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={`pb-5 leading-relaxed text-f-primary/80  ${
        small ? " text-base" : " text-xl"
      }`}
    >
      {children}
    </motion.p>
  );
};

export default AboutParagraph;

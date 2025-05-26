"use client";

import { staggerContainer } from "@/utils/animations";
import { HeadingM } from "../Text";
import { motion } from "motion/react";

const CaseStudyList = ({ title, children }) => {
  return (
    <>
      {title && <HeadingM headingText={title} />}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        className={`flex flex-wrap ${title ? "-mt-4" : "mt-16"} ml-8 md:-mx-5`}
      >
        {children}
      </motion.ul>
    </>
  );
};

export default CaseStudyList;

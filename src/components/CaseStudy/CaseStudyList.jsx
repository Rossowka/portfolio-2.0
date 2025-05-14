"use client";

import { staggerContainer } from "@/utils/animations";
import { HeadingM } from "../Text";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const CaseStudyList = ({ title, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <>
      {title && <HeadingM headingText={title} />}
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className={`flex flex-wrap ${title ? "-mt-4" : "mt-16"} ml-8 md:-mx-5`}
      >
        {children}
      </motion.ul>
    </>
  );
};

export default CaseStudyList;

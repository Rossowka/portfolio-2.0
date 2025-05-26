"use client";

import { staggerContainer } from "@/utils/animations";
import { HeadingL } from "../Text";
import { motion } from "motion/react";

const CaseStudySection = ({
  id,
  sectionTitle = "placeholder title",
  sectionTag = "placeholder tag",
  children,
}) => {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      variants={staggerContainer}
      custom={1}
      className="pt-20 md:pt-32 max-w-2xl"
    >
      <HeadingL
        headingText={sectionTitle}
        subheadingText={sectionTag}
      />
      {children}
    </motion.section>
  );
};

export default CaseStudySection;

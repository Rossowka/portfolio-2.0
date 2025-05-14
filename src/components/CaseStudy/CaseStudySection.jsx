"use client";

import { fadeIn } from "@/utils/animations";
import { HeadingL } from "../Text";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const CaseStudySection = ({
  id,
  sectionTitle = "placeholder title",
  sectionTag = "placeholder tag",
  children,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeIn}
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

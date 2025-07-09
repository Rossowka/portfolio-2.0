"use client";

import { fadeInUp } from "@/utils/animations";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const FeaturedProjectsHeader = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.header
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8 lg:pt-20 flex flex-col items-end"
    >
      <h2 className="font-medium text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight md:me-[8%] mb-8 lg:mb-16">
        featured work
      </h2>
      <p className="md:me-[16%] mb-16 md:mb-28 max-w-md">
        A selection of recent projects I've been working on. You can find here
        some interesting case studies for a deep dive into my work process.
      </p>
    </motion.header>
  );
};

export default FeaturedProjectsHeader;

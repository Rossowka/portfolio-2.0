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
      className="container flex flex-col items-end"
    >
      <h2 className="page-title md:me-[8%] mb-8 lg:mb-16">
        featured case studies
      </h2>
      <p className="md:me-[16%] mb-16 md:mb-28 max-w-md">
        A selection of recent projects I've been working on. You can find here
        some interesting case studies for a deep dive into my work process.
      </p>
    </motion.header>
  );
};

export default FeaturedProjectsHeader;

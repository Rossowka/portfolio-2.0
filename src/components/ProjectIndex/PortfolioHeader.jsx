"use client";

import { PROJECTS } from "@/utils/projects";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const PortfolioHeader = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex flex-col"
    >
      <h1 className="font-medium text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight mb-8 lg:mb-16">
        my digital footprint
        <sup className="text-[1.25rem]/[1.5] pl-2 top-0 md:text-[2rem]/[1.5] lg:text-[2.75rem]/[1.5] align-text-top lg:pl-4 text-accent h-full">
          {PROJECTS.length}
        </sup>
      </h1>
      <div className="md:ms-[16%] mb-10 md:mb-14 lg:mb-28 flex flex-col md:flex-row">
        <p className="font-semibold uppercase whitespace-nowrap leading-relaxed text-sm mt-1 text-f-inverse/40 mr-12 mb-4">
          [ project index ]
        </p>
        <p className="max-w-lg">
          This portfolio highlights a selection of my work, showcasing the
          variety and scope of projects I've completed. I believe these examples
          demonstrate the wide range of skills I bring to each endeavor.
        </p>
      </div>
    </motion.header>
  );
};

export default PortfolioHeader;

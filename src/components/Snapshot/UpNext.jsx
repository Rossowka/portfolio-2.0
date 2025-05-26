"use client";

import { staggerContainer } from "@/utils/animations";
import { Button } from "../Button";
import { motion } from "motion/react";

const UpNext = ({ nextProject }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.4 }}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8 p-8 mt-16 -mb-14 border-t-[1px] border-b-[1px] border-f-inverse"
    >
      <div className="flex flex-col">
        <p className="font-semibold uppercase text-f-primary/40 whitespace-nowrap leading-relaxed text-sm mt-1 mb-6">
          [ up next ]
        </p>
        <h1 className="font-medium text-[2rem] lg:text-[3rem] tracking-tight leading-tight mb-8 lg:mb-8">
          <span className="font-serif">{nextProject.client} - </span>
          <span>{nextProject.title}</span>
        </h1>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8 flex flex-col md:flex-row gap-4"
      >
        <Button
          label="view project snapshot"
          href={nextProject.url}
        />
        {nextProject.caseStudyUrl && (
          <Button
            primary
            label="see full case study"
            href={nextProject.caseStudyUrl}
          />
        )}
      </motion.div>
    </motion.section>
  );
};

export default UpNext;

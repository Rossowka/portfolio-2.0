"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/animations";

const SummarySection = ({ currentProject }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: "some" }}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8"
    >
      {/* summary text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="md:ms-[16%] mt-16 mb-10 md:mb-14 lg:mb-28 flex flex-col"
      >
        <div className="max-w-3xl">
          <p className="font-semibold text-f-primary whitespace-nowrap leading-normal text-base mr-12 mb-6 mt-1">
            Project Summary
          </p>
          <p className="text-2xl leading-normal font-medium lg:text-lg lg:leading-relaxed">
            {currentProject.summary}
          </p>
        </div>

        <div className="flex mt-16 gap-8">
          <div className="lg:ml-0 md:flex-1 flex-[0_0_50%] shrink-0 max-w-[50%] order-1 md:order-none">
            <p className="font-semibold text-f-primary whitespace-nowrap mt-1 mb-2 lg:mb-3 text-xs leading-normal">
              Product Context
            </p>
            <div className="flex flex-wrap gap-2">
              {currentProject.productTags.map((tag, index) => (
                <div
                  key={index}
                  className="border-s-inverse/10 border-[1px] text-f-primary rounded-lg px-4 py-1 text-sm font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:ml-0 md:flex-1 flex-[0_0_50%] shrink-0 max-w-[50%] order-1 md:order-none">
            <p className="font-semibold text-f-primary whitespace-nowrap mt-1 mb-2 lg:mb-3 text-xs leading-normal">
              Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {currentProject.focusAreasTags.map((tag, index) => (
                <div
                  key={index}
                  className="border-s-inverse/10 border-[1px] text-f-primary rounded-lg px-4 py-1 text-sm font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SummarySection;

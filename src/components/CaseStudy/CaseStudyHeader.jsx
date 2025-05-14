"use client";

import Link from "next/link";
import { Button } from "../Button";
import { ArrowIcon } from "../ArrowIcon";
import { motion } from "motion/react";

const CaseStudyHeader = ({ currentProject }) => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="container flex flex-col pt-16 md:pt-40"
    >
      {/* back button */}
      <Link
        href={currentProject.url}
        className="flex group gap-1 py-4 font-medium text-f-primary/40 hover:text-f-primary mt-1 mb-4 uppercase text-xs items-center"
      >
        <div className="min-w-fit content-center">
          <ArrowIcon className="transform transition-all duration-300 ease-in-out rotate-180 group-hover:rotate-[225deg]" />
        </div>
        see snapshot
      </Link>

      {/* section title */}
      <div className="flex flex-col ">
        <p className="text-sm pb-5 text-accent font-bold">
          {currentProject.client} | {currentProject.startDate} -{" "}
          {currentProject.endDate}
        </p>
        <h1 className="page-title md:mr-8">{currentProject.title}</h1>
      </div>

      {/* chips */}
      <div className="flex flex-wrap gap-2 pt-10">
        {currentProject.tags.map((tag, index) => (
          <div
            key={index}
            className="bg-accent/10 text-accent rounded-full px-4 py-2 text-sm font-bold"
          >
            {tag}
          </div>
        ))}
      </div>

      {/* row of buttons */}
      {currentProject.onlineUrl && (
        <div className="pt-10 flex flex-col md:flex-row gap-4">
          <Button
            label="see online"
            href={currentProject.onlineUrl}
          />
        </div>
      )}

      <div className="bg-f-inverse h-[1px] mt-10 mb-10"></div>

      {/* summary text */}
      <div className="flex flex-col md:flex-row">
        <p className="eyebrow mr-12 mb-4">[ context ]</p>
        <p className="text-2xl leading-normal lg:text-lg lg:leading-relaxed">
          {currentProject.context}
        </p>
      </div>
    </motion.header>
  );
};

export default CaseStudyHeader;

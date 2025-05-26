"use client";

import { Button, RowOfButtons } from "../Button";
import { BackButton, ProjectTitle } from ".";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ProjectHeader = ({ currentProject }) => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex flex-col"
    >
      <BackButton />
      <ProjectTitle currentProject={currentProject} />
      <RowOfButtons>
        {currentProject.caseStudyUrl && (
          <Button
            primary
            label="see full case study"
            href={currentProject.caseStudyUrl}
          />
        )}
        {currentProject.onlineUrl && (
          <Button
            label="see online"
            href={currentProject.onlineUrl}
          />
        )}
      </RowOfButtons>
      <div className="bg-f-inverse h-[1px] mb-10"></div>

      {/* summary text */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="md:ms-[16%] mb-10 md:mb-14 lg:mb-28 flex flex-col md:flex-row"
      >
        <p className="font-semibold uppercase text-f-primary/40 whitespace-nowrap leading-relaxed text-sm mr-12 mb-4 mt-1">
          [ summary ]
        </p>
        <p className="text-2xl leading-relaxed font-medium">
          {currentProject.summary}
        </p>
      </motion.div>
    </motion.header>
  );
};

export default ProjectHeader;

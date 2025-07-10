"use client";

import { Button, RowOfButtons } from "../Button";
import { BackButton, ProjectDetails, ProjectTitle } from ".";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ProjectHeader = ({ currentProject }) => {
  console.log(currentProject);
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex flex-col"
    >
      <BackButton />
      <div className="bg-f-inverse h-[1px] mb-10"></div>

      {/* section title */}
      <div className="flex flex-col mb-8 md:mb-20 lg:mb-32">
        <p className="text-sm pb-5 text-accent font-semibold leading-relaxed">
          {currentProject.client} | {currentProject.startDate}
          {currentProject.endDate && " - "}
          {currentProject.endDate}
        </p>
        <ProjectTitle currentProject={currentProject} />
        <ProjectDetails currentProject={currentProject} />
      </div>
    </motion.header>
  );
};

export default ProjectHeader;

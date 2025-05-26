"use client";

import { PROJECTS } from "@/utils/projects";
import { useState } from "react";
import FilterChip from "./FilterChip";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { slideRight } from "@/utils/animations";

const FilteredPortfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const FILTER_OPTIONS = [
    { id: "all", label: "all" },
    { id: "featured", label: "case studies" },
    { id: "regular", label: "projects" },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    switch (selectedFilter) {
      case "featured":
        return project.featured;
      case "regular":
        return !project.featured;
      default:
        return true;
    }
  });

  return (
    <>
      {/* chip set */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideRight}
        className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex justify-end gap-3 pb-4 mb-4 lg:pb-14"
      >
        {FILTER_OPTIONS.map((option) => (
          <FilterChip
            key={option.id}
            selected={selectedFilter === option.id}
            label={option.label}
            onClick={() => setSelectedFilter(option.id)}
          />
        ))}
      </motion.div>

      {/* filter results */}
      <div className="max-w-[77.5rem] mx-auto px-4 lg:px-8 mb-8 z-0">
        <motion.ul
          key={selectedFilter}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
                delay: 0.3,
              },
            },
          }}
          className="-mx-4 md:mb-16 flex flex-wrap justify-between w-auto"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </motion.ul>
      </div>
    </>
  );
};

export default FilteredPortfolio;

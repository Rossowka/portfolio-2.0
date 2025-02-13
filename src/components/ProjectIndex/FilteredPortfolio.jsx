import { PROJECTS } from "@/utils/projects";
import { useState } from "react";
import FilterChip from "./FilterChip";
import ProjectCard from "./ProjectCard";

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
      <div className="container flex justify-end gap-3 pb-4 mb-4 lg:pb-14">
        {FILTER_OPTIONS.map((option) => (
          <FilterChip
            key={option.id}
            selected={selectedFilter === option.id}
            label={option.label}
            onClick={() => setSelectedFilter(option.id)}
          />
        ))}
      </div>

      {/* filter results */}
      <div className="container mb-8">
        <ul className="-mx-4 md:mb-16 flex flex-wrap justify-between w-auto">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilteredPortfolio;

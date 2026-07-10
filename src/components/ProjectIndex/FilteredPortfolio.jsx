"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { PROJECTS } from "@/utils/projects";
import FilterChip from "./FilterChip";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(useGSAP);

const FilteredPortfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const chipRowRef = useRef(null);

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
  }).sort((a, b) => {
    if (selectedFilter === "all") {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
    }
    return 0;
  });

  useGSAP(
    () => {
      const chips = gsap.utils.toArray("button", chipRowRef.current);
      gsap.set(chips, { autoAlpha: 0, y: 20 });
      gsap.to(chips, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.8,
      });
    },
    { scope: chipRowRef }
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div
        ref={chipRowRef}
        className="flex justify-end gap-3 mb-10"
      >
        {FILTER_OPTIONS.map((option) => (
          <FilterChip
            key={option.id}
            selected={selectedFilter === option.id}
            label={option.label}
            onClick={() => setSelectedFilter(option.id)}
          />
        ))}
      </div>

      <div className="bg-white/20 h-[1px]"></div>

      <div className="my-10 z-0">
        <ul
          key={selectedFilter}
          className="-mx-4 md:mb-20 flex flex-wrap justify-between w-auto"
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilteredPortfolio;

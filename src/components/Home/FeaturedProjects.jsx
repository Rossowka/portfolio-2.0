import { projects } from "@/utils/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add gradient instead of black background

*/

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="featured"
      className="py-24 md:py-16 lg:pt-24 lg:pb-72 bg-black text-f-inverse"
    >
      {/* section title */}
      <div className="container flex flex-col items-end">
        <h2 className="page-title text-right md:me-[8%] mb-8 lg:mb-16">
          featured case studies
        </h2>
        <p className="text-right md:me-[16%] mb-16 md:mb-28 max-w-md">
          A selection of projects I've been working on. 
        </p>
      </div>

      {/* project list */}
      <ul className="container mb-16 lg:mb-28 flex flex-col gap-9 overflow-hidden">
        {featuredProjects.map((project, index) => (
          <FeaturedProjectCard
            key={index}
            project={project}
            index={index}
            featuredProjects={featuredProjects}
          />
        ))}
      </ul>

      {/* button */}
      <div className="container flex justify-center">
        <div className="rounded-3xl border-[1px] w-fit overflow-hidden border-f-inverse/20 hover:border-f-inverse transform transition-all duration-700 ease-in-out">
          <a
            href="/projects"
            className="flex group gap-1 px-8 py-4 lg:p-8"
          >
            <div>
              <img
                loading="lazy"
                src={"icons/arrow-accent.svg"}
                className="group-hover:-rotate-45 -rotate-45 md:-rotate-0 transform transition-all duration-300 ease-in-out"
                width={24}
                height={24}
                alt="Arrow"
              />
            </div>
            <p>
              <span>
                more work
                <sup className="text-xs pl-1 text-color-accent">
                  {projects.length}
                </sup>
              </span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

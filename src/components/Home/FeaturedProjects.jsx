import { projects } from "@/utils/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { Button } from "../Button";

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
      className="py-24 md:py-16 lg:pt-24 lg:pb-36 bg-black text-f-inverse"
    >
      {/* section title */}
      <header className="container flex flex-col items-end">
        <h2 className="page-title text-right md:me-[8%] mb-8 lg:mb-16">
          featured case studies
        </h2>
        <p className="text-right md:me-[16%] mb-16 md:mb-28 max-w-md">
          A selection of projects I've been working on. 
        </p>
      </header>

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
        <Button
          label="more projects"
          sup={projects.length}
          className="text-f-inverse"
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;

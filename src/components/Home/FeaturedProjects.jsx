import { PROJECTS } from "@/utils/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { Button } from "../Button";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add gradient instead of black background / or something else, gradient is very heavy on performance

*/

const FeaturedProjects = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section
      id="featured"
      className="py-24 md:py-16 lg:pt-24 lg:pb-36 bg-s-inverse text-f-inverse"
    >
      {/* section title */}
      <header className="container flex flex-col items-end">
        <h2 className="page-title md:me-[8%] mb-8 lg:mb-16">
          featured snapshots
        </h2>
        <p className="md:me-[16%] mb-16 md:mb-28 max-w-md">
          A selection of recent projects I've been working on. You can find here
          some interesting case studies for a deep dive into my work process.
        </p>
      </header>

      {/* project list */}
      <ul className="container mb-16 lg:mb-28 flex flex-col gap-9 overflow-hidden">
        {[...featuredProjects]
          .sort((a, b) => b.year - a.year)
          .map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
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
          sup={PROJECTS.length}
          className="text-f-inverse"
          href="/projects"
          dark
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;

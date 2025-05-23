import { PROJECTS } from "@/utils/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { Button } from "../Button";
import { FeaturedProjectsHeader } from ".";

const FeaturedProjects = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured);

  return (
    <section
      id="featured"
      className="py-24 md:py-16 lg:pt-24 lg:pb-36 bg-s-inverse text-f-inverse"
    >
      <FeaturedProjectsHeader />

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
      <div className="container flex justify-center px-8">
        <Button
          label="more work"
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

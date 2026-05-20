import { PROJECTS } from "@/utils/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import { Button } from "../Button";
import { FeaturedProjectsHeader } from ".";

const FeaturedProjects = () => {
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  const sorted = [...featuredProjects].sort((a, b) => b.year - a.year);

  return (
    <section
      id="featured"
      className="py-24 lg:py-48 px-6 bg-s-secondary text-f-inverse overflow-hidden"
    >
      <FeaturedProjectsHeader />

      <ul className="max-w-7xl mx-auto flex flex-col mb-10 md:mb-32 lg:mb-28">
        {sorted.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </ul>

      <div className="max-w-7xl mx-auto flex justify-center -mt-20 sm:-mt-0">
        <Button
          label="more work"
          sup={PROJECTS.length}
          className="text-f-inverse"
          href="/projects"
          variant="dark"
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;

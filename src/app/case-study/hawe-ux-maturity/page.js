import { Button } from "@/components";
import { ProjectDetails, UpNext } from "@/components/Snapshot";
import { PROJECTS } from "@/utils/projects";

const HUXCaseStudy = async () => {
  let title = "hawe-ux-maturity";
  let featuredProjects = PROJECTS.filter(
    (project) => project.featured === true
  );
  let index = featuredProjects.findIndex((item) => item.id === title);
  let currentProject = featuredProjects[index];
  let nextProject =
    index === featuredProjects.length - 1
      ? featuredProjects[0]
      : featuredProjects[index + 1];

  return (
    <>
      <section className="pt-32 md:pt-48 relative">
        {/* section title */}
        <header className="container flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between">
            <h1 className="project-title md:mr-8 max-w-2xl">
              <span className="font-serif">{currentProject.client} - </span>
              <span>{currentProject.title}</span>
            </h1>
            <ProjectDetails currentProject={currentProject} />
          </div>

          {/* row of buttons */}
          <div className="mb-10 flex flex-col md:flex-row gap-4">
            {currentProject.onlineUrl && (
              <Button
                label="see online"
                href={currentProject.onlineUrl}
              />
            )}
          </div>
          <div className="bg-f-inverse h-[1px] mb-10"></div>

          {/* summary text */}
          <div className="md:ms-[16%] mb-10 md:mb-14 lg:mb-28 flex flex-col md:flex-row">
            <p className="eyebrow mr-12 mb-4">[ context ]</p>
            <p className="max-w-lg">{currentProject.context}</p>
          </div>
        </header>
      </section>

      {/* the meat of case study goes here */}

      <UpNext nextProject={nextProject} />
    </>
  );
};

export default HUXCaseStudy;

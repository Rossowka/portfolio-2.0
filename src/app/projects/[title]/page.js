import { Button } from "@/components";
import { ImageSection, ProjectDetails, UpNext } from "@/components/Project";
import { PROJECTS } from "@/utils/projects";

// check how the layout looks with buttons and without buttons, how does it affect the divider and text below
export default async function Project({ params }) {
  const title = (await params).title;
  let index = PROJECTS.findIndex((item) => item.id === title);
  let currentProject = PROJECTS[index];
  let nextProject =
    index === PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[index + 1];

  return (
    <>
      <section className="pt-32 md:pt-48 relative">
        {/* section title */}
        <header className="container flex flex-col">
          <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-16">
            <h1 className="project-title ">
              <span className="font-serif">{currentProject.client} - </span>
              <span>{currentProject.title}</span>
            </h1>
            <ProjectDetails currentProject={currentProject} />
          </div>

          {/* row of buttons */}
          <div className="mb-10 flex flex-col md:flex-row gap-4">
            {currentProject.caseStudyUrl && (
              <Button
                primary
                label="see full case study"
                href={currentProject.caseStudyUrl}
              />
            )}
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
            <p className="eyebrow mr-12 mb-4">[ project summary ]</p>
            <p className="max-w-lg">{currentProject.description}</p>
          </div>
        </header>

        <ImageSection currentProject={currentProject} />
        <UpNext nextProject={nextProject} />
      </section>
    </>
  );
}

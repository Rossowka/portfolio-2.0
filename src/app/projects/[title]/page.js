import { ArrowIcon, Button } from "@/components";
import { ImageSection, ProjectDetails, UpNext } from "@/components/Snapshot";
import { PROJECTS } from "@/utils/projects";
import Link from "next/link";

export default async function ProjectSnapshot({ params }) {
  const title = (await params).title;
  let index = PROJECTS.findIndex((item) => item.id === title);
  let currentProject = PROJECTS[index];
  let nextProject =
    index === PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[index + 1];

  return (
    <>
      <section className="pt-32 md:pt-48 relative">
        <header className="container flex flex-col">
          {/* back button */}
          <Link
            href="/projects"
            className="flex group gap-1 py-4 font-medium text-f-primary/40 hover:text-f-primary mt-1 mb-4 uppercase text-xs items-center"
          >
            <div className="min-w-fit content-center">
              <ArrowIcon className="transform transition-all duration-300 ease-in-out rotate-180 group-hover:rotate-[225deg]" />
            </div>
            back to projects
          </Link>

          {/* section title */}
          <div className="flex flex-col lg:flex-row justify-between">
            <h1 className="project-title md:mr-8 max-w-2xl">
              {currentProject.title}
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
            <p className="eyebrow mr-12 mb-4 mt-1">[ context ]</p>
            <p className="text-2xl leading-relaxed">{currentProject.context}</p>
          </div>
        </header>
      </section>

      <ImageSection currentProject={currentProject} />
      <UpNext nextProject={nextProject} />
    </>
  );
}

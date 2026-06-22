import { ProjectHeader } from "@/components";
import { PROJECTS } from "@/utils/projects";
import dynamic from "next/dynamic";

const SummarySection = dynamic(() => import("@/components/CaseStudy/SummarySection"));
const ImageSection = dynamic(() => import("@/components/CaseStudy/ImageSection"));
const UpNext = dynamic(() => import("@/components/CaseStudy/UpNext"));

export default async function ProjectSnapshot({ params }) {
  const title = (await params).title;
  let index = PROJECTS.findIndex((item) => item.id === title);
  let currentProject = PROJECTS[index];
  let nextProject = index === PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[index + 1];

  return (
    <>
      <ProjectHeader currentProject={currentProject} />
      <SummarySection currentProject={currentProject} />

      {currentProject.imageShowcase.length > 0 && <ImageSection currentProject={currentProject} />}

      <UpNext nextProject={nextProject} />
    </>
  );
}

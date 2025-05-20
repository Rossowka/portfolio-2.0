import {
  ImageSection,
  ProjectHeader,
  UpNext,
} from "@/components/Snapshot";
import { PROJECTS } from "@/utils/projects";

export default async function ProjectSnapshot({ params }) {
  const title = (await params).title;
  let index = PROJECTS.findIndex((item) => item.id === title);
  let currentProject = PROJECTS[index];
  let nextProject =
    index === PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[index + 1];

  return (
    <>
      <section className="pt-16 md:pt-32 relative">
        <ProjectHeader currentProject={currentProject}/>
      </section>

      <ImageSection currentProject={currentProject} />
      <UpNext nextProject={nextProject} />
    </>
  );
}

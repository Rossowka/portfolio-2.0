import { ImageSection, ProjectHeader } from "@/components/Snapshot";
import { PROJECTS } from "@/utils/projects";
import dynamic from "next/dynamic";

const MainImageSection = dynamic(() =>
  import("@/components/Snapshot/MainImageSection")
);
const SummarySection = dynamic(() =>
  import("@/components/Snapshot/SummarySection")
);
const UpNext = dynamic(() => import("@/components/Snapshot/UpNext"));

export default async function ProjectSnapshot({ params }) {
  const title = (await params).title;
  let index = PROJECTS.findIndex((item) => item.id === title);
  let currentProject = PROJECTS[index];
  let nextProject =
    index === PROJECTS.length - 1 ? PROJECTS[0] : PROJECTS[index + 1];

  return (
    <>
      <section className="pt-16 md:pt-32 mb-16 relative">
        <ProjectHeader currentProject={currentProject} />
      </section>
      <MainImageSection currentProject={currentProject} />
      <SummarySection currentProject={currentProject} />

      {currentProject.imageShowcase && (
        <ImageSection currentProject={currentProject} />
      )}

      <UpNext nextProject={nextProject} />
    </>
  );
}

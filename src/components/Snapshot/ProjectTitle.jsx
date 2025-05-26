import { ProjectDetails } from ".";

const ProjectTitle = ({ currentProject }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <h1 className="font-medium text-[2rem] lg:text-[3rem] tracking-tight leading-tight mb-8 lg:mb-8 md:mr-8 max-w-2xl">
        {currentProject.title}
      </h1>
      <ProjectDetails currentProject={currentProject} />
    </div>
  );
};

export default ProjectTitle;

import { ProjectDetails } from ".";

const ProjectTitle = ({ currentProject }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      <h1 className="project-title md:mr-8 max-w-2xl">
        {currentProject.title}
      </h1>
      <ProjectDetails currentProject={currentProject} />
    </div>
  );
};

export default ProjectTitle;

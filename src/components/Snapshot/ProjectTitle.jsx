import { ProjectDetails } from ".";

const ProjectTitle = ({ currentProject }) => {
  return (
    <h1 className="font-medium text-[2rem] lg:text-[3rem] tracking-tight leading-tight mb-8 lg:mb-8 md:mr-8 max-w-3xl text-balance">
      {currentProject.title}
    </h1>
  );
};

export default ProjectTitle;

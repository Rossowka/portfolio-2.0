const ProjectTitle = ({ currentProject }) => {
  return (
    <h1 className="font-medium text-[2rem] lg:text-[3rem] tracking-tight leading-tight mb-10 lg:mb-8 md:mr-8 text-balance">
      {currentProject.title}
    </h1>
  );
};

export default ProjectTitle;

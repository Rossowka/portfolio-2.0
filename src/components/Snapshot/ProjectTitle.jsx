const ProjectTitle = ({ currentProject }) => {
  return (
    <h1 className="font-medium font-serif text-[26px] lg:text-[42px] tracking-tight leading-tight mb-5 md:mr-8 text-balance xl:w-8/12">
      {currentProject.title}
    </h1>
  );
};

export default ProjectTitle;

const ProjectTitle = ({ currentProject }) => {
  return (
    <h1 className="font-medium font-serif text-[26px] lg:text-[68px] tracking-tight leading-[1.1] mb-5 md:mr-8 text-balance xl:w-10/12">
      {currentProject.title}
    </h1>
  );
};

export default ProjectTitle;

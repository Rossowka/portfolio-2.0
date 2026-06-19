const ProjectDetails = ({ currentProject }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:gap-10 w-full">
      <div className="whitespace-nowrap text-base">
        <p className="text-accent tracking-wider leading-relaxed">Industry:</p>
        <p>{currentProject.industry}</p>
      </div>
      <div className="whitespace-nowrap text-base">
        <p className="text-accent tracking-wider leading-relaxed">Product:</p>
        <p>{currentProject.product}</p>
      </div>
      <div className="whitespace-nowrap text-base">
        <p className="text-accent tracking-wider leading-relaxed">Market:</p>
        <p>{currentProject.market}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;

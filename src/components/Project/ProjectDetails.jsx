const ProjectDetails = ({ currentProject }) => {
  return (
    <div className="me-[8%] mt-2 flex justify-between md:flex-col">
      <div className="mb-8 order-2 md:order-1">
        <p className="eyebrow mb-2 text-xs leading-normal">
          [ location & year ]
        </p>
        <p className="text-xs leading-normal font-serif">
          {currentProject.location} &copy; {currentProject.year}
        </p>
      </div>
      <div className="mb-8 order-1 md:order-2">
        <p className="eyebrow mb-2 text-xs leading-normal">
          [ my contributions ]
        </p>
        {currentProject.role.map((role) => (
          <p
            key={role}
            className="text-xs leading-normal font-serif"
          >
            {role}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

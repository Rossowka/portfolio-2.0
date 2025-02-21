const ProjectDetails = ({ currentProject }) => {
  return (
    <div className="flex flex-col md:flex-row w-full lg:w-fit mb-8 lg:mb-0 gap-4">
      {/* first column */}
      <div className="mt-2 flex flex-1 lg:flex-col lg:w-40 lg:flex-none gap-4 ">
        <div className="flex-1 order-3 md:order-1 lg:flex-none">
          <p className="eyebrow mb-2 text-xs leading-normal">[ timeline ]</p>
          <p className="text-xs leading-normal font-serif">
            {currentProject.startDate}{" "}
            {currentProject.endDate && `- ${currentProject.endDate}`}
          </p>
          <p className="eyebrow text-xs leading-normal font-serif">
            {currentProject.duration}
          </p>
        </div>
        <div className="lg:ml-0 flex-1 order-2 lg:flex-none">
          <p className="eyebrow mb-2 text-xs leading-normal">[ roles ]</p>
          {currentProject.role.map((role) => (
            <p
              key={role}
              className="text-xs leading-normal font-serif pb-1"
            >
              {role}
            </p>
          ))}
        </div>
        {currentProject.team && (
          <div className="lg:ml-0 flex-1 order-1 md:order-3 lg:flex-none">
            <p className="eyebrow mb-2 text-xs leading-normal">[ team ]</p>
            {currentProject.team.map((member) => (
              <p
                key={member.role}
                className="text-xs leading-normal font-serif pb-1"
              >
                {member.count} {member.role}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* second column */}
      {currentProject.impact && currentProject.constraints && (
        <div className="mt-2 flex flex-1 lg:flex-col lg:w-60 lg:flex-none gap-4 md:ml-8 lg:ml-0">
          {currentProject.impact && (
            <div className="max-w-60 w-2/3 mr-4 md:mr-0 lg:w-full">
              <p className="eyebrow mb-2 text-xs leading-normal">[ impact ]</p>
              {currentProject.impact.map((result, index) => (
                <p
                  key={index}
                  className="text-xs leading-normal font-serif pb-1"
                >
                  {result.data} {result.text}
                </p>
              ))}
            </div>
          )}
          {currentProject.constraints &&
            currentProject.constraints.length > 0 && (
              <div className="lg:max-w-60 w-1/3 lg:w-full">
                <p className="eyebrow mb-2 text-xs leading-normal">
                  [ constraints ]
                </p>
                {currentProject.constraints.map((limitation, index) => (
                  <p
                    key={index}
                    className="text-xs leading-normal font-serif pb-1"
                  >
                    {limitation}
                  </p>
                ))}
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;

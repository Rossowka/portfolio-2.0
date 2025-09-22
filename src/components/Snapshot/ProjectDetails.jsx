const ProjectDetails = ({ currentProject }) => {
  return (
    <div className="mt-2 flex lg:flex-none md:gap-8 flex-wrap md:flex-nowrap">
      {currentProject.impact && (
        <div className="md:flex-1 lg:flex-none flex-[0_0_50%] max-w-[50%]">
          <p className="font-semibold text-f-primary whitespace-nowrap mt-1 mb-2 lg:mb-3 text-xs leading-normal">
            Impact
          </p>
          <div className="flex flex-col lg:flex-row">
            {currentProject.impact.slice(0, 2).map((result, index) => (
              <div
                key={index}
                className="text-xs leading-normal font-serif pb-6 lg:pb-2 lg:flex-[0_0_50%] lg:shrink-0 lg:max-w-[50%] pr-4"
              >
                <strong className="text-xl md:text-2xl lg:text-3xl leading-tight tracking-tighter block whitespace-nowrap mb-1">
                  {result.data}
                </strong>
                <p className="text-balance leading-tight">{result.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-f-inverse w-[1px] hidden md:block"></div>

      <div className="lg:ml-0 md:flex-1 flex-[0_0_50%] shrink-0 max-w-[50%] order-1 md:order-none pl-8 md:pl-0">
        <p className="font-semibold text-f-primary whitespace-nowrap mt-1 mb-2 lg:mb-3 text-xs leading-normal">
          Role
        </p>
        <ul className="list-disc list-inside md:list-outside">
          {currentProject.role.map((role) => (
            <li
              key={role}
              className="text-xs leading-tight font-serif pb-1"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>

      {currentProject.constraints && currentProject.constraints.length > 0 && (
        <>
          <div className="bg-f-inverse w-[1px] hidden md:block"></div>
          <div className="md:flex-1 flex-[0_0_50%] shrink-0 max-w-[50%] pt-6 md:pt-0 order-3 md:order-none">
            <p className="font-semibold text-f-primary whitespace-nowrap mt-1 mb-2 lg:mb-3 text-xs leading-normal">
              Constraints
            </p>
            <ul className="list-disc list-inside md:list-outside">
              {currentProject.constraints.map((limitation, index) => (
                <li
                  key={index}
                  className="text-xs leading-tight font-serif pb-1.5"
                >
                  {limitation}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {currentProject.team && currentProject.team.length > 0 && (
        <>
          <div className="bg-f-inverse w-[1px] hidden md:block"></div>
          <div className="lg:ml-0 md:flex-1 flex-[0_0_50%] shrink-0 max-w-[50%] pl-8 md:pl-0 pt-6 md:pt-0 order-4 md:order-none">
            <p className="font-semibold text-f-primary whitespace-nowrap mt-1 mb-2 lg:mb-3 text-xs leading-normal">
              Team
            </p>
            {currentProject.team.map((member) => (
              <div
                key={member.role}
                className="flex gap-2"
              >
                <p className="text-xs leading-tight font-serif pb-1.5 inline-block w-[14px]">
                  {member.count}
                </p>
                <p className="text-xs leading-tight font-serif pb-1.5 inline-block">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectDetails;

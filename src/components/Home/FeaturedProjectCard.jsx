import Image from "next/image";
import Link from "next/link";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add thumbnail images
[] adjust the images to different screen resolutions

*/

const FeaturedProjectCard = ({ project, index, featuredProjects }) => {
  return (
    <li
      key={index}
      className="flex flex-col overflow-hidden group border-[1px] bg-accent/10 border-f-inverse/20 hover:border-f-inverse transform transition-all duration-700"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.075) 0px -4.03105px 20.1553px -0.3125px, rgba(0, 0, 0, 0.075) 0px -9.5543px 47.7715px -0.625px, rgba(0, 0, 0, 0.075) 0px -17.428px 87.1402px -0.9375px, rgba(0, 0, 0, 0.075) 0px -28.9741px 144.87px -1.25px, rgba(0, 0, 0, 0.075) 0px -46.7908px 233.954px -1.5625px, rgba(0, 0, 0, 0.075) 0px -76.5918px 382.959px -1.875px, rgba(0, 0, 0, 0.075) 0px -131.886px 659.43px -2.1875px, rgba(0, 0, 0, 0.075) 0px -240px 1200px -2.5px",
      }}
    >
      <Link href={project.url}>
        {/* inner text */}
        <div className={`grow p-4 md:p-8 flex flex-col`}>
          {/* top line */}
          <div className="flex justify-between mb-4">
            <div className="flex gap-1">
              <p className="leading-4">[ 0{index + 1} ]</p>
              <p className="text-xs leading-4 opacity-80">
                /0{featuredProjects.length}
              </p>
            </div>
            <p className="text-xs leading-4">{project.year}</p>
          </div>

          {/* separator */}
          <div className="container bg-f-inverse/20 h-[1px]"></div>

          {/* tags */}
          <div className="mt-4 mb-4 lg:mb-8 text-sm">
            <ul className="flex gap-4 mb-4 lg:mb-6 md:gap-4">
              {project.role.map((tag) => (
                <li
                  key={tag}
                  className="font-normal opacity-80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* title */}
          <div className="flex gap-1 md:gap-16 justify-between">
            <h3 className="title">{project.title}</h3>
            <div className="min-w-fit">
              <Image
                src={"icons/arrow-accent.svg"}
                className="-rotate-45 md:rotate-0 md:group-hover:-rotate-45 transform transition-all duration-300 ease-in-out"
                width={24}
                height={24}
                alt="Arrow icon"
              />
            </div>
          </div>

          {/* results */}
          <div className="flex -mx-2 lg:-mx-5">
            {project.results.map((result) => (
              <div className="pt-8 pb-12 lg:pb-14 px-2 lg:px-5 flex-[0_0_50%] shrink-0 max-w-[50%]">
                <strong className="text-4xl lg:text-5xl leading-tight tracking-tighter font-serif block mb-4">
                  {result.data}
                </strong>
                <p className="text-sm lg:text-base leading-normal font-normal max-w-[15rem] opacity-80">
                  {/* <p className="text-sm leading-normal font-normal max-w-xs opacity-80"> */}
                  {result.text}
                </p>
              </div>
            ))}
          </div>

          {/* image */}
          <div className="relative overflow-hidden">
            <div className="pt-[60%] md:pt-[45%] lg:pt-[30%]">
              <div className="absolute inset-0">
                <picture className="h-full absolute left-0 top-0 w-full object-cover">
                  <Image
                    src={project.thumbnail}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500`}
                    // className={`object-cover w-full h-full object-center absolute top-0 left-0 hover:scale-105 transition-transform duration-500`}
                    alt={project.alt}
                    width={540}
                    height={360}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={`overflow-hidden h-full`}>
            <Image
              src={project.thumbnail}
              className={`object-cover w-full h-full object-center`}
              alt={project.alt}
              width={540}
              height={360}
            />
          </div>
        </div> */}
      </Link>
    </li>
  );
};

export default FeaturedProjectCard;

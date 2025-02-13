import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add thumbnail images
[] adjust the images to different screen resolutions
[] add little snake animation to the see the project text
[] add this animation on hover www.hover.dev/components/cards#shimmer-border-card

*/

const FeaturedProjectCard = ({ project, index, featuredProjects }) => {
  return (
    <li
      key={index}
      className="flex flex-col overflow-hidden group border-[1px] bg-accent/10 border-f-inverse/20 hover:border-f-inverse transform transition-all duration-700"
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
            <div className="min-w-fit relative">
              <ArrowIcon className="-rotate-45 lg:rotate-0 md:group-hover:-rotate-45 transform transition-all duration-300 ease-in-out text-accent" />
              <div className="absolute top-8 right-0 h-full w-full">
                <p className="lg:hidden whitespace-nowrap text-xs text-accent rotate-90">
                  see the project
                </p>
              </div>
            </div>
          </div>

          {/* results */}
          <div className="flex -mx-2 lg:-mx-5">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="pt-8 pb-12 lg:pb-14 px-2 lg:px-5 flex-[0_0_50%] shrink-0 max-w-[50%]"
              >
                <strong className="text-4xl lg:text-5xl leading-tight tracking-tighter font-serif block mb-4">
                  {result.data}
                </strong>
                <p className="text-sm lg:text-base leading-normal font-normal max-w-[15rem] opacity-80">
                  {result.text}
                </p>
              </div>
            ))}
          </div>

          {/* thumbnail */}
          <div className="relative overflow-hidden">
            <div className="pt-[60%] md:pt-[45%] lg:pt-[30%]">
              <div className="absolute inset-0">
                <picture className="h-full absolute left-0 top-0 w-full object-cover">
                  <Image
                    src={project.thumbnail}
                    className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500`}
                    alt={project.alt}
                    width={540}
                    height={360}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default FeaturedProjectCard;

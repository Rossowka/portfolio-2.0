import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <li
      className="mb-8 px-4 group transform transition-all duration-700 w-full md:max-w-[50%] md:flex-[50%] overflow-hidden"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.075) 0px -4.03105px 20.1553px -0.3125px, rgba(0, 0, 0, 0.075) 0px -9.5543px 47.7715px -0.625px, rgba(0, 0, 0, 0.075) 0px -17.428px 87.1402px -0.9375px, rgba(0, 0, 0, 0.075) 0px -28.9741px 144.87px -1.25px, rgba(0, 0, 0, 0.075) 0px -46.7908px 233.954px -1.5625px, rgba(0, 0, 0, 0.075) 0px -76.5918px 382.959px -1.875px, rgba(0, 0, 0, 0.075) 0px -131.886px 659.43px -2.1875px, rgba(0, 0, 0, 0.075) 0px -240px 1200px -2.5px",
      }}
    >
      <Link
        href={project.url}
        className="gap-4"
      >
        <figure>
          {/* thumbnail */}
          <div className="relative overflow-hidden">
            <div className="pt-[62.6%] ">
              <div className="absolute inset-0">
                <picture className="h-full absolute left-0 top-0 w-full object-cover">
                  <Image
                    loading="lazy"
                    src={project.thumbnail}
                    className={`object-cover w-full h-full object-center absolute top-0 left-0 hover:scale-105 transition-transform duration-500`}
                    alt="Project thumbnail"
                    width={540}
                    height={360}
                  />
                </picture>
              </div>
            </div>
          </div>
          {/* description */}
          <figcaption>
            <h3 className="pt-4 md:pt-5 w-full">
              <span className="font-serif text-[110%]">
                {project.client} -{" "}
              </span>
              <span>{project.title}</span>
            </h3>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ProjectCard;

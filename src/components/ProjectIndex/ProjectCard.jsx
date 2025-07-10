"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";

const ProjectCard = ({ project }) => {
  return (
    <motion.li
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        y: -2,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
      }}
      className="mb-8 px-4 w-full md:max-w-[50%] md:flex-[50%] overflow-hidden"
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
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.snapshot.src}
              alt={project.snapshot.alt}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={project.snapshot.src}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 572px"
            />
          </div>
          {/* description */}
          <figcaption>
            <h3 className="pt-4 md:pt-5 w-full font-medium text-lg text-pretty">
              <span className="font-serif text-[110%]">
                {project.client} -{" "}
              </span>
              <span>{project.title}</span>
            </h3>
          </figcaption>
        </figure>
      </Link>
    </motion.li>
  );
};

export default ProjectCard;

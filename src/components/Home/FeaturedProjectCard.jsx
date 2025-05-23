"use client";

import Image from "next/image";
import { Button } from "../Button";

import { fadeInUp, staggerContainer } from "@/utils/animations";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const FeaturedProjectCard = ({ project, index, featuredProjects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.li
      key={index}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="flex flex-col overflow-hidden border-[1px] rounded-3xl bg-accent/10 border-f-inverse/20"
    >
      {/* thumbnail */}
      <div className="relative overflow-hidden aspect-[1110/400] md:aspect- w-full p-4 md:p-8">
        <Image
          src={project.thumbnail.l.src}
          alt={project.thumbnail.l.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1110px"
          className="object-cover w-full h-full"
        />
      </div>

      <div>
        {/* inner text */}
        <motion.div
          variants={staggerContainer}
          className={`grow p-4 md:p-8 flex flex-col`}
        >
          {/* top line */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-between mb-4"
          >
            <div className="flex gap-1">
              <p className="leading-4">[ 0{index + 1} ]</p>
              <p className="text-xs leading-4 opacity-80">
                /0{featuredProjects.length}
              </p>
            </div>
            <p className="text-xs leading-4">{project.year}</p>
          </motion.div>

          {/* separator */}
          <motion.div
            variants={fadeInUp}
            className="container bg-f-inverse/20 h-[1px]"
          ></motion.div>

          {/* tags */}
          <motion.div
            variants={fadeInUp}
            className="mt-4 mb-4 lg:mb-8 text-xs md:text-sm"
          >
            <ul className="flex gap-4 mb-4 lg:mb-6 md:gap-4 ">
              {project.role.map((tag) => (
                <li
                  key={tag}
                  className="font-normal opacity-80"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* title */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-1 md:gap-16 justify-between"
          >
            <h3 className="title mb-2 md:mr-8 lg:mb-8">{project.title}</h3>
          </motion.div>

          {/* results */}
          <motion.div
            variants={fadeInUp}
            className="flex -mx-2 lg:-mx-5"
          >
            {project.impact.slice(0, 2).map((result, index) => (
              <div
                key={index}
                className="pt-4 pb-12 lg:pb-14 px-2 lg:px-5 flex-[0_0_50%] shrink-0 max-w-[50%]"
              >
                <strong className="text-4xl lg:text-5xl leading-tight tracking-tighter font-serif block mb-2">
                  {result.data}
                </strong>
                <p className="text-sm lg:text-base leading-normal font-normal max-w-[15rem] opacity-80">
                  {result.text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="flex flex-col md:flex-row gap-4 justify-end lg:mt-6"
          >
            <Button
              label="project snapshot"
              href={project.url}
            />
            <Button
              primary
              label="see full case study"
              href={project.caseStudyUrl}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.li>
  );
};

export default FeaturedProjectCard;

"use client";

import { Button } from "../Button";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const UpNext = ({ nextProject }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="container p-8 mt-16 -mb-14 border-t-[1px] border-b-[1px] border-f-inverse"
    >
      <div className="flex flex-col">
        <p className="eyebrow mb-6">[ up next ]</p>
        <h1 className="project-title ">
          <span className="font-serif">{nextProject.client} - </span>
          <span>{nextProject.title}</span>
        </h1>
      </div>

      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <Button
          label="view project snapshot"
          href={nextProject.url}
        />
        {nextProject.caseStudyUrl && (
          <Button
            primary
            label="see full case study"
            href={nextProject.caseStudyUrl}
          />
        )}
      </div>
    </motion.section>
  );
};

export default UpNext;

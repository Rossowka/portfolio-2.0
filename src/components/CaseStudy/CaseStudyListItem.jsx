"use client";

import { slideUp } from "@/utils/animations";
import { HeadingS } from "../Text";
import { motion } from "motion/react";

const CaseStudyListItem = ({
  title = "placeholder title",
  text = "placeholder text",
  noBreak,
}) => {
  return (
    <motion.li
      variants={slideUp}
      className="px-5 border-t border-f-primary/10 md:border-none sm:flex-[0_0_50%] sm:max-w-[50%]"
    >
      <HeadingS
        headingText={title}
        className="font-serif"
        noBreak={noBreak}
      />
      <p className="pb-5 text-base md:text-sm font-medium leading-relaxed md:leading-relaxed text-f-primary/80">
        {text}
      </p>
    </motion.li>
  );
};

export default CaseStudyListItem;

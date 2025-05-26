"use client";

import { superpowers } from "@/utils/about";
import { HeadingM, HeadingXL } from "../Text";
import { AboutParagraph } from ".";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Superpowers = () => {
  return (
    <section className="pt-32 pb-12 flex flex-col max-w-[77.5rem] mx-auto px-4 lg:px-8">
      <HeadingXL
        headingText="my superpowers"
        subheadingText="what I bring to the team"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="flex flex-wrap -mx-5"
      >
        {superpowers.map((paragraph, index) => (
          <motion.div
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.4 }}
            key={index}
            className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5"
          >
            <HeadingM
              headingText={paragraph.heading}
              className="font-serif"
            />
            <AboutParagraph small>{paragraph.text}</AboutParagraph>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Superpowers;

"use client";

import { story } from "@/utils/about";
import { HeadingM, HeadingXL } from "../Text";
import { Button, RowOfButtons } from "../Button";
import { AboutParagraph } from ".";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const AboutSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      className="mx-auto px-4 lg:px-8 pt-16 lg:pt-32 pb-8 md:pb-12 md:pt-24 lg:pb-24 max-w-xl self-center"
    >
      <HeadingXL
        headingText="here's mine"
        subheadingText="I believe in stories"
      />
      {story.map((paragraph, index) => (
        <motion.div
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.4 }}
          key={index}
        >
          <HeadingM
            headingText={paragraph.heading}
            className="font-serif"
          />
          <AboutParagraph>{paragraph.text}</AboutParagraph>
        </motion.div>
      ))}
      <RowOfButtons>
        <Button
          label="my work"
          className="text-f-inverse"
          href="/projects"
          primary
        />
        <Button
          label="my linkedIN"
          className="text-f-inverse"
          href="https://www.linkedin.com/in/sararossow"
        />
      </RowOfButtons>
    </motion.section>
  );
};

export default AboutSection;

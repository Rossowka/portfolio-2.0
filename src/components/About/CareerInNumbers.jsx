"use client";

import { careerInNumbers } from "@/utils/about";
import { HeadingL } from "../Text";
import { CareerCard } from ".";
import { motion } from "motion/react";
import { staggerContainer } from "@/utils/animations";

const CareerInNumbers = () => {
  return (
    <section className="max-w-[77.5rem] mx-auto px-4 lg:px-8 pt-16 lg:pt-24 pb-8 md:pb-12 md:pt-12 lg:pb-24">
      <HeadingL
        headingText="career in numbers"
        className="text-accent text-right mr-8"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: "some" }}
        variants={staggerContainer}
        className="flex flex-col md:flex-row gap-8 md:items-end md:justify-end"
      >
        {careerInNumbers.map((stat, index) => (
          <CareerCard
            stat={stat}
            key={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CareerInNumbers;

"use client";

import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";
import { motion } from "motion/react";
import { fadeInScale } from "@/utils/animations";

const CareerCard = ({ stat }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeInScale}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{
        y: -2,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
      }}
      className="p-8 flex-1 rounded-3xl h-fit border-[1px] shadow-sm"
    >
      <p className="pb-1 text-3xl lg:text-6xl leading-tight tracking-tight font-bold">
        {stat.number}
      </p>
      <p className="pb-8 text-base lg:text-xl leading-normal  font-serif font-bold">
        {stat.text}
      </p>
      <p className="text-xs lg:text-sm text-f-primary/60">{stat.subtext}</p>
    </motion.div>
  );
};

export default CareerCard;

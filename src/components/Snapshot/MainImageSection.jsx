"use client";

import Image from "next/image";
import { motion } from "motion/react";

const MainImageSection = ({ currentProject }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: "some" }}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8"
    >
      <Image
        src={currentProject.mainShot.src}
        alt={currentProject.mainShot.alt}
        className={`object-cover w-full h-full object-center rounded-lg`}
        width={1176}
        height={662}
        quality={100}
        loading="lazy"
        placeholder="blur"
        blurDataURL={currentProject.mainShot.src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1176px"
      />
    </motion.section>
  );
};

export default MainImageSection;

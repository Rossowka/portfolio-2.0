"use client";

import Image from "next/image";
import { motion } from "motion/react";

const ImageSection = ({ currentProject }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: "some" }}
      className="max-w-[77.5rem] mx-auto px-4 lg:px-8"
    >
      <div className="flex mt-8 gap-8 overflow-hidden flex-wrap">
        {currentProject.imageShowcase.map((image, index) => (
          <Image
            src={image.src}
            alt={image.alt}
            className={`object-cover object-center md:flex-[0_0_50%] md:max-w-[calc(50%-16px)]`}
            width={572}
            height={572}
            key={index}
            loading="lazy"
            placeholder="blur"
            blurDataURL={image.src}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 572px"
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ImageSection;

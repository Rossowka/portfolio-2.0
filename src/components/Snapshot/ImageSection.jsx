"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const ImageSection = ({ currentProject }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
      className="container"
    >
      <Image
        src={currentProject.mainShot.src}
        alt={currentProject.mainShot.alt}
        className={`object-cover w-full h-full object-center`}
        width={1176}
        height={662}
        quality={100}
        loading="lazy"
        placeholder="blur"
        blurDataURL={currentProject.mainShot.src}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1176px"
      />
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

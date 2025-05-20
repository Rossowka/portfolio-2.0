"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { fadeInUp } from "@/utils/animations";

const CaseStudyImage = ({ src, alt, caption, aspect = "16/9" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.figure
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="mt-8 mb-4"
    >
      <div
        className="relative w-full mb-4 rounded-lg overflow-hidden"
        style={{ aspectRatio: aspect }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          loading="lazy"
          placeholder="blur"
          blurDataURL={src}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 672px"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="text-sm text-f-primary/60 ml-[2px]">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
};

export default CaseStudyImage;

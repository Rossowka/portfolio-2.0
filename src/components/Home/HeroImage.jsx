"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const HeroImage = ({ src, alt }) => {
  return (
    <div className="px-8 lg:px-0 inset-0 flex justify-center items-center z-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.1,
        }}
        className="aspect-square relative rounded-3xl overflow-hidden"
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          quality={100}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px"
          className="rounded-3xl object-cover transition-opacity duration-700 ease-out"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;

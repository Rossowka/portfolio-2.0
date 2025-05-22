"use client";

import { fadeInScale } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImage = ({ src, alt }) => {
  return (
    <div className="px-8 lg:px-0 inset-0 flex justify-center items-center z-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.45,
              ease: [0.33, 1, 0.68, 1],
            },
          },
        }}
        viewport={{ once: true, amount: 0.4 }}
        className="rounded-3xl"
      >
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="rounded-3xl md:w-[400px]"
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px"
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;

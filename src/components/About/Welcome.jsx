"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideRight } from "@/utils/animations";
import Image from "next/image";

const avatar = "/images/sara-rossow.webp";

const Welcome = () => {
  return (
    <section className="pt-16 pb-8 lg:pt-48 flex flex-col max-w-[77.5rem] mx-auto px-4 lg:px-8">
      <header className="mt-16 mb-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideRight}
          viewport={{ once: true, amount: 0.4 }}
          className="sm:hidden mb-4"
        >
          <Image
            src={avatar}
            width={160}
            height={180}
            priority
            quality={100}
            alt="Photo of Sara Rossow"
            className="w-1/3 max-w-40"
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 160px"
          />
        </motion.div>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={slideRight}
          viewport={{ once: true, amount: 0.4 }}
          className="font-medium text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight"
        >
          the sweet spot
          <span className="block md:indent-12 lg:indent-28">
            of product design
          </span>
        </motion.h1>
      </header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideRight}
        viewport={{ once: true, amount: 0.4 }}
        className=" bg-f-primary/20 h-[1px]"
      ></motion.div>
      <div className="flex flex-col md:flex-row relative gap-8 mt-8 justify-end">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.4 }}
          className="sm:mr-48 max-w-md md:max-w-none text-[1.125rem] md:basis-3/5 md:text-2xl"
        >
          Hey, I am Sara. I am a designer and developer based in{" "}
          <span className="text-f-primary/40 line-through mr-2">
            Gdansk, Poland
          </span>
          <span className="text-f-primary/40 line-through mr-2">
            Gold Coast, Australia
          </span>
          Hamburg, Germany
        </motion.p>
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
                delay: 0.35,
                ease: [0.33, 1, 0.68, 1],
              },
            },
          }}
          viewport={{ once: true, amount: 0.4 }}
          className="self-end absolute hidden sm:block md:bottom-2/3 sm:right-8 lg:right-12"
        >
          <Image
            src={avatar}
            width={160}
            height={180}
            alt="Photo of Sara Rossow"
            quality={100}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;

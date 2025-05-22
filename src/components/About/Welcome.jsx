"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Image from "next/image";

const avatar = "/images/sara-rossow.png";

const Welcome = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInUp}
      className="pt-16 pb-8 lg:pt-48 flex flex-col container"
    >
      <header className="mt-16 mb-8">
        <div className="sm:hidden mb-4">
          <Image
            src={avatar}
            width={160}
            height={180}
            alt="Photo of Sara Rossow"
            className="w-1/3 max-w-40"
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 160px"
          />
        </div>
        <h1 className="page-title ">
          the sweet spot
          <span className="block md:indent-12 lg:indent-28">
            of product design
          </span>
        </h1>
      </header>
      <div className=" bg-f-primary/20 h-[1px]"></div>
      <div className="flex flex-col md:flex-row relative gap-8 mt-8 justify-end">
        <p className="sm:mr-48 max-w-md md:max-w-none text-[1.125rem] md:basis-3/5 md:text-2xl">
          Hey, I am Sara. I am a designer and developer based in{" "}
          <span className="text-f-primary/40 line-through mr-2">
            Gdansk, Poland
          </span>
          <span className="text-f-primary/40 line-through mr-2">
            Gold Coast, Australia
          </span>
          Hamburg, Germany
        </p>
        <div className="self-end absolute hidden sm:block md:bottom-2/3 sm:right-8 lg:right-12">
          <Image
            src={avatar}
            width={160}
            height={180}
            alt="Photo of Sara Rossow"
            quality={100}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Welcome;

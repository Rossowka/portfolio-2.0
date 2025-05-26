import { fadeInUp } from "@/utils/animations";
import { CircularButton } from "../CircularButton";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="pt-16 pb-24 lg:pt-24 lg:pb-72 flex flex-col">
      <motion.header
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[77.5rem] mx-auto px-4 lg:px-8 mt-16 mb-8 md:mb-12 lg:mt-36 lg:mb-24"
      >
        <h2 className="font-medium text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight md:indent-12 lg:indent-24">
          let's create something stunning together
        </h2>
      </motion.header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex flex-col md:flex-row relative gap-8 mt-8"
      >
        <p className="hidden md:inline-block font-semibold uppercase text-f-primary/40 whitespace-nowrap leading-relaxed text-sm mt-1 md:basis-1/5 lg:basis-1/4">
          [ what I do ]
        </p>
        <p className="sm:mr-48 md:basis-1/2">
          I help brands create great digital products. I tell engaging stories,
          craft beautiful interfaces and shape people’s experiences in elegantly
          simple ways.
        </p>
        <div className="self-end sm:absolute sm:bottom-0 md:bottom-1/2 sm:right-8 lg:right-12">
          <CircularButton
            text={"Explore my work"}
            radius={80}
            iconSrc={"icons/arrow-down-left.svg"}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;

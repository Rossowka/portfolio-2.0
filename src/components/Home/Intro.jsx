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
        viewport={{ once: true, amount: 0.4 }}
        className="container mt-16 mb-8 md:mb-12 lg:mt-36 lg:mb-24"
      >
        <h2 className="page-title md:indent-12 lg:indent-24">
          let's create something stunning together
        </h2>
      </motion.header>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.4 }}
        className="container flex flex-col md:flex-row relative gap-8 mt-8"
      >
        <p className="hidden md:inline-block eyebrow md:basis-1/5 lg:basis-1/4">
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

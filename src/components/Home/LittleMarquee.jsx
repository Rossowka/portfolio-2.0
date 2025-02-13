import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LittleMarquee = () => {
  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { amount: 0.1 });

  const marqueeText =
    "UX Research, Strategy, Product Design, Prototyping, Development, Motion, ";

  return (
    <div
      ref={marqueeRef}
      className="z-10 static flex gap-2 font-serif lg:absolute md:ml-auto lg:right-8 lg:top-2 md:w-1/2 lg:w-1/3"
    >
      <p className="leading-6 text-accent">[</p>
      <div className="overflow-hidden w-full flex">
        {isInView && (
          <motion.div
            className="flex whitespace-nowrap gap-1 will-change-transform"
            animate={{
              x: [0, "-50%"], // Adjust based on your text width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20, // Adjust speed as needed
                ease: "linear",
              },
            }}
          >
            <p className="leading-6 w-fit whitespace-nowrap opacity-70">
              {marqueeText}
            </p>
            <p className="leading-6 w-fit whitespace-nowrap opacity-70">
              {marqueeText}
            </p>
          </motion.div>
        )}
      </div>
      <p className="leading-6 text-accent">]</p>
    </div>
  );
};

export default LittleMarquee;

import { useRef } from "react";
import { setupHeroAnimations } from "./animations";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

const HeroText = () => {
  const leftListRef = useRef(null);
  const rightListRef = useRef(null);

  useGSAP(() => {
    setupHeroAnimations(leftListRef, rightListRef);
  }, []);

  return (
    <h1 className="tracking-tight uppercase font-serif max-[400px]:text-[3rem] font-bold text-f-inverse text-[4rem] leading-none md:text-[6rem] mix-blend-difference lg:text-[6rem]">
      {/* hero text left */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1],
          delay: 0.2,
        }}
        className="z-10 absolute left-0 w-full top-0"
      >
        {/* text mask */}
        <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem] flex flex-col">
          <ul
            className="slide-up drop-shadow-md"
            ref={leftListRef}
          >
            <li>Digital</li>
            <li>Product</li>
            <li>UX/UI</li>
            <li>Interaction</li>
          </ul>
        </div>
        <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem]">
          <span className="block slide-up drop-shadow-md">Designer</span>
        </div>
      </motion.span>
      {/* hero text right */}
      <motion.span
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0.35,
              ease: [0.33, 1, 0.68, 1],
            },
          },
        }}
        className="z-10 absolute right-0 bottom-0 text-right w-full"
      >
        {/* text mask */}
        <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem] flex flex-col">
          <ul
            className="slide-up"
            ref={rightListRef}
          >
            <li>Creative</li>
            <li>Frontend</li>
            <li>React</li>
            <li>Low-Code</li>
          </ul>
        </div>
        <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem]">
          <span className="block slide-up drop-shadow-md">Developer</span>
        </div>
      </motion.span>
    </h1>
  );
};

export default HeroText;

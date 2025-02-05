import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);

  return (
    <motion.div
      ref={indicatorRef}
      className="absolute bottom-0 right-1/2 opacity-40"
      whileInView={{
        y: [0, -10, 0], // Bounce up and down
        opacity: [0.4, 0.3, 0.4],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: [0.65, -0.25, 0.55, 0.99],
        repeatType: "loop",
      }}
    >
      <Image
        src="icons/chevron-down.svg"
        alt={`Icon encouraging to scroll down`}
        width={24}
        height={24}
      />
    </motion.div>
  );
};

export default ScrollIndicator;

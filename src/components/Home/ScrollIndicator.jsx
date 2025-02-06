import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ScrollIndicator = () => {
  const indicatorRef = useRef(null);
  const [isScrollIndicatorVisible, setIsScrollIndicatorVisible] =
    useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const currentScroll = window.scrollY;

      // Start fading out when we scroll 10% of hero height
      const fadeStartPoint = heroHeight * 0.1;

      if (currentScroll > fadeStartPoint) {
        setIsScrollIndicatorVisible(false);
      } else {
        setIsScrollIndicatorVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // wait mode to ensure animations complete before cleanup
    <AnimatePresence mode="wait">
      {isScrollIndicatorVisible && (
        <motion.div // mounting/unmounting animation
          ref={indicatorRef}
          className="absolute bottom-0 right-1/2 opacity-40"
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div // bounce up and down animation
            animate={{
              y: [0, -10, 0],
              opacity: [0.4, 0.3, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: [0.65, -0.25, 0.55, 0.99],
            }}
          >
            <Image
              src="icons/chevron-down.svg"
              alt={`Icon encouraging to scroll down`}
              width={24}
              height={24}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;

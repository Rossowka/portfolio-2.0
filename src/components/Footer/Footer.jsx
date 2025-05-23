"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { ArrowIcon } from "../ArrowIcon";
import Bottom from "./Bottom";
import { HeadingXL } from "../Text";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const hoverLink = {
  whileHover: { scale: 1.03 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const Footer = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.footer
      ref={ref}
      id="contact"
      className="pt-32 lg:pt-48"
      initial="hidden"
      animate={shouldReduceMotion ? "visible" : controls}
      variants={staggerContainer}
      custom={1}
    >
      {/* Contact CTA */}
      <div className="container flex flex-col mb-16 lg:mb-32">
        <motion.div
          variants={fadeInUp}
          className="relative"
        >
          <HeadingXL
            headingText="let's work together."
            subheadingText="sparked your curiosity?"
          />
          <ArrowIcon
            className="rotate-[135deg] absolute right-[8%] bottom-0 z-10"
            size="36"
          />
        </motion.div>

        {/* Banner + Link */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:gap-8 items-center mt-8 relative"
        >
          {/* Image */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 overflow-hidden rounded-2xl"
          >
            <Image
              src="/images/banner.png"
              width={556}
              height={184}
              quality={100}
              alt="Horizon with mountains and colorful clouds"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            {...hoverLink}
            variants={fadeInUp}
            className="flex-shrink-0 mt-6 md:mt-0"
          >
            <Link
              href="mailto:sararossow@mail.com?subject=Getting%20in%20touch&body=Hi%20Sara,"
              className="block"
            >
              <h2
                className="font-bold text-transparent bg-clip-text whitespace-nowrap"
                style={{ backgroundImage: `url(/images/banner.png)` }}
              >
                Get in touch
              </h2>
              <p className="text-2xl lg:text-[2.5rem] leading-tight ml-1">
                sararossow@mail.com
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom section */}
      <Bottom />
    </motion.footer>
  );
};

export default Footer;

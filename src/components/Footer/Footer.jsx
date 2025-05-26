"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowIcon } from "../ArrowIcon";
import Bottom from "./Bottom";
import { HeadingXL } from "../Text";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const hoverLink = {
  whileHover: { scale: 1.03 },
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="pt-32 lg:pt-48"
    >
      {/* Contact CTA */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: 0.2 }}
        custom={1}
        className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex flex-col mb-16 lg:mb-32"
      >
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
              src="/images/banner.webp"
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
                className="font-bold text-transparent bg-clip-text whitespace-nowrap text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight"
                style={{ backgroundImage: `url(/images/banner.webp)` }}
              >
                Get in touch
              </h2>
              <p className="text-2xl lg:text-[2.5rem] leading-tight ml-1 font-medium">
                sararossow@mail.com
              </p>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom section */}
      <Bottom />
    </footer>
  );
};

export default Footer;

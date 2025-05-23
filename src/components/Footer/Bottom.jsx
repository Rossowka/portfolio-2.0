"use client";

import Link from "next/link";
import { Socials } from "../Socials";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/utils/animations";

const Bottom = () => {
  const year = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

  return (
    <div className="py-6 md:py-6 lg:py-8 bg-black text-f-inverse w-full">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="container flex flex-wrap md:items-center md:justify-between"
      >
        {/* Date */}
        <motion.div
          variants={fadeInUp}
          className="order-3 md:order-1 mt-6 md:mt-0 flex-[0_0_100%] md:flex-[0_0_30%] border-t border-f-inverse/20 md:border-t-0"
        >
          <p className="text-f-inverse/40 text-xs font-normal uppercase px-3 pt-4 text-right md:text-left">
            {year !== null ? (
              `${year} © Sara Rossow`
            ) : (
              <span className="invisible">0000 © Sara Rossow</span>
            )}
          </p>
        </motion.div>

        {/* Cookie + Privacy */}
        <motion.div
          variants={fadeInUp}
          className="order-2 md:order-2 flex w-full items-center gap-3 text-f-inverse/40 text-xs mt-6 md:mt-0 md:flex-[0_0_30%] justify-end md:justify-center border-t border-f-inverse/20 md:border-t-0 "
        >
          <button
            onClick={() => {
              localStorage.removeItem("analytics-consent-status");
              window.location.reload();
            }}
            className="px-3 pt-4 hover:text-f-inverse transition-colors text-left whitespace-nowrap"
            aria-label="Reset privacy preferences"
          >
            Cookie Preferences
          </button>
          <span className="pt-4">•</span>
          <Link
            href="/privacy"
            className="px-3 pt-4 hover:text-f-inverse transition-colors whitespace-nowrap"
          >
            Privacy Policy
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeInUp}
          className="order-1 md:order-3 w-full md:flex-[0_0_30%] flex -mr-3 justify-end"
        >
          <Socials />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bottom;

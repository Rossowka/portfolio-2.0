"use client";

import Link from "next/link";
import { Socials } from "../Socials";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { useCallback, useMemo } from "react";

const STORAGE_KEY = "analytics-consent-status";

const Bottom = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const handleCookiePreferences = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }, []);

  const copyrightText = `${currentYear} © Sara Rossow`;

  return (
    <div className="py-6 md:py-6 lg:py-8 bg-black text-f-inverse w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: "some" }}
        custom={1}
        className="max-w-[77.5rem] mx-auto px-4 lg:px-8 flex flex-wrap md:items-center md:justify-between"
      >
        {/* Date */}
        <motion.div
          variants={fadeInUp}
          className="order-3 mt-6 flex-[0_0_100%] border-t border-f-inverse/20 md:order-1 md:mt-0 md:flex-[0_0_30%] md:border-t-0"
        >
          <p className="px-3 pt-4 text-right text-xs font-normal uppercase leading-relaxed text-f-inverse/40 md:text-left">
            {copyrightText}
          </p>
        </motion.div>

        {/* Cookie + Privacy */}
        <motion.div
          variants={fadeInUp}
          className="order-2 mt-6 flex w-full items-center gap-3 border-t border-f-inverse/20 text-xs text-f-inverse/40 md:order-2 md:mt-0 md:flex-[0_0_30%] md:justify-center md:border-t-0"
        >
          <button
            onClick={handleCookiePreferences}
            className="whitespace-nowrap px-3 pt-4 text-left transition-colors hover:text-f-inverse focus:outline-none focus:ring-2 focus:ring-f-inverse/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Reset cookie preferences and reload page"
          >
            Cookie Preferences
          </button>

          <span
            className="pt-4"
            aria-hidden="true"
          >
            •
          </span>

          <Link
            href="/privacy"
            className="whitespace-nowrap px-3 pt-4 transition-colors hover:text-f-inverse focus:outline-none focus:ring-2 focus:ring-f-inverse/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="View privacy policy"
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

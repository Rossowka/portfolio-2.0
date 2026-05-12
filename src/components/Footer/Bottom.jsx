"use client";

import Link from "next/link";
import { Socials } from "../Socials";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { useCallback, useMemo } from "react";

const STORAGE_KEY = "analytics-consent-status";

const Bottom = () => {
  const handleCookiePreferences = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }, []);

  return (
    <div className="py-6 px-3 bg-linen text-f-primary w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer}
        viewport={{ once: true, amount: "some" }}
        custom={1}
        className="max-w-7xl mx-auto flex flex-wrap items-center md:justify-between"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap text-base font-normal whitespace-nowrap"
        >
          <p className="px-3 pt-4 order-last md:order-first">Design & Code — Sara Rossow © 2026</p>

          <button
            onClick={handleCookiePreferences}
            className="px-3 pt-4 text-left transition-colors hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown underline"
            aria-label="Reset cookie preferences and reload page"
          >
            Cookie Preferences
          </button>

          <Link
            href="/privacy"
            className=" px-3 pt-4 transition-colors  hover:opacity-80 underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown"
            aria-label="View privacy policy"
          >
            Privacy Policy
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={fadeInUp}
          className="order-first lg:order-last lg: justify-end"
        >
          <Socials />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Bottom;

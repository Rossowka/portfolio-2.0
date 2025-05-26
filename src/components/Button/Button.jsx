"use client";

import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";
import { motion } from "motion/react";
import { fadeInUp } from "@/utils/animations";

const Button = ({ label = "button", href = "#", sup, primary, dark }) => {
  return (
    <motion.div
      variants={fadeInUp}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{
        y: -2,
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
      }}
      whileTap={{
        scale: 0.97,
        transition: { duration: 0.1, ease: [0.4, 0, 0.2, 1] },
      }}
      className={`rounded-3xl w-full md:w-fit border-[1px] ${
        dark
          ? "bg-accent md:bg-transparent overflow-hidden border-f-inverse/20 focus:outline-2 focus:outline-offset-2 focus:outline-accent active:bg-accentDark"
          : primary
          ? "bg-accent border-accentDark text-white focus:outline-2 focus:outline-offset-4 focus:outline-accent active:bg-accentDark"
          : "text-inherit border-accent/20"
      }`}
    >
      <Link
        href={href}
        className="flex group gap-1 px-8 py-4 lg:py-8 lg:px-16 justify-center"
      >
        {/* icon */}
        <div className="min-w-fit content-center">
          <ArrowIcon
            className={` transform transition-all duration-300 ease-in-out  ${
              dark ? "lg:text-accent -rotate-45 lg:rotate-0" : "text-inherit"
            } ${
              primary
                ? "-rotate-45 md:group-hover:rotate-0"
                : "rotate-0 md:group-hover:-rotate-45"
            }`}
          />
        </div>

        {/* text */}
        <p
          className={`whitespace-nowrap text-lg leading-relaxed font-medium ${
            dark ? "text-f-inverse" : "inherit"
          }`}
        >
          {label}
          {/*  superscript */}
          {sup && (
            <sup
              className={`text-xs pl-1 ${
                dark ? "md:text-accent" : "text-inherit"
              }`}
            >
              {sup}
            </sup>
          )}
        </p>
      </Link>
    </motion.div>
  );
};

export default Button;

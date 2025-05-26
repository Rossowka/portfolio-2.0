"use client";

import { useScrollSpy } from "@/utils/useScrollSpy";
import Link from "next/link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { slideRight } from "@/utils/animations";

gsap.registerPlugin(ScrollToPlugin);

const CaseStudyNav = ({ navItems }) => {
  // Use the scroll spy hook to track the active section
  const activeSection = useScrollSpy(navItems, { offset: 150 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.nav
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slideRight}
      className="flex-[0_0_25%] max-w-[25%] pt-28 hidden md:block"
    >
      <ul className="gap-1 sticky top-32">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="block w-full group pt-4 lg:pt-5"
              onClick={(e) => {
                e.preventDefault();
                gsap.to(window, {
                  duration: 1,
                  scrollTo: `#${item.id}`,
                  ease: "power2.inOut",
                });
              }}
            >
              <p
                className={`relative overflow-visible text-xs w-max font-medium leading-relaxed ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-f-primary/40"
                }`}
              >
                <span>{item.label}</span>

                {/* underline */}
                <span
                  className={`underline absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 bg-accent ${
                    activeSection === item.id ? `scale-x-100 bg-accent` : ""
                  }`}
                ></span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default CaseStudyNav;

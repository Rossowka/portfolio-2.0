"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import { useScrollSpy } from "@/utils/useScrollSpy";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CaseStudyNavDesktop = ({ navItems, className }) => {
  const activeSection = useScrollSpy(navItems, { offset: 150 });
  const navRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(navRef.current, { autoAlpha: 1 });
        gsap.from(navRef.current, {
          x: -20,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: navRef.current,
            start: "top 80%",
            once: true,
          },
        });
      });
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className={`md:invisible flex-[0_0_25%] max-w-[25%] pt-28 ${className}`}
    >
      <ul className="gap-1 sticky top-32">
        {navItems.map((item, index) => (
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
                className={`relative overflow-visible text-base w-max font-semibold leading-relaxed ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-f-primary/60 hover:text-f-primary"
                }`}
              >
                <span>
                  0{index + 1} — {item.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 bg-accent ${
                    activeSection === item.id ? "scale-x-100" : ""
                  }`}
                />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CaseStudyNavDesktop;

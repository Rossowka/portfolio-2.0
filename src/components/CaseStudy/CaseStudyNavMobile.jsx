"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useScrollSpy } from "@/utils/useScrollSpy";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CaseStudyNavMobile = ({ navItems }) => {
  const activeSection = useScrollSpy(navItems, { offset: 150 });
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavRef = useRef(null);
  const dropdownRef = useRef(null);
  const dropdownTlRef = useRef(null);

  const activeItem = navItems.find((item) => item.id === activeSection) ?? navItems[0];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        gsap.set(mobileNavRef.current, { autoAlpha: 0, y: -8 });

        ScrollTrigger.create({
          trigger: mobileNavRef.current,
          start: "bottom top",
          onEnter: () => {
            gsap.to(mobileNavRef.current, {
              autoAlpha: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(mobileNavRef.current, {
              autoAlpha: 0,
              y: -8,
              duration: 0.2,
              ease: "power2.in",
              onComplete: () => setIsOpen(false),
            });
          },
        });

        dropdownTlRef.current = gsap
          .timeline({ paused: true })
          .set(dropdownRef.current, { display: "flex" })
          .from(dropdownRef.current, {
            autoAlpha: 0,
            y: -6,
            duration: 0.25,
            ease: "power2.out",
          });

        // Revert cleanup
        return () => {
          dropdownTlRef.current?.kill();
          gsap.set(mobileNavRef.current, { clearProps: "all" });
        };
      });
    },
    { scope: mobileNavRef }
  );

  const { contextSafe } = useGSAP({ scope: mobileNavRef });

  const toggleDropdown = contextSafe(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        dropdownTlRef.current?.play();
      } else {
        dropdownTlRef.current?.reverse().then(() => {
          gsap.set(dropdownRef.current, { display: "none" });
        });
      }
      return next;
    });
  });

  const handleNavClick = contextSafe((id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power2.inOut",
    });
    dropdownTlRef.current?.reverse().then(() => {
      gsap.set(dropdownRef.current, { display: "none" });
    });
    setIsOpen(false);
  });

  return (
    <div
      ref={mobileNavRef}
      className="md:hidden sticky top-0 left-0 right-0 z-10 px-6 pt-4 pb-2 bg-s-primary border-b border-s-inverse/10"
    >
      <button
        onClick={toggleDropdown}
        className="w-full flex flex-col gap-0.5"
        aria-expanded={isOpen}
      >
        <span className="text-xs text-f-primary/50 font-medium tracking-wide">
          Navigate this case study:
        </span>
        <div className="flex items-center justify-between w-full">
          <span className="text-base font-semibold text-accent">{activeItem?.label ?? "—"}</span>
          <svg
            className={`w-4 h-4 text-f-primary/50 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <ul
        ref={dropdownRef}
        className="hidden flex-col pt-3 pb-1 gap-1"
      >
        {navItems.map((item, index) => (
          <li key={item.id}>
            <button
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left py-2"
            >
              <span
                className={`text-base font-semibold ${
                  activeSection === item.id ? "text-accent" : "text-f-primary/60"
                }`}
              >
                0{index + 1} — {item.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseStudyNavMobile;

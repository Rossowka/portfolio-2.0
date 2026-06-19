"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Link from "next/link";
import { useScrollSpy } from "@/utils/useScrollSpy";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const CaseStudyNav = ({ navItems }) => {
  const activeSection = useScrollSpy(navItems, { offset: 150 });
  const [isOpen, setIsOpen] = useState(false);

  // refs
  const navRef = useRef(null); // desktop nav
  const mobileNavRef = useRef(null); // mobile docked bar
  const dropdownRef = useRef(null); // mobile dropdown list
  const dropdownTlRef = useRef(null); // stored timeline for open/close

  const activeItem = navItems.find((item) => item.id === activeSection) ?? navItems[0];

  // Desktop entrance — slide in from left (matching original slideRight intent)
  useGSAP(
    () => {
      gsap.set(navRef.current, { autoAlpha: 1 });
      gsap.from(navRef.current, {
        x: -20,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: navRef.current,
          start: "top 50%",
          once: true,
        },
      });
    },
    { scope: navRef }
  );

  // Mobile — dock bar appears once user scrolls past the nav's original position
  // useGSAP(
  //   () => {
  //     gsap.set(mobileNavRef.current, { autoAlpha: 0, y: -8 });

  //     ScrollTrigger.create({
  //       trigger: mobileNavRef.current,
  //       start: "bottom top", // once the bottom of the nav scrolls past the top of viewport
  //       onEnter: () => {
  //         gsap.to(mobileNavRef.current, {
  //           autoAlpha: 1,
  //           y: 0,
  //           duration: 0.3,
  //           ease: "power2.out",
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(mobileNavRef.current, {
  //           autoAlpha: 0,
  //           y: -8,
  //           duration: 0.2,
  //           ease: "power2.in",
  //           onComplete: () => setIsOpen(false),
  //         });
  //       },
  //     });

  //     // Build dropdown timeline once — play/reverse on toggle
  //     dropdownTlRef.current = gsap
  //       .timeline({ paused: true })
  //       .set(dropdownRef.current, { display: "flex" })
  //       .from(dropdownRef.current, {
  //         autoAlpha: 0,
  //         y: -6,
  //         duration: 0.25,
  //         ease: "power2.out",
  //       });
  //   },
  //   { scope: mobileNavRef }
  // );

  // Play or reverse the dropdown when isOpen changes
  // const { contextSafe } = useGSAP({ scope: mobileNavRef });

  // const toggleDropdown = contextSafe(() => {
  //   setIsOpen((prev) => {
  //     const next = !prev;
  //     if (next) {
  //       dropdownTlRef.current.play();
  //     } else {
  //       dropdownTlRef.current.reverse().then(() => {
  //         gsap.set(dropdownRef.current, { display: "none" });
  //       });
  //     }
  //     return next;
  //   });
  // });

  // const handleMobileNavClick = contextSafe((id) => {
  //   gsap.to(window, {
  //     duration: 1,
  //     scrollTo: `#${id}`,
  //     ease: "power2.inOut",
  //   });
  //   dropdownTlRef.current.reverse().then(() => {
  //     gsap.set(dropdownRef.current, { display: "none" });
  //   });
  //   setIsOpen(false);
  // });

  const handleDesktopNavClick = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      ease: "power2.inOut",
    });
  };

  return (
    <>
      <nav
        ref={navRef}
        className="md:invisible flex-[0_0_25%] max-w-[25%] pb-10 pt-28 hidden md:block pe-10"
      >
        <ul className="gap-1 sticky top-32">
          {navItems.map((item, index) => (
            <li key={item.id}>
              <Link
                href={`#${item.id}`}
                className="block w-full group pt-4 lg:pt-5"
                onClick={(e) => {
                  e.preventDefault();
                  handleDesktopNavClick(item.id);
                }}
              >
                <p
                  className={`relative overflow-visible text-base w-max  leading-relaxed ${
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
    </>
  );
};

export default CaseStudyNav;

{
  /* ── Mobile docked bar ───────────────────────────────── 
      <div
        ref={mobileNavRef}
        className="md:hidden w-full sticky top-0 left-0 right-0 z-50 px-6 pt-4 pb-2 bg-s-primary border-b border-s-inverse/10"
      >
        Trigger row 
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
            Chevron — rotates when open 
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

        Dropdown list 
        <ul
          ref={dropdownRef}
          className="hidden flex-col pt-3 pb-1 gap-1"
        >
          {navItems.map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => handleMobileNavClick(item.id)}
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
      */
}

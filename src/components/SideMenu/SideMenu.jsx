"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "@/utils/navigation";
import { buildOpenMenuTimeline, buildCloseMenuTimeline } from "./animations";
import Link from "next/link";
import { Socials } from "../Socials";

gsap.registerPlugin(useGSAP);

const SideMenu = ({ handleClick, isMenuOpen, pathname, logoRef }) => {
  const containerRef = useRef(null);
  const menuRef = useRef(null);
  const overlayRef = useRef(null);
  const activeTimelineRef = useRef(null);

  useGSAP(
    () => {
      activeTimelineRef.current?.kill();

      if (isMenuOpen) {
        activeTimelineRef.current = buildOpenMenuTimeline(
          containerRef,
          menuRef,
          overlayRef,
          logoRef
        );
      } else {
        // Skip close animation on first render (menu starts hidden)
        if (!containerRef.current || gsap.getProperty(containerRef.current, "display") === "none")
          return;

        activeTimelineRef.current = buildCloseMenuTimeline(containerRef);
      }
    },
    { dependencies: [isMenuOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-dvh z-40 hidden flex-col"
    >
      {/* Background panels */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-10"
      >
        <div className="absolute inset-0 bg-accent h-full" />
        <div className="absolute inset-0 bg-sandyBrown h-full" />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-s-secondary h-full"
        />
      </div>

      {/* Scrollable content */}
      <nav className="relative z-20 w-full h-full overflow-y-auto">
        <div className="flex flex-col text-f-inverse min-h-full">
          <div className="h-16 md:h-24 lg:h-32" />

          <ul className="flex flex-col">
            <li className="overflow-hidden">
              <Link
                href="/"
                onClick={handleClick}
                className="block w-full pl-8 py-6 md:p-8"
              >
                <p className="relative font-semibold text-6xl md:text-8xl w-fit">
                  <span>Home</span>
                  <span
                    className={`underline absolute left-0 -bottom-2 w-full h-1 ${
                      pathname === "/" ? "bg-s-primary" : "hide"
                    }`}
                  />
                </p>
              </Link>
            </li>

            {navigation.map((item) => (
              <li
                className="overflow-hidden"
                key={item.id}
              >
                <Link
                  href={item.url}
                  onClick={handleClick}
                  className="block w-full pl-8 py-6 md:p-8"
                >
                  <p className="relative font-semibold text-6xl md:text-8xl w-fit">
                    <span>
                      {item.title}
                      {item.sup && <sup className="pl-3 text-sandyBrown">{item.sup}</sup>}
                    </span>
                    <span
                      className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
                        pathname === item.url ? "bg-s-primary" : "hide"
                      }`}
                    />
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pl-8 -mx-3 py-8 w-full mt-auto">
            <Socials />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

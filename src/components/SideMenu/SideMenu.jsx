"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "@/utils/navigation";
import { closeMenu, openMenu } from "./animations";
import Link from "next/link";
import { Socials } from "../Socials";

gsap.registerPlugin(useGSAP);

const SideMenu = ({ handleClick, isMenuOpen, pathname }) => {
  const menuRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useGSAP(
    () => {
      if (isMenuOpen) {
        openMenu(containerRef, menuRef, overlayRef);
      } else {
        closeMenu(containerRef);
      }
    },
    { dependencies: [isMenuOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 w-full h-dvh z-40 ${
        isMenuOpen ? "flex flex-col" : "hidden"
      }`}
    >
      {/* Background panels for menu slide-in animation */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-10"
      >
        <div className="absolute inset-0 bg-accent h-full"></div>
        <div className="absolute inset-0 bg-f-primary h-full"></div>
        <div className="absolute inset-0 bg-s-secondary h-full"></div>
      </div>

      {/* Scrollable content area */}
      <nav className="relative z-20 w-full h-full overflow-y-auto">
        {/* Menu inner content */}
        <div
          ref={contentRef}
          className="flex flex-col text-f-inverse min-h-full"
        >
          {/* Top padding for menu */}
          <div className="h-16 md:h-24 lg:h-32"></div>

          {/* Menu items */}
          <ul className="flex flex-col">
            <li className="overflow-hidden">
              <Link
                href="/"
                onClick={handleClick}
                className="block w-full pl-8 py-6 md:p-8"
              >
                <p className="relative font-semibold text-6xl md:text-8xl w-fit">
                  <span>Home</span>
                  {/* Underline */}
                  <span
                    className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
                      pathname == "/" ? "bg-s-primary" : "hide"
                    }`}
                  ></span>
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
                      {item.sup && (
                        <sup className="pl-3 text-accent">{item.sup}</sup>
                      )}
                    </span>
                    {/* Underline */}
                    <span
                      className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
                        pathname == item.url ? "bg-s-primary" : "hide"
                      }`}
                    ></span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="pl-8 -mx-3 py-8 w-full mt-auto">
            <Socials />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

"use client";

import { useRef } from "react";
import { navigation } from "@/utils/navigation";
import Link from "next/link";
import { Socials } from "../Socials";

const SideMenu = ({ handleClick, isMenuOpen, pathname }) => {
  const menuRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={`fixed w-full h-screen z-40 justify-between ${
        isMenuOpen ? "block" : "hidden"
      }
      `}
    >
      <nav className="w-full h-full pt-20 md:pt-40 relative">
        {/* Background panels for menu slide-in animation */}
        <div
          ref={menuRef}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0  bg-accent"></div>
          <div className="absolute inset-0  bg-f-primary"></div>
          <div className="absolute inset-0  bg-s-secondary"></div>
        </div>
        {/* Menu inner content */}
        <div className="flex flex-col h-full z-10 justify-between text-f-inverse">
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
          <div className="pl-8 py-6 md:p-8 -mx-6">
            <Socials />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

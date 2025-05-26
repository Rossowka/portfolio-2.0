"use client";

import { navigation } from "@/utils/navigation";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import Link from "next/link";
import { useRef, useState } from "react";
import { closeMenu, openMenu, useNavBarAnimation } from "./animations";
import { SideMenu } from "../SideMenu";
import { useGsapScrollTo } from "@/utils/useGsapScrollTo";

const NavBar = ({
  pathname,
  textColorClass,
  bgColorClass,
  underlineColorClass,
}) => {
  const menuBtnRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);

  const scrollTo = useGsapScrollTo();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle between opened and closed menu
  const toggleMenu = () => {
    if (!isMenuOpen) {
      // menu is about to open
      requestAnimationFrame(() => openMenu(menuBtnRef, logoRef));
      disablePageScroll();
    } else {
      closeMenu(menuBtnRef, logoRef, headerRef);
      enablePageScroll();
    }
    setIsMenuOpen((prev) => !prev);
  };

  useNavBarAnimation(headerRef, isMenuOpen);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-screen opacity-0 invisible max-w-full z-50 transition-colors duration-0 ${
          isMenuOpen
            ? `${textColorClass} bg-transparent`
            : `${textColorClass} ${bgColorClass} delay-200 duration-500`
        }`}
      >
        <div className="lg:max-w-[77.5rem] lg:mx-auto w-screen px-4 lg:px-8 flex items-center justify-between overflow-hidden">
          {/* initial logo */}
          <Link
            aria-label="Home"
            href="/"
            ref={logoRef}
            className={`text-2xl/7 font-medium uppercase transition-colors duration-700 py-4 ${
              isMenuOpen ? "text-f-inverse" : textColorClass
            }`}
          >
            Sara Rossow
          </Link>
          {/* navigation */}
          <nav
            className={`hidden lg:-mr-4 ${isMenuOpen ? "hidden" : "lg:block"}`}
          >
            <ul className="flex">
              {navigation.map((item) => (
                <li key={item.id}>
                  {item.id === "contact" ? (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                      }}
                      className="block group px-4 py-4 lg:px-5 lg:py-8"
                    >
                      <p className="relative overflow-visible whitespace-nowrap">
                        <span>
                          {item.title}
                          {item.sup && (
                            <sup className="text-xs leading-none pl-1 text-accent">
                              {item.sup}
                            </sup>
                          )}
                        </span>
                        {/* underline */}
                        <span
                          className={`underline absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 ${underlineColorClass}`}
                        ></span>
                      </p>
                    </button>
                  ) : (
                    <Link
                      href={item.url}
                      className="block group px-4 py-4 lg:px-5 lg:py-8"
                    >
                      <p className="relative overflow-visible whitespace-nowrap">
                        <span>
                          {item.title}
                          {item.sup && (
                            <sup className="text-xs leading-none pl-1 text-accent">
                              {item.sup}
                            </sup>
                          )}
                        </span>
                        {/* underline */}
                        <span
                          className={`underline absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 ${underlineColorClass} ${
                            pathname == item.url
                              ? `scale-x-100 ${underlineColorClass}`
                              : ""
                          }`}
                        ></span>
                      </p>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <button
            aria-label="Toggle menu"
            type="button"
            onClick={toggleMenu}
            className={`flex py-4 h-full items-center ${
              isMenuOpen ? "" : "lg:hidden"
            }`}
          >
            <div
              ref={menuBtnRef}
              className={`flex flex-col items-end h-7 overflow-hidden justify-start align-bottom transition-colors duration-700 ${
                isMenuOpen ? "text-f-inverse" : textColorClass
              }`}
            >
              <p className="text-lg">Menu</p>
              <p className="text-lg">Close</p>
            </div>
          </button>
        </div>
      </header>
      <SideMenu
        isMenuOpen={isMenuOpen}
        handleClick={toggleMenu}
        pathname={pathname}
        logoRef={logoRef}
      />
    </>
  );
};

export default NavBar;

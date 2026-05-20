"use client";

import { navigation } from "@/utils/navigation";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import Link from "next/link";
import { useRef, useState } from "react";
import { useMenuAnimation, useNavBarAnimation } from "./animations";
import { SideMenu } from "../SideMenu";
import NavBarEmail from "./NavBarEmail";

const NavBar = ({
  pathname,
  textColorClass,
  bgColorClass,
  underlineColorClass,
  accentColorClass,
}) => {
  const menuBtnRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  // Track the running timeline so toggleMenu can kill it before reversing
  const activeTimelineRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { open: openMenu, close: closeMenu } = useMenuAnimation(menuBtnRef, logoRef, headerRef);
  useNavBarAnimation(headerRef, isMenuOpen);

  // Toggle between opened and closed menu
  const toggleMenu = () => {
    // Kill any in-progress animation before starting the opposite one
    activeTimelineRef.current?.kill();

    setIsMenuOpen((prev) => {
      if (!prev) {
        disablePageScroll();
        activeTimelineRef.current = openMenu();
      } else {
        enablePageScroll();
        activeTimelineRef.current = closeMenu();
      }
      return !prev;
    });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-screen invisible max-w-full z-50 transition-colors duration-0 px-6  ${
          isMenuOpen
            ? `${textColorClass} bg-transparent`
            : `${textColorClass} ${bgColorClass} delay-200 duration-500`
        }`}
      >
        <div className="lg:max-w-7xl lg:mx-auto flex">
          {/* navigation */}
          <nav className={`flex w-full lg:w-8/12 justify-between items-center`}>
            {/* initial logo */}
            <Link
              aria-label="Home"
              href="/"
              ref={logoRef}
              className={`text-2xl/7 font-medium transition-colors duration-700 py-4 whitespace-nowrap justify-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown ${isMenuOpen ? "text-f-inverse" : textColorClass}`}
            >
              sara rossow
            </Link>

            <ul className={`justify-end hidden ${isMenuOpen ? "hidden" : "lg:flex"}`}>
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className={`block group px-[20px] py-4 lg:py-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown ${item.id == "playground" ? "opacity-50 pointer-events-none" : ""}`}
                  >
                    <p className="relative overflow-visible whitespace-nowrap">
                      <span>
                        {item.title}
                        {item.sup && (
                          <sup className={`text-xs leading-none pl-1 ${accentColorClass}`}>
                            {item.sup}
                          </sup>
                        )}
                      </span>

                      {/* underline */}
                      <span
                        className={`underline absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 ${underlineColorClass} ${
                          pathname == item.url ? `scale-x-100 ${underlineColorClass}` : ""
                        }`}
                      ></span>
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div
            className={`group gap-1 pl-10 py-4 lg:py-8 justify-end w-4/12 hidden ${isMenuOpen ? "hidden" : "lg:flex"}`}
          >
            <p>let's chat:</p>
            <NavBarEmail />
          </div>

          {/* mobile menu */}
          <button
            aria-label="Toggle menu"
            type="button"
            onClick={toggleMenu}
            className={`flex py-4 h-full items-center ${isMenuOpen ? "" : "lg:hidden"}`}
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

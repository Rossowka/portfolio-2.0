"use client";

import { navigation } from "@/utils/navigation";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { useMenuAnimation, useNavBarAnimation } from "./animations";
import { SideMenu } from "../SideMenu";
import { CopyEmailButton, UnderlineLink } from ".";

const NavBar = ({ pathname, textColorClass, bgColorClass, accentColorClass }) => {
  const menuBtnLabelRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const activeTimelineRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { open: openMenu, close: closeMenu } = useMenuAnimation(
    menuBtnLabelRef,
    logoRef,
    headerRef
  );

  useNavBarAnimation(headerRef, isMenuOpen);

  const toggleMenu = useCallback(() => {
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
  }, [openMenu, closeMenu]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-screen invisible max-w-full z-50 transition-colors px-6 duration-0 ${
          isMenuOpen ? `${textColorClass} bg-transparent ` : `${textColorClass} ${bgColorClass} `
        }`}
      >
        <div className="lg:max-w-7xl lg:mx-auto flex justify-between">
          {/* Main navigation */}
          <nav
            aria-label="Main navigation"
            className="flex w-full lg:w-8/12 justify-between items-center"
          >
            <Link
              aria-label="Home"
              href="/"
              ref={logoRef}
              className={`text-[26px] leading-relaxed font-medium transition-colors duration-700 py-4 whitespace-nowrap justify-items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm focus-visible:outline-reddishBrown ${
                isMenuOpen ? "text-f-inverse" : textColorClass
              }`}
            >
              sara rossow
            </Link>

            <ul className={`justify-end hidden ${isMenuOpen ? "hidden" : "lg:flex gap-4"}`}>
              {navigation.map((item) => (
                <li key={item.id}>
                  {item.id === "playground" ? (
                    <span
                      aria-label={`${item.title} (coming soon)`}
                      className="opacity-50 cursor-default"
                    >
                      {item.title} (coming soon!)
                    </span>
                  ) : (
                    <UnderlineLink
                      href={item.url}
                      aria-current={pathname === item.url ? "page" : undefined}
                      variant={pathname === item.url ? "alt" : "default"}
                    >
                      {item.title}
                      {item.sup && (
                        <sup className={`text-xs leading-none pl-1 ${accentColorClass}`}>
                          {item.sup}
                        </sup>
                      )}
                    </UnderlineLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div
            className={`flex items-center justify-end py-4 lg:py-8 w-4/12 max-w-[400px] ${
              isMenuOpen ? "hidden" : "hidden lg:flex"
            }`}
          >
            <CopyEmailButton />
          </div>

          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="side-menu"
            type="button"
            onClick={toggleMenu}
            className={`flex py-4 h-full items-center self-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm focus-visible:outline-reddishBrown ${
              isMenuOpen ? "" : "lg:hidden"
            }`}
          >
            <div
              ref={menuBtnLabelRef}
              className={`flex flex-col items-end h-7 overflow-hidden justify-start align-bottom transition-colors  duration-[450ms] relative ${
                isMenuOpen ? "text-f-inverse" : textColorClass
              }`}
              style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
            >
              <p
                className="text-lg"
                aria-hidden="true"
              >
                Menu
              </p>
              <p
                className="text-lg text-f-inverse"
                aria-hidden="true"
              >
                Close
              </p>
            </div>
          </button>
        </div>
      </header>

      <SideMenu
        id="side-menu"
        isMenuOpen={isMenuOpen}
        handleClick={toggleMenu}
        pathname={pathname}
        logoRef={logoRef}
        triggerRef={menuBtnLabelRef}
      />
    </>
  );
};

export default NavBar;

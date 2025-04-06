"use client";

import { navigation } from "@/utils/navigation";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { closeMenu, toggleHeaderOnScroll, openMenu } from "./animations";
import { SideMenu } from "../SideMenu";

// the underline doesnt change color on the dark background (like in projects page)

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const NavBar = () => {
  const menuBtnRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [textColorClass, setTextColorClass] = useState("text-f-primary");
  const [bgColorClass, setBgColorClass] = useState("bg-s-primary");
  const [underlineColorClass, setUnderlineColorClass] =
    useState("bg-s-inverse");

  const pathname = usePathname();

  // Update text color class when pathname changes
  useEffect(() => {
    if (pathname === "/projects") {
      setTextColorClass("text-f-inverse");
      setUnderlineColorClass("bg-s-primary");
      setBgColorClass("bg-s-inverse");
    } else {
      setTextColorClass("text-f-primary");
      setUnderlineColorClass("bg-s-inverse");
      setBgColorClass("bg-s-primary");
    }
  }, [pathname]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      closeMenu(menuBtnRef, logoRef);
      enablePageScroll();
    } else {
      setIsMenuOpen(!isMenuOpen);
      openMenu(menuBtnRef, logoRef);
      disablePageScroll();
    }
  };

  useGSAP(() => {
    toggleHeaderOnScroll(headerRef);

    // if (isMenuOpen) {
    //   openMenu(menuBtnRef, logoRef);
    // } else {
    //   closeMenu(menuBtnRef, logoRef);
    // }
  });

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-0 ${
          isMenuOpen
            ? `${textColorClass} justify-end bg-transparent`
            : `${textColorClass} ${bgColorClass}`
        }`}
      >
        <div className="container mx-auto w-full flex items-center justify-between">
          {/* initial logo */}
          <Link
            aria-label="Home"
            href="/"
            ref={logoRef}
            className={`text-2xl/7 font-medium uppercase transition-colors duration-700 ${
              isMenuOpen ? "text-f-inverse" : textColorClass
            }`}
          >
            Sara Rossow
          </Link>
          {/* navigation */}
          <nav className="hidden lg:block -mr-8">
            <ul className="flex gap-1">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="block w-full group pl-8 py-4 lg:p-8"
                  >
                    <p className="relative overflow-visible">
                      <span>
                        {item.title}
                        {item.sup && (
                          <sup className="text-xs pl-1 text-accent">
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
                </li>
              ))}
            </ul>
          </nav>
          <button
            aria-label="Toggle menu"
            type="button"
            onClick={toggleMenu}
            className="flex py-4 lg:hidden h-full items-center"
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
      />
    </>
  );
};

export default NavBar;

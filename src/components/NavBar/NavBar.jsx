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

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

const NavBar = () => {
  const menuBtnRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const scrollTriggerRef = useRef(null); // Store the scroll trigger reference

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

  // Toggle between opened and closed menu
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      closeMenu(menuBtnRef, logoRef, headerRef);
      enablePageScroll();
    } else {
      setIsMenuOpen(!isMenuOpen);
      openMenu(menuBtnRef, logoRef);
      disablePageScroll();
    }
  };

  // Create the ScrollTrigger once on component mount
  useEffect(() => {
    scrollTriggerRef.current = toggleHeaderOnScroll(headerRef);

    // Clean up on unmount
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  // Toggle ScrollTrigger based on menu state
  useEffect(() => {
    if (scrollTriggerRef.current) {
      if (isMenuOpen) {
        // Disable ScrollTrigger and ensure header is visible when menu is open
        scrollTriggerRef.current.disable();
        gsap.to(headerRef.current, { yPercent: 0, duration: 0.3 });
      } else {
        // Re-enable ScrollTrigger when menu is closed
        scrollTriggerRef.current.enable();
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 w-screen max-w-full z-50 transition-colors duration-0 ${
          isMenuOpen
            ? `${textColorClass} bg-transparent`
            : `${textColorClass} ${bgColorClass} delay-200 duration-500`
        }`}
      >
        <div className="lg:container w-screen px-4 lg:px-8 flex items-center justify-between">
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
          {/* make it show the close menu as long as the menu is open (edge case- someone changes orientation while the menu is open on tablet -> they cannot close the menu) */}
          <nav
            className={`hidden lg:-mr-4 ${isMenuOpen ? "hidden" : "lg:block"}`}
          >
            <ul className="flex">
              {navigation.map((item) => (
                <li key={item.id}>
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
      />
    </>
  );
};

export default NavBar;

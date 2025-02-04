"use client";

import { navigation } from "@/utils/navigation";
import { disablePageScroll, enablePageScroll } from "@fluejs/noscroll";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { SideMenu } from "../SideMenu";

const NavBar = () => {
  const menuBtnRef = useRef(null);
  const logoRef = useRef(null);
  const headerRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  // define paths for inverse header color
  const textColorClass =
    pathname === "/projects" ? "text-f-inverse" : "text-f-primary";

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      enablePageScroll();
    } else {
      setIsMenuOpen(!isMenuOpen);
      disablePageScroll();
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors ${
          isMenuOpen
            ? "text-f-primary justify-end bg-transparent"
            : `${textColorClass}`
        }`}
      >
        <div className="container mx-auto w-full flex items-center justify-between">
          {/* initial logo */}
          <Link
            aria-label="Home"
            href="/"
            ref={logoRef}
            className="text-2xl/6 font-medium"
          >
            SR
          </Link>
          {/* navigation */}
          <nav className="hidden lg:block">
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
                        className={`absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 ${
                          textColorClass === "text-f-primary"
                            ? "bg-s-inverse"
                            : "bg-s-primary"
                        } ${
                          pathname == item.url ? "scale-x-100 bg-s-inverse" : ""
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
            className="flex py-8 lg:hidden h-full items-center"
          >
            <div
              ref={menuBtnRef}
              className={`flex flex-col items-end h-7 overflow-hidden justify-start align-bottom  ${
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

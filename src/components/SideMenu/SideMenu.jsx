"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "@/utils/navigation";
import { buildOpenMenuTimeline, buildCloseMenuTimeline } from "./animations";
import Link from "next/link";
import { Socials } from "../Socials";
import { CopyEmailButton, UnderlineLink } from "../NavBar";
import { ArrowIcon } from "../Icons";

gsap.registerPlugin(useGSAP);

const SideMenu = ({ handleClick, isMenuOpen, pathname, logoRef, triggerRef }) => {
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
        if (!containerRef.current || gsap.getProperty(containerRef.current, "display") === "none")
          return;

        activeTimelineRef.current = buildCloseMenuTimeline(containerRef);
      }
    },
    { dependencies: [isMenuOpen], scope: containerRef }
  );

  // Move focus into menu on open, return focus to trigger on close
  useEffect(() => {
    if (isMenuOpen) {
      const firstFocusable = containerRef.current?.querySelector(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    } else {
      triggerRef?.current?.focus();
    }
  }, [isMenuOpen]);

  // Focus trap + Escape to close
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClick();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = containerRef.current?.querySelectorAll(
        'a, button, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen, handleClick]);

  // Hide background content from screen readers while menu is open
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    if (isMenuOpen) {
      main.setAttribute("aria-hidden", "true");
      main.setAttribute("inert", "");
    } else {
      main.removeAttribute("aria-hidden");
      main.removeAttribute("inert");
    }

    return () => {
      main.removeAttribute("aria-hidden");
      main.removeAttribute("inert");
    };
  }, [isMenuOpen]);

  const textStyle = "font-normal leading-[1.16] tracking-tight text-[68px]";

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 w-full h-dvh z-40 hidden flex-col"
    >
      {/* Background panels */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-10"
      >
        <div
          data-menu-panel
          className="absolute inset-0 bg-sandyBrown h-full"
        />
        <div
          data-menu-panel
          className="absolute inset-0 bg-linen h-full"
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-s-secondary h-full"
        />
      </div>

      {/* Scrollable content */}
      <nav
        aria-label="Mobile navigation"
        className="relative z-20 w-full h-full overflow-y-auto"
      >
        <div className="flex flex-col text-f-inverse min-h-full">
          <ul className="flex flex-col pt-32">
            <li className="overflow-hidden pb-1">
              <Link
                href="/"
                onClick={handleClick}
                aria-current={pathname === "/" ? "page" : undefined}
                className="block w-full pl-6  md:p-8 slide-up"
              >
                <p
                  className={`relative ${textStyle} w-fit ${
                    pathname === "/" ? "underline-link-alt" : ""
                  }`}
                >
                  <span>Home</span>
                </p>
              </Link>
            </li>

            {navigation.map((item) => (
              <li
                className="overflow-hidden pb-1"
                key={item.id}
              >
                {item.id === "playground" ? (
                  <span
                    aria-label={`${item.title} (coming soon)`}
                    className="block w-full pl-6 md:p-8 cursor-default slide-up"
                  >
                    <p className={`relative text-f-inverse/50 ${textStyle} w-fit`}>
                      <span>
                        {item.title}
                        {item.sup && <sup className="pl-3 text-sandyBrown">{item.sup}</sup>}
                      </span>
                    </p>
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    onClick={handleClick}
                    aria-current={pathname === item.url ? "page" : undefined}
                    className="block w-full pl-6 md:p-8 slide-up"
                  >
                    <p
                      className={`relative ${textStyle} w-fit ${
                        pathname === item.url ? "underline-link-alt" : ""
                      }`}
                    >
                      <span>
                        {item.title}
                        {item.sup && <sup className="pl-3 text-sandyBrown">{item.sup}</sup>}
                      </span>
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="pl-6 -mx-3 py-5 w-full mt-auto">
            <div className="ml-3 overflow-hidden mb-5">
              <div className="flex gap-5 items-baseline slide-up">
                <p className="text-[26px] leading-none whitespace-nowrap">Reach out</p>
                <ArrowIcon
                  className="rotate-180 h-6 w-6"
                  aria-hidden="true"
                />
              </div>
              <p className="text-f-inverse/60 slide-up">sararossow@mail.com</p>
            </div>
            <Socials className="slide-up ml-3" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

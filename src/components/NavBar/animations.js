import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useCallback, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// --- Standalone timeline factories (no React, no side-effects) ---

export const buildOpenMenuTimeline = (menuBtnRef, logoRef) => {
  if (!menuBtnRef?.current || !logoRef?.current) return null;

  const menuChildren = Array.from(menuBtnRef.current.children);
  if (menuChildren.length === 0) return null;

  return (
    gsap
      .timeline({
        defaults: { ease: "power2.out", duration: 0.6 },
      })
      // Hard-reset before animating so killed mid-flight state doesn't bleed in
      .set(menuChildren, { yPercent: 0 })
      .to(menuChildren, { yPercent: -100, stagger: 0.8 })
      .to(logoRef.current, { yPercent: -10, opacity: 0 }, "<+=0.15")
  );
};

export const buildCloseMenuTimeline = (menuBtnRef, logoRef, headerRef) => {
  const nav = headerRef?.current?.querySelector("nav");
  if (!menuBtnRef?.current || !logoRef?.current || !nav) return null;

  const menuChildren = Array.from(menuBtnRef.current.children);

  return gsap
    .timeline({
      defaults: { ease: "power2.out", duration: 0.6 },
    })
    .set(menuChildren, { yPercent: -100 })
    .to(menuChildren, { yPercent: 0 })
    .to(logoRef.current, { yPercent: 0, opacity: 1 }, "<")
    .fromTo(nav, { yPercent: -100 }, { yPercent: 0 }, "<+=0.15");
};

// --- Hook: open/close callbacks scoped to the menu container ---

export const useMenuAnimation = (menuBtnRef, logoRef, headerRef) => {
  const open = useCallback(() => buildOpenMenuTimeline(menuBtnRef, logoRef), [menuBtnRef, logoRef]);

  const close = useCallback(
    () => buildCloseMenuTimeline(menuBtnRef, logoRef, headerRef),
    [menuBtnRef, logoRef, headerRef]
  );

  return { open, close };
};

// --- Hook: navbar entrance + scroll-hide/show ---

export const useNavBarAnimation = (headerRef, isMenuOpen) => {
  // Only needed for the enable/disable toggle between renders
  const scrollTriggerRef = useRef(null);

  // Mount animation + ScrollTrigger — useGSAP auto-reverts on unmount
  useGSAP(
    () => {
      if (!headerRef.current) return;

      gsap.fromTo(
        headerRef.current,
        { y: -94, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
          onComplete: () => {
            // Register the scroll trigger AFTER the entrance animation
            const showAnim = gsap
              .from(headerRef.current, {
                yPercent: -100,
                paused: true,
                duration: 0.3,
                ease: "power2.out",
              })
              .progress(1);

            scrollTriggerRef.current = ScrollTrigger.create({
              id: "headerScroll",
              start: "top top",
              end: "max",
              onUpdate: (self) => {
                self.direction === -1 ? showAnim.play() : showAnim.reverse();
              },
            });
          },
        }
      );
    },
    { scope: headerRef, dependencies: [] }
  );

  // Reactively enable/disable scroll behaviour when menu opens/closes
  useGSAP(
    () => {
      const trigger = scrollTriggerRef.current;
      if (!trigger || !headerRef.current) return;

      if (isMenuOpen) {
        trigger.disable();
        gsap.to(headerRef.current, { yPercent: 0, duration: 0.3 });
      } else {
        trigger.enable();
      }
    },
    { dependencies: [isMenuOpen], scope: headerRef }
  );
};

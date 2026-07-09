import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useCallback, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);

CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");

/*
 * Animates the "Menu" / "Close" label swap in the toggle button.
 * Returns { open, close } timeline-builders, called from NavBar's toggleMenu.
 */
export function useMenuAnimation(menuBtnLabelRef, logoRef, headerRef) {
  // logoRef/headerRef are reserved for syncing extra effects (e.g. a logo
  // color cross-fade timed with the menu) — not needed for the label swap.
  const { contextSafe } = useGSAP({ scope: headerRef });

  const open = contextSafe(() => {
    return gsap
      .timeline()
      .to(menuBtnLabelRef.current.children, { yPercent: -100, duration: 0.45, overwrite: true });
  });

  const close = contextSafe(() => {
    return gsap
      .timeline()
      .to(menuBtnLabelRef.current.children, { yPercent: 0, duration: 0.45, overwrite: true });
  });

  return { open, close };
}

/*
 * Hides the header on scroll-down, reveals it on scroll-up.
 * Forces the header visible whenever the menu is open.
 */
export function useNavBarAnimation(headerRef, isMenuOpen) {
  const isMenuOpenRef = useRef(isMenuOpen);
  isMenuOpenRef.current = isMenuOpen;
  /* Why a ref that mirrors state, instead of just reading `isMenuOpen`?
   * The ScrollTrigger callback below is created once on mount and lives on
   * inside GSAP — it's not part of React's render cycle, so it doesn't get
   * recreated when isMenuOpen changes (classic stale closure). Recreating
   * the whole ScrollTrigger on every open/close would fix that, but it's
   * overkill for updating one boolean check. So instead: mirror the state
   * into a ref every render, and have the stable callback read the ref.
   * Refs always hold the current value, no matter which closure reads them.
   */

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      let reduced = false;
      mm.add("(prefers-reduced-motion: reduce)", () => {
        reduced = true;
      });

      // Reveal on mount entrance animation
      // pairs with the `invisible` class in the JSX
      gsap.fromTo(
        headerRef.current,
        { yPercent: -100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: reduced ? 0 : 0.6, ease: "main" }
      );

      const show = () =>
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: reduced ? 0 : 0.6,
          ease: "main",
          overwrite: true,
        });

      const hide = () =>
        gsap.to(headerRef.current, {
          yPercent: -100,
          duration: reduced ? 0 : 0.3,
          ease: "main",
          overwrite: true,
        });

      const trigger = ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
          if (isMenuOpenRef.current) return;
          self.direction === -1 ? show() : hide();
        },
      });

      return () => {
        trigger.kill();
        mm.revert();
      };
    },
    { scope: headerRef }
  );

  // Whenever the menu opens, force the header back into view immediately
  useGSAP(
    () => {
      if (isMenuOpen) {
        gsap.to(headerRef.current, {
          yPercent: 0,
          duration: 0.6,
          ease: "main",
          overwrite: true,
        });
      }
    },
    { dependencies: [isMenuOpen], scope: headerRef }
  );
}

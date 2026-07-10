import gsap from "gsap";

/*
 * Called from within SideMenu's own useGSAP({ dependencies: [isMenuOpen], scope: containerRef }),
 * so plain class selectors below resolve scoped to containerRef automatically.
 */
export function buildOpenMenuTimeline(containerRef, menuRef, overlayRef, logoRef) {
  const panels = menuRef.current.querySelectorAll("[data-menu-panel]");
  const listItems = containerRef.current.querySelectorAll(".slide-up");

  gsap.set(containerRef.current, { display: "flex" });
  gsap.set([panels, overlayRef.current], { yPercent: -101, skewY: 5 });
  gsap.set([listItems], { autoAlpha: 0, yPercent: 24 });

  return gsap
    .timeline()
    .to(panels, { yPercent: 0, skewY: 0, stagger: 0.12, duration: 0.575 })
    .to(overlayRef.current, { yPercent: 0, skewY: 0, duration: 0.575 }, "<+0.24")
    .to(listItems, { autoAlpha: 1, yPercent: 0, stagger: 0.05 }, "<+=0.2");
}

/**
 * Only receives containerRef, matching SideMenu's close-branch call signature.
 */
export function buildCloseMenuTimeline(containerRef) {
  const panels = containerRef.current.querySelectorAll("[data-menu-panel]");
  const overlay = containerRef.current.querySelector(".bg-s-secondary");
  const content = containerRef.current.querySelectorAll(".slide-up");

  return gsap
    .timeline()
    .to(content, { autoAlpha: 0, duration: 0.25 })
    .to([overlay, panels], { yPercent: 100, stagger: 0.05, duration: 0.4 }, "<")
    .set(containerRef.current, { display: "none" });
}

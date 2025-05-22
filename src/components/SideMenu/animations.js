import gsap from "gsap";

export const openMenu = (containerRef, menuRef, overlayRef, logoRef) => {
  const panels = menuRef.current.querySelectorAll(
    "div.bg-accent, div.bg-f-primary, div.bg-s-secondary"
  );

  const timeline = gsap.timeline({
    defaults: {
      ease: "main",
      duration: 0.7,
    },
  });

  timeline
    .set(containerRef.current, {
      xPercent: 0,
      duration: 0,
      display: "block",
    })
    .set(logoRef.current, { clearProps: "transform" })
    .fromTo(
      // Slide in animation
      panels,
      { xPercent: 105, skewX: 5 },
      { xPercent: 0, skewX: 0, stagger: 0.12, duration: 0.575 },
      "<"
    )
    .fromTo(
      // Overlay animation
      overlayRef.current,
      { xPercent: 105 },
      { xPercent: 0, duration: 0.3 },
      "<+=0.30"
    )
    // Text and icon animation
    .fromTo(
      "a",
      { yPercent: 140, rotate: 10 },
      { yPercent: 0, rotate: 0, stagger: 0.05 },
      "<+=0.35"
    )
    .fromTo(
      "img",
      { yPercent: 160, rotate: 10 },
      { yPercent: 0, rotate: 0, stagger: 0.05 },
      "<+=0.30"
    )
    .fromTo(
      ".underline",
      { scaleX: 0, transformOrigin: "left" },
      { scaleX: 1 },
      "<+=0.25"
    );

  return timeline;
};

export const closeMenu = (containerRef) => {
  const timeline = gsap.timeline({
    defaults: {
      ease: "main",
      duration: 0.3,
    },
  });

  timeline
    .fromTo(
      // Slide in animation
      containerRef.current,
      { xPercent: 0, duration: 0.3 },
      { xPercent: 105 }
    )
    .set(containerRef.current, { display: "none" }, "<+=0.30");

  return timeline;
};

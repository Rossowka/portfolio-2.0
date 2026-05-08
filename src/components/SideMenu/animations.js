import gsap from "gsap";

export const buildOpenMenuTimeline = (containerRef, menuRef, overlayRef, logoRef) => {
  const container = containerRef.current;
  const panels = menuRef.current.querySelectorAll(
    "div.bg-sandyBrown, div.bg-linen, div.bg-s-secondary"
  );

  return (
    gsap
      .timeline({ defaults: { ease: "power2.out", duration: 0.6 } })
      .set(container, { display: "flex", xPercent: 0 })
      .set(logoRef.current, { clearProps: "transform" })
      .fromTo(
        // Slide in animation
        panels,
        { xPercent: 105, skewX: 5 },
        { xPercent: 0, skewX: 0, stagger: 0.12, duration: 0.6 },
        "<"
      )
      // Overlay animation
      .fromTo(overlayRef.current, { xPercent: 105 }, { xPercent: 0, duration: 0.3 }, "<+=0.30")
      // Text and icon animation
      // Scoped selectors — only target elements inside the container
      .fromTo(
        container.querySelectorAll(".slide-up"),
        { yPercent: 140, rotate: 10 },
        { yPercent: 0, rotate: 0, stagger: 0.05 },
        "<+=0.35"
      )
      .fromTo(
        container.querySelectorAll("img"),
        { yPercent: 160, rotate: 10 },
        { yPercent: 0, rotate: 0, stagger: 0.05 },
        "<+=0.30"
      )
      .fromTo(
        container.querySelectorAll(".underline-slide"),
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1 },
        "<+=0.25"
      )
      .fromTo(container.querySelectorAll(".appear"), { autoAlpha: 0 }, { autoAlpha: 1 }, "<+=0")
  );
};

export const buildCloseMenuTimeline = (containerRef) => {
  const container = containerRef.current;

  return gsap
    .timeline({ defaults: { ease: "power2.in", duration: 0.3 } })
    .to(container, { xPercent: 105 })
    .set(container, { display: "none", xPercent: 0 });
};

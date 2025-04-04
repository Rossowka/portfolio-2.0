import { gsap } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const openMenu = (menuBtnRef, logoRef) => {
  const timeline = gsap.timeline({
    defaults: {
      ease: [0.65, 0.01, 0.05, 0.99],
      duration: 0.7,
    },
  });

  timeline
    .to(menuBtnRef.current.children, {
      yPercent: -100,
      stagger: 0.2,
    })
    .to(logoRef.current, { yPercent: -300, opacity: 0 }, "<+=0.15");

  return timeline;
};

export const closeMenu = (menuBtnRef, logoRef) => {
  const timeline = gsap.timeline({
    defaults: {
      ease: [0.65, 0.01, 0.05, 0.99],
      duration: 0.7,
    },
  });

  timeline
    .to(menuBtnRef.current.children, {
      yPercent: 0,
    })
    .to(logoRef.current, { yPercent: 0, opacity: 1 }, "<");

  return timeline;
};

export const toggleHeaderOnScroll = (headerRef) => {
  const showAnim = gsap
    .from(headerRef.current, {
      yPercent: -100,
      paused: true,
      duration: 0.3,
      ease: "power2.inOut",
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: "max",
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });
};

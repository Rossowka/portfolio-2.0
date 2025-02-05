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

export const toggleHeaderOnScroll = (headerRef, isMenuOpen, textColorClass) => {
  let lastScrollTop = 0;
  let headerTextColor;

  switch (textColorClass) {
    case "text-f-primary":
      headerTextColor = "#1C1C14";
      break;
    default:
      headerTextColor = "#e5e7eb";
  }

  // Initial state
  gsap.set(headerRef.current, {
    yPercent: 0,
    color: headerTextColor,
    backgroundColor: "transparent",
  });

  ScrollTrigger.create({
    start: "top+=100 top",
    end: "max",
    onUpdate: (self) => {
      if (isMenuOpen) {
        gsap.to(headerRef.current, {
          yPercent: 0,
          backgroundColor: "transparent",
          duration: 0.3,
        });
        return;
      }

      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop) {
        gsap.to(headerRef.current, {
          yPercent: -100,
          duration: 0.3,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(headerRef.current, {
          yPercent: 0,
          color: scrollTop > 100 ? "#1C1C14" : headerTextColor,
          backgroundColor: scrollTop > 100 ? "#ffffff" : "transparent",
          duration: 0.3,
          ease: "power2.inOut",
        });
      }

      lastScrollTop = scrollTop;
    },
  });
};

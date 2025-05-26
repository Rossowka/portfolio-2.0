import { useEffect } from "react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

let registered = false;

export const useGsapScrollTo = () => {
  useEffect(() => {
    if (!registered) {
      gsap.registerPlugin(ScrollToPlugin);
      registered = true;
    }
  }, []);

  const scrollTo = (targetId) => {
    const target = document.querySelector(`#${targetId}`);
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: target, offsetY: 80 },
        ease: "power2.inOut",
      });
    }
  };

  return scrollTo;
};

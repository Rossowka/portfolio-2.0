import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

const HeroValueProposition = () => {
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(paragraphRef.current, {
        type: "lines",
        mask: "lines",
        autoSplit: true,
      });

      gsap.set(paragraphRef.current, { autoAlpha: 1 });

      gsap.from(split.lines, {
        opacity: 0,
        yPercent: 110,
        x: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.8,
      });
    },
    { scope: paragraphRef }
  );

  return (
    <div className="flex sm:justify-end pl-5 sm:pl-0 pt-10 lg:pt-20">
      <p
        ref={paragraphRef}
        className="text-f-primary leading-normal font-sans w-5/6 lg:max-w-[290px] text-pretty text-base invisible"
      >
        Hello, I’m Sara – a strategic designer creating digital products for high-stakes humans.
      </p>
    </div>
  );
};

export default HeroValueProposition;

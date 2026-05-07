import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

const HeroValueProposition = () => {
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(paragraphRef.current, { type: "lines" });

      gsap.set(paragraphRef.current, { autoAlpha: 1 });

      gsap.from(split.lines, {
        opacity: 0,
        y: 12,
        x: 1,
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
        delay: 1.2,
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

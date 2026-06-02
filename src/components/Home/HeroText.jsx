import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText, useGSAP);

const HeroText = () => {
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      const split = new SplitText(paragraphRef.current, { type: "chars" });

      gsap.set(paragraphRef.current, { autoAlpha: 1, mask: "chars" });

      gsap.from(split.chars, {
        opacity: 0,
        x: 20,
        duration: 0.8,
        stagger: 0.03,
        ease: "power2.out",
        delay: 0.4,
      });
    },
    { scope: paragraphRef }
  );

  return (
    <div className="tracking-tight font-serif font-normal text-[68px] leading-none md:text-[80px] lg:text-[110px] z-10">
      {/* hero text */}
      <div className="-mt-36 sm:mt-0">
        <h1
          className="slide-up text-f-inverse sm:text-f-primary invisible"
          ref={paragraphRef}
        >
          Digital
          <span className="block">:Designer</span>
        </h1>
      </div>
    </div>
  );
};

export default HeroText;

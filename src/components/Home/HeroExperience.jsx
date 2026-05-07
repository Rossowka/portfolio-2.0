import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroExperience = () => {
  const paragraphRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(paragraphRef.current, { autoAlpha: 1 });

      gsap.from("p", {
        opacity: 0,
        y: 10,
        x: 1,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        delay: 1.6,
      });
    },
    { scope: paragraphRef }
  );

  return (
    <div
      className="flex flex-col-reverse lg:flex-row pl-5 sm:pl-0 sm:items-end pt-5 lg:pt-10 invisible h-full"
      ref={paragraphRef}
    >
      <p className="text-f-primary leading-normal font-sans text-pretty text-base w-5/6  mt-5 font-bold tracking-widest">
        available for work
      </p>

      <div className="leading-normal text-base flex flex-col w-5/6 lg:max-w-[290px] text-f-secondary ">
        <p>4+ years in design</p>
        <p>2 years in B2B Enterprise SaaS</p>
      </div>
    </div>
  );
};

export default HeroExperience;

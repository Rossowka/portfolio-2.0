"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SummarySection = ({ currentProject }) => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(sectionRef.current, { autoAlpha: 1 });

      gsap.from(sectionRef.current, {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="invisible px-6"
    >
      {/* summary text */}
      <div className="max-w-7xl mx-auto py-20 md:pb-32 flex flex-col">
        <div className="w-full lg:w-8/12 lg:me-[8%] ml-auto">
          <div>
            <p className="text-[26px] leading-normal lg:text-lg lg:leading-relaxed text-pretty">
              {currentProject.summary}
            </p>
          </div>

          <div className="flex mt-16 gap-8 flex-col md:flex-row">
            <div className="lg:ml-0 md:flex-1 shrink-0 md:max-w-[50%] order-1 md:order-none">
              <p className="text-f-primary/60  whitespace-nowrap mb-5 text-base tracking-wider leading-relaxed">
                Responsibilities
              </p>
              <ul>
                {currentProject.responsibilities.map((tag, index) => (
                  <li
                    key={index}
                    className="text-f-primary/80 py-1 text-base"
                  >
                    → {tag}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:ml-0 md:flex-1 shrink-0 md:max-w-[50%] order-1 md:order-none">
              <p className="text-f-primary/60  whitespace-nowrap mb-5 text-base tracking-wider leading-relaxed">
                Outcomes
              </p>
              <ul>
                {currentProject.outcomes.map((tag, index) => (
                  <li
                    key={index}
                    className="text-f-primary/80 py-1 text-base"
                  >
                    → {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;

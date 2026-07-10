"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import NakedButton from "./NakedButton";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FeaturedProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      gsap.set(card, { y: 40, autoAlpha: 0 });

      gsap.to(card, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "expo.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: cardRef }
  );

  return (
    <>
      <div className=" bg-white/20 h-[1px]"></div>

      <li
        ref={cardRef}
        className={`flex flex-col lg:flex-row gap-10 py-20`}
      >
        <div className="relative w-full lg:w-7/12">
          <div className="relative w-max-[730px] aspect-[4/3]">
            <Image
              src={project.snapshot.src}
              alt={project.snapshot.alt}
              fill
              sizes="(max-width: 730px) 100vw, 730px"
              className="object-cover"
            />
          </div>
        </div>

        {/* content */}
        <div className="grow flex flex-col gap-5 w-full lg:w-5/12">
          {/* title */}
          <div className="flex gap-x-4 flex-wrap">
            {project.productTags.map((tag, i) => (
              <p
                key={i}
                className="text-f-inverse/60 whitespace-nowrap text-[10px] leading-none tracking-wider pb-1"
              >
                {tag}
              </p>
            ))}
          </div>

          <p className="text-[42px] leading-[1.2] tracking-tight text-balance">{project.client}</p>

          <h3 className="text-[26px] leading-tight tracking-tight text-balance text-f-inverse/60">
            {project.title}
          </h3>

          {/* results */}
          {project.impact.length > 0 && (
            <div className="flex flex-col sm:flex-row -mx-2 lg:-mx-5 pt-5 mb-5 lowercase gap-y-5">
              {project.impact.slice(0, 2).map((result, i) => (
                <div
                  key={i}
                  className="px-2 lg:px-5 sm:flex-[0_0_50%] sm:max-w-[50%]"
                >
                  <span className="text-[26px] font-semibold leading-loose bg-linen text-f-primary p-3">
                    {result.data}
                  </span>
                  <p className="text-base text-f-inverse/80 text-balance mt-5">{result.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* cta */}
          <div className="flex justify-end mt-5 ">
            <NakedButton project={project} />
          </div>
        </div>
      </li>
    </>
  );
};

export default FeaturedProjectCard;

"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "../ArrowIcon";

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
        duration: 1,
        ease: "power2.out",
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
        <div className="relative w-full">
          <div className="relative w-max-[620px] aspect-video">
            <Image
              src={project.snapshot.src}
              alt={project.snapshot.alt}
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </div>

        {/* content */}
        <div className="grow flex flex-col gap-5 w-full">
          {/* title */}
          <div className="flex gap-x-4 flex-wrap">
            {project.productTags.map((result, i) => (
              <p
                key={i}
                className="text-f-inverse/60 whitespace-nowrap text-[10px] leading-none tracking-wider pb-1"
              >
                {result}
              </p>
            ))}
          </div>

          <p className="text-[26px] leading-none font-medium">{project.client}</p>

          <h3 className="text-[26px] leading-tight tracking-tight text-balance text-f-inverse/80">
            {project.title}
          </h3>

          {/* results */}
          <div className="flex flex-col sm:flex-row -mx-2 lg:-mx-5 pt-5 mb-auto lowercase gap-y-5">
            {project.impact.slice(0, 2).map((result, i) => (
              <div
                key={i}
                className="px-2 lg:px-5 sm:flex-[0_0_50%] sm:max-w-[50%]"
              >
                <strong className="text-[26px] leading-loose block mb-2 font-medium">
                  {result.data}
                </strong>
                <p className="text-base text-f-inverse/80 text-balance">{result.text}</p>
              </div>
            ))}
          </div>

          {/* cta */}
          <div className="flex justify-end mt-5 sm:mt-0">
            <Link
              href={project.url}
              className="flex justify-end gap-1 px-8 py-4 text-sandyBrown -ml-8 group w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown"
            >
              <p className="whitespace-nowrap text-lg leading-relaxed font-medium text-inherit relative overflow-visible">
                <span className="truncate">{project.cta || "Explore the impact"}</span>
                {/* underline */}
                <span
                  className={`underline absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left lg:scale-x-0 group-hover:scale-x-100 bg-sandyBrown`}
                ></span>
              </p>
              <div className="min-w-fit content-center">
                <ArrowIcon className="text-inherit -rotate-45" />
              </div>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

export default FeaturedProjectCard;

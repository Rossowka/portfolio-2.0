"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "../ArrowIcon";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FeaturedProjectCard = ({ project, imageOnRight }) => {
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
    <li
      ref={cardRef}
      className={`flex flex-col lg:flex-row gap-10 overflow-hidden`}
    >
      {/* image — order swaps based on imageOnRight */}
      <div
        className={`relative w-full lg:max-w-[50%] lg:shrink-0 md:self-start ${
          imageOnRight ? "lg:order-last" : "lg:order-first"
        }`}
      >
        <div className="relative w-full aspect-video">
          <Image
            src={project.thumbnail.src}
            alt={project.thumbnail.alt}
            fill
            sizes="(max-width: 768px) 100vw, 620px"
            className="object-cover"
          />
        </div>

        {/* caption */}
        <div className="flex justify-between gap-5 pt-5 text-base">
          <p className="opacity-80">{project.client}</p>
          <p className="opacity-50">{project.year}</p>
        </div>
      </div>

      {/* content */}
      <div className="grow flex flex-col">
        {/* title */}
        <h3 className="text-2xl lg:text-[42px] leading-tight tracking-tight mb-5 lg:mb-10 text-balance">
          {project.title}
        </h3>

        {/* results */}
        <div className="flex -mx-2 lg:-mx-5 mt-auto lowercase">
          {project.impact.slice(0, 2).map((result, i) => (
            <div
              key={i}
              className="pt-4 pb-8 px-2 lg:px-5 flex-[0_0_50%] max-w-[50%]"
            >
              <strong className="text-4xl lg:text-[32px] leading-none tracking-normal font-serif block mb-2 lg:mb-4">
                {result.data}
              </strong>
              <p className="text-base opacity-80 text-balance">{result.text}</p>
            </div>
          ))}
        </div>

        {/* cta */}
        <div className="flex">
          <Link
            href={project.url}
            className="flex gap-1 px-8 py-4 justify-center text-sandyBrown -ml-8 group"
          >
            <div className="min-w-fit content-center">
              <ArrowIcon className="text-inherit -rotate-45" />
            </div>
            <p className="whitespace-nowrap text-lg leading-relaxed font-medium text-inherit relative overflow-visible">
              <span>{project.cta || "Explore the impact"}</span>
              {/* underline */}
              <span
                className={`underline absolute left-0 -bottom-1 w-full h-0.5 transition-transform transform origin-left lg:scale-x-0 group-hover:scale-x-100 bg-sandyBrown`}
              ></span>
            </p>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default FeaturedProjectCard;

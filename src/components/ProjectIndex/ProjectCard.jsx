"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(cardRef.current, { autoAlpha: 0, y: 20 });

      gsap.to(cardRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.75,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: cardRef }
  );

  return (
    <li
      ref={cardRef}
      className="invisible mb-20 px-5 w-full md:max-w-[50%] md:flex-[50%] overflow-hidden transition-transform duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-0.5"
    >
      <Link href={project.url}>
        <figure>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={project.snapshot.src}
              alt={project.snapshot.alt}
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={project.snapshot.src}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 640px"
            />
          </div>
          <figcaption>
            <h3 className="pt-5 w-full text-[26px] leading-snug text-pretty">
              <span className="opacity-50">{project.client} - </span>
              <span>{project.title}</span>
            </h3>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export default ProjectCard;

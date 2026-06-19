"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProjectDetails, ProjectTitle } from ".";
import Image from "next/image";

const ProjectHeader = ({ currentProject }) => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(headerRef.current, { autoAlpha: 1 });
      gsap.from(headerRef.current, {
        y: 12,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    { scope: headerRef }
  );

  return (
    <header
      ref={headerRef}
      className="invisible pt-[100px] md:pt-[120px] lg:pt-[186px] px-6 mb-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-5">
        <p className="text-base text-accent font-semibold tracking-wider leading-relaxed">
          {currentProject.client}
        </p>
        <ProjectTitle currentProject={currentProject} />
        <p className="text-base text-f-primary/60 tracking-wider leading-relaxed">
          {currentProject.timeToRead} • {currentProject.clientLocation} ©{currentProject.year}
        </p>
        <Image
          src={currentProject.mainShot.src}
          alt={currentProject.mainShot.alt}
          className={`object-cover w-full mx-auto h-full object-center`}
          width={1280}
          height={720}
          quality={100}
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 1176px"
        />
        <ProjectDetails currentProject={currentProject} />
      </div>
    </header>
  );
};

export default ProjectHeader;

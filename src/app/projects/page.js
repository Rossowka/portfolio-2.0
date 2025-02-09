"use client";

import { Button } from "@/components";
import { FilteredPortfolio } from "@/components/Projects";
import { PROJECTS } from "@/utils/projects";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add page transition animation
 
*/

export default function Projects() {
  return (
    <section className="pt-32 pb-8 md:pb-24 md:pt-48 lg:pb-24 relative bg-s-inverse text-f-inverse">
      {/* section title */}
      <header className="container flex flex-col">
        <h1 className="page-title mb-8 lg:mb-16">
          my digital footprint
          <sup className="text-[1.25rem]/[1.5] pl-2 top-0 md:text-[2rem]/[1.5] lg:text-[2.75rem]/[1.5] align-text-top lg:pl-4 text-accent h-full">
            {PROJECTS.length}
          </sup>
        </h1>
        <div className="md:ms-[16%] mb-10 md:mb-14 lg:mb-28 flex flex-col md:flex-row">
          <p className="eyebrow text-f-inverse/40 mr-12 mb-4">
            [ project index ]
          </p>
          <p className="max-w-lg">
            This portfolio showcases a selection of my work, representing the
            range and diversity of projects I've undertaken. While some pieces
            are not displayed due to client confidentiality, I believe these
            examples capture the breadth of what I can bring to each project.
          </p>
        </div>
      </header>

      <FilteredPortfolio />

      {/* button */}
      <div className="container flex justify-center">
        <Button
          label="get to know me"
          className="text-f-inverse"
          href="/about"
        />
      </div>
    </section>
  );
}

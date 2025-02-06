"use client";

import { FeaturedProjects, Hero, Intro } from "@/components/Home";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add preload animation
[] add cookie consent
 
*/

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
      {/* <Outro /> */}
    </>
  );
}

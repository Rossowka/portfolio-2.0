"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/components/Home";

// Lazy load components to improve performance
const Intro = dynamic(() => import("@/components/Home/Intro"));
const FeaturedProjects = dynamic(() =>
  import("@/components/Home/FeaturedProjects")
);

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />
    </>
  );
}

"use client";

import dynamic from "next/dynamic";
import { Hero, Intro } from "@/components/Home";

// Lazy load components to improve performance
const FeaturedProjects = dynamic(() => import("@/components/Home/FeaturedProjects"));
const ConsentManager = dynamic(() => import("@/components/ConsentManager/ConsentManager"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <FeaturedProjects />

      <ConsentManager />
    </>
  );
}

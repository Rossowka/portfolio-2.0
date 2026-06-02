import { AboutSection, Bio } from "@/components/About";

import dynamic from "next/dynamic";

// Lazy load components to improve performance
const AfterWork = dynamic(() => import("@/components/About/AfterWork"));

const About = () => {
  return (
    <>
      <Bio />
      <AboutSection />
      {/* <AfterWork /> */}
    </>
  );
};

export default About;

// "use client";
import {
  AboutSection,
  CareerInNumbers,
  CoreValues,
  Superpowers,
  Welcome,
} from "@/components/About";

const About = () => {
  return (
    <>
      <Welcome />
      <AboutSection />
      <CoreValues />
      <CareerInNumbers />
      <Superpowers />
    </>
  );
};

export default About;

// "use client";
import { Button } from "@/components";
import {
  AboutSection,
  CareerInNumbers,
  Superpowers,
  Welcome,
} from "@/components/About";

const About = () => {
  return (
    <>
      <Welcome />
      <section className="container pt-16 lg:pt-32 pb-8 md:pb-24 md:pt-48 lg:pb-24 relative flex flex-col lg:flex-row gap-16 lg:justify-between">
        <CareerInNumbers />
        <AboutSection />
      </section>
      <Superpowers />
    </>
  );
};

export default About;

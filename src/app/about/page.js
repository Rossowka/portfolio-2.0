// "use client";
import { Button } from "@/components";
import { Welcome } from "@/components/About";

const About = () => {
  return (
    <>
      <Welcome />
      <section className="pt-32 pb-8 md:pb-24 md:pt-48 lg:pb-24 relative">
        <div className="container flex justify-center">
          <Button
            label="see my work"
            className="text-f-inverse"
            href="/projects"
          />
        </div>
      </section>
    </>
  );
};

export default About;

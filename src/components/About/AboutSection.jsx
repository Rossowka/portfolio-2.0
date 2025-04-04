import { story } from "@/utils/about";
import { HeadingL, HeadingXL } from "../Text";
import { Button } from "../Button";

const AboutSection = () => {
  return (
    <div className="container pt-16 lg:pt-32 pb-8 md:pb-12 md:pt-24 lg:pb-24 max-w-xl self-center">
      <HeadingXL
        headingText="here's mine"
        subheadingText="I believe in stories"
      />
      {story.map((paragraph, index) => (
        <div key={index}>
          <HeadingL
            headingText={paragraph.heading}
            className="font-serif"
          />
          <p className="pb-5 text-xl leading-relaxed text-f-primary/80">
            {paragraph.text}
          </p>
        </div>
      ))}
      <div className="mt-16 flex flex-col md:flex-row gap-4">
        <Button
          label="my work"
          className="text-f-inverse"
          href="/projects"
          primary
        />
        <Button
          label="my cv on linkedin"
          className="text-f-inverse"
          href="https://www.linkedin.com/in/sararossow"
        />
      </div>
    </div>
  );
};

export default AboutSection;

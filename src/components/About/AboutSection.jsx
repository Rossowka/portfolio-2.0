import { story } from "@/utils/about";
import { HeadingL, HeadingXL } from "../Text";
import { Button } from "../Button";

const AboutSection = () => {
  return (
    <div className="max-w-xl order-1 lg:order-2 self-center">
      <HeadingXL
        headingText="my story"
        subheadingText="meet me"
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

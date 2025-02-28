import { superpowers } from "@/utils/about";
import { HeadingM, HeadingXL } from "../Text";

const Superpowers = () => {
  return (
    <section className="pt-32 pb-12 flex flex-col">
      <div className="container">
        <HeadingXL
          headingText="my superpowers"
          subheadingText="what I bring to the team"
        />
        <div className="flex flex-wrap -mx-5 ">
          {superpowers.map((paragraph, index) => (
            <div
              key={index}
              className="sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333333%] md:max-w-[33.333333%] px-5"
            >
              <HeadingM
                headingText={paragraph.heading}
                className="font-serif"
              />
              <p className="pb-5 text-base leading-relaxed text-f-primary/80">
                {paragraph.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Superpowers;

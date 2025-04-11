import { careerInNumbers } from "@/utils/about";
import { HeadingL } from "../Text";

const CareerInNumbers = () => {
  return (
    <section className="container pt-16 lg:pt-24 pb-8 md:pb-12 md:pt-12 lg:pb-24">
      <HeadingL
        headingText="career in numbers"
        className="text-accent text-right mr-8"
      />
      <div className="flex flex-col md:flex-row gap-8 md:items-end md:justify-end">
        {careerInNumbers.map((stat, index) => (
          <div
            className="p-8 shadow-md flex-1 rounded-3xl h-fit"
            key={index}
          >
            <p className="pb-1 text-3xl lg:text-6xl leading-tight tracking-tight font-bold">
              {stat.number}
            </p>
            <p className="pb-8 text-base lg:text-xl leading-normal  font-serif font-bold">
              {stat.text}
            </p>
            <p className="text-xs lg:text-sm text-f-primary/60">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerInNumbers;

import { careerInNumbers } from "@/utils/about";
import { HeadingL } from "../Text";

const CareerInNumbers = () => {
  return (
    <div className="lg:max-w-[400px] lg:mt-64 order-2 lg:order-1">
      <div className="">
        <HeadingL
          headingText="career in numbers"
          className="text-accent indent-8"
        />
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col gap-8">
        {careerInNumbers.map((stat, index) => (
          <div
            className="p-8 shadow-md rounded-3xl h-fit"
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
    </div>
  );
};

export default CareerInNumbers;

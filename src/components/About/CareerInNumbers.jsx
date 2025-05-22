import { careerInNumbers } from "@/utils/about";
import { HeadingL } from "../Text";
import { CareerCard } from ".";

const CareerInNumbers = () => {
  return (
    <section className="container pt-16 lg:pt-24 pb-8 md:pb-12 md:pt-12 lg:pb-24">
      <HeadingL
        headingText="career in numbers"
        className="text-accent text-right mr-8"
      />
      <div className="flex flex-col md:flex-row gap-8 md:items-end md:justify-end">
        {careerInNumbers.map((stat, index) => (
          <CareerCard
            stat={stat}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerInNumbers;

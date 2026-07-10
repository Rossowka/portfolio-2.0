"use client";

import { careerInNumbers } from "@/utils/about";
import { CareerCard } from ".";

const CareerInNumbers = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 my-20 xl:w-9/12 pl-[40px] md:pl-[110px]">
      {careerInNumbers.map((stat, index) => (
        <CareerCard
          stat={stat}
          key={index}
        />
      ))}
    </div>
  );
};

export default CareerInNumbers;

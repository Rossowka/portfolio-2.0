"use client";

import { whyMe } from "@/utils/about";

const Superpowers = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 justify-between py-10 md:py-40 w-full">
      {/* left side */}
      <div className="flex flex-col relative gap-10 mt-5 w-full sm:w-1/2 xl:w-[330px]">
        <h2 className="font-semibold uppercase tracking-widest text-sandyBrown whitespace-nowrap leading-normal text-base">
          what I bring to the team
        </h2>
        <p className="text-[42px] tracking-tight leading-tight">
          Thoughtfulness, clarity, and a spark of optimism
        </p>
      </div>

      {/* right side */}
      <div className="pt-20 lg:px-[110px] w-full">
        {whyMe.map((item) => (
          <div
            key={item.heading}
            className="flex flex-col md:flex-row gap-5 pt-5 pb-10 border-t-[1px] border-white/20 justify-between w-full"
          >
            <p className="text-[26px] md:w-[220px] leading-tight">{item.heading}</p>
            <p className="text-base text-f-inverse/60 md:w-[400px] text-pretty ">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Superpowers;

"use client";

import { Button } from "../Button";

const UpNext = ({ nextProject }) => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-0 py-20 my-20 border-t-[1px] border-b-[1px] border-f-inverse">
      <div className="flex flex-col gap-5">
        <p className="text-base text-accent font-semibold tracking-wider leading-relaxed mt-5">
          Next project
        </p>
        <h2 className="font-medium font-serif text-[26px] lg:text-[68px] tracking-tight leading-[1.1] mb-5 md:mr-8 text-balance">
          <span>{nextProject.client} - </span>
          <span>{nextProject.title}</span>
        </h2>
      </div>

      <div className="my-5">
        <Button
          label="see project"
          href={nextProject.url}
        />
      </div>
    </section>
  );
};

export default UpNext;

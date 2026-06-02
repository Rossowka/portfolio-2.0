"use client";

import Image from "next/image";
import { socials } from "@/utils/socials";
import Link from "next/link";
import { Fragment } from "react";
import { EMAIL, story } from "@/utils/about";

const avatar = "/images/hero-image.webp";

const Bio = () => {
  return (
    <section className="px-6 pb-8 md:pb-24 lg:py-24 flex flex-col bg-linen xl:h-svh">
      {/* Top padding for menu */}
      <div className="h-[60px] md:h-24" />
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row relative gap-5 mt-6 justify-between">
        {/* left side */}
        <div className="text-[26px] leading-snug w-full md:w-3/12 text-f-primary/50 relative">
          <p className="text-[42px] text-f-primary/80 md:text-base md:mb-5 absolute -rotate-90 bottom-32 -left-36 md:static md:rotate-0 md:text-f-primary/50 transition-transform duration-300 ease-in-out">
            Digital Designer
          </p>
          <Image
            src={avatar}
            width={290}
            height={387}
            alt="Sara waving and smiling"
            quality={100}
            priority
            fetchPriority="high"
            className="mb-0 md:mb-5 lg:mb-10 ml-auto md:ml-0"
          />
          <div className="text-base md:gap-5 xl:gap-10 hidden md:flex md:flex-col xl:flex-row">
            <div className="whitespace-nowrap">
              <p className="font-semibold mb-1 xl:mb-0 xl:font-normal">origin:</p>
              <p className="xl:hidden line-through mr-2">Torun, Poland</p>
              <p className="hidden xl:block font-semibold mb-1 xl:mb-0 xl:font-normal text-f-primary/80">
                based in:
              </p>
            </div>
            <div className="w-full">
              <p className="xl:hidden font-semibold mb-1 xl:mb-0 xl:font-normal text-f-primary/80">
                based in:
              </p>
              <p className="hidden xl:block line-through mr-2">Torun, Poland</p>
              <p className="line-through mr-2">Gdansk, Poland</p>
              <p className="line-through mr-2">Gold Coast, Australia</p>
              <p className="text-f-primary/80">Hamburg, Germany</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-8/12 xl:w-7/12 md:pl-4 mt-10 md:mb-20 text-pretty">
          <h1 className="text-[26px] leading-normal mb-20">
            Over 4 years of diverse practice in design, B2B enterprise systems, B2C websites and
            design systems.
          </h1>

          <div className="flex flex-col lg:flex-row lg:justify-between mb-10">
            <p className="font-semibold mb-1 lg:mb-0 lg:font-normal">connect</p>
            <div className="flex lg:w-[400px]">
              {socials.map((item) => (
                <Fragment key={item.id}>
                  <Link
                    target="_blank"
                    href={item.url}
                    rel="noopener noreferrer"
                    aria-label={`Link to Sara's ${item.title} profile`}
                    className="underline underline-offset-[4px]"
                  >
                    {item.id}
                  </Link>

                  <span
                    className="mx-1 select-none"
                    aria-hidden="true"
                  >
                    /
                  </span>
                </Fragment>
              ))}
              <Link
                target="_blank"
                href={`mailto:"${EMAIL}"`}
                rel="noopener noreferrer"
                aria-label={`Link to send Sara an email`}
                className="underline underline-offset-[4px]"
              >
                email
              </Link>
            </div>
          </div>

          {story.map((item) => (
            <div
              key={item.label}
              className="flex flex-col lg:flex-row lg:justify-between mb-10"
            >
              <p className="font-semibold mb-1 lg:mb-0 lg:font-normal">{item.label}</p>
              <div className="w-full md:w-[400px] lowercase">
                {Array.isArray(item.text) ? (
                  item.text.map((entry) => (
                    <div
                      key={entry.company}
                      className="flex justify-between border-b-2 border-f-primary/10 capitalize"
                    >
                      <p>{entry.company}</p>
                      <p className="text-f-primary/60">{entry.dates}</p>
                    </div>
                  ))
                ) : (
                  <p>{item.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;

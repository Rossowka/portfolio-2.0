"use client";

import Image from "next/image";
import { socials } from "@/utils/socials";
import Link from "next/link";
import { Fragment } from "react";
import { EMAIL, story } from "@/utils/about";

const avatar = "/images/hero-image.webp";

const Bio = () => {
  return (
    <section className="px-6 pb-8 md:pb-24 lg:pb-48 flex flex-col bg-linen">
      {/* Top padding for menu */}
      <div className="h-[60px] md:h-24" />
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row relative gap-5 mt-6 justify-between">
        {/* left side */}
        <div className="text-[26px] leading-snug w-full md:w-3/12 text-f-primary/50">
          <p className="text-base mb-5 hidden md:block">Digital Designer</p>
          <Image
            src={avatar}
            width={400}
            height={533}
            alt="Photo of Sara Rossow"
            quality={100}
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 290px"
            className="mb-0 md:mb-5"
          />
          <div className="text-base md:gap-5 lg:gap-10 hidden md:flex md:flex-col">
            <div className="whitespace-nowrap">
              <p className="font-semibold mb-1 lg:mb-0 lg:font-normal">origin:</p>
              <p className="line-through mr-2">Torun, Poland</p>
            </div>
            <div className="w-full">
              <p className="font-semibold mb-1 lg:mb-0 lg:font-normal text-f-primary/80">
                based in:
              </p>
              <p className="line-through mr-2">Gdansk, Poland</p>
              <p className="line-through mr-2">Gold Coast, Australia</p>
              <p className="text-f-primary/80">Hamburg, Germany</p>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-7/12 mt-10 md:mb-20 text-pretty">
          <h1 className="text-[26px] leading-normal mb-20">
            Over 4 years of diverse practice in design, B2B enterprise systems, B2C websites and
            design systems.
          </h1>

          <div className="flex flex-col lg:flex-row lg:justify-between mb-10">
            <p className="font-semibold mb-1 lg:mb-0 lg:font-normal">connect</p>
            <div className="flex w-[400px]">
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

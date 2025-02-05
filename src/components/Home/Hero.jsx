import Image from "next/image";
import { useRef } from "react";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add clip path to invert text color
[] add scroll down encouragement
[] experiment with the tilting tile animation
[] add animations
 
*/

const heroImage = "/images/hero-image_lg.png";

const Hero = () => {
  const leftListRef = useRef(null);
  const rightListRef = useRef(null);
  const littleMarqueeRef = useRef(null);

  return (
    <section className="pt-[6.5rem] overflow-hidden md:pt-24 lg:pt-32 h-svh">
      <div className="flex flex-col gap-8 h-full relative container pb-8">
        <div className="z-10 static flex gap-2 font-serif lg:absolute md:ml-auto lg:right-8 lg:top-2 md:w-1/2 lg:w-1/3">
          <p className="leading-6 text-accent">[</p>
          {/* text mask */}
          <div
            ref={littleMarqueeRef}
            className="overflow-hidden w-full flex"
          >
            <p className="leading-6 w-fit whitespace-nowrap opacity-70">
              UX Research, Strategy, Product Design, Prototyping, Development,
              Interaction,
            </p>
            <p className="leading-6 w-fit whitespace-nowrap opacity-70">
              UX Research, Strategy, Product Design, Prototyping, Development,
              Interaction,
            </p>
          </div>
          <p className="leading-6 text-accent">]</p>
        </div>
        <div className="h-full relative ">
          <h1 className="uppercase font-serif max-[400px]:text-[3rem]">
            {/* hero text left */}
            <span className="z-10 absolute left-0 w-full">
              {/* text mask */}
              <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem] flex flex-col">
                <ul
                  className="slide-up drop-shadow-md"
                  ref={leftListRef}
                >
                  <li>Creative</li>
                  <li>Product</li>
                  <li>UX/UI</li>
                  <li>Interaction</li>
                </ul>
              </div>
              <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem]">
                <span className="block slide-up drop-shadow-md">Designer</span>
              </div>
            </span>
            {/* hero text right */}
            <span className="z-10 absolute right-0 bottom-0 text-right w-full">
              {/* text mask */}
              <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem] flex flex-col">
                <ul
                  className="slide-up drop-shadow-md "
                  ref={rightListRef}
                >
                  <li>Frontend</li>
                  <li>React</li>
                  <li>Webflow</li>
                </ul>
              </div>
              <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem]">
                <span className="block slide-up drop-shadow-md">Developer</span>
              </div>
            </span>
          </h1>
          {/* middle image */}
          <div className="absolute px-8 lg:px-0 inset-0 flex justify-center items-center opacity-60 md:opacity-100">
            <Image
              src={heroImage}
              width={400}
              height={400}
              title="AI generated avatar of the author"
              alt="Colorful AI generated graphic showing the author's face"
              className="z-0 rounded-3xl md:w-[400px]"
            ></Image>
          </div>
        </div>
        {/* welcome note */}
        <div className="z-10 static font-sans lg:absolute lg:left-8 lg:bottom-10 md:w-1/2 lg:w-1/3">
          <p className="text-f-dark/70">
            Hello, I'm Sara - a Digital Designer & Developer creating delightful
            digital experiences with a knack for design and code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

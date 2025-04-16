import Image from "next/image";
import { useRef } from "react";
import { setupHeroAnimations } from "./animations";
import { useGSAP } from "@gsap/react";
import LittleMarquee from "./LittleMarquee";
import ScrollIndicator from "./ScrollIndicator";

const heroImage = "/images/hero-image_lg.png";

const Hero = () => {
  const leftListRef = useRef(null);
  const rightListRef = useRef(null);

  useGSAP(() => {
    setupHeroAnimations(leftListRef, rightListRef);
  }, []);

  return (
    <section className="pb-2 md:pb-12 overflow-hidden relative">
      {/* Top padding for menu */}
      <div className="h-20 md:h-24"></div>

      <div className="flex flex-col gap-8 h-full relative container pt-4 pb-24">
        <LittleMarquee />
        <div className="h-full relative mt-8 lg:mt-16 pt-16 pb-16 lg:pt-32 lg:pb-32">
          <h1 className="tracking-tight uppercase font-serif max-[400px]:text-[3rem] font-bold text-f-inverse text-[4rem] leading-none md:text-[6rem] mix-blend-difference">
            {/* hero text left */}
            <span className="z-10 absolute left-0 w-full top-0">
              {/* text mask */}
              <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem] flex flex-col">
                <ul
                  className="slide-up drop-shadow-md"
                  ref={leftListRef}
                >
                  <li>Digital</li>
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
                  className="slide-up"
                  ref={rightListRef}
                >
                  <li>Creative</li>
                  <li>Frontend</li>
                  <li>React</li>
                  <li>Low-Code</li>
                </ul>
              </div>
              <div className="overflow-hidden max-[400px]:h-[3rem] h-[4rem] md:h-[6rem]">
                <span className="block slide-up drop-shadow-md">Developer</span>
              </div>
            </span>
          </h1>
          {/* middle image */}
          <div className=" px-8 lg:px-0 inset-0 flex justify-center items-center">
            <Image
              src={heroImage}
              width={400}
              height={400}
              alt="Colorful AI generated avatar of Sara"
              className="-z-50 rounded-3xl md:w-[400px]"
              quality={100}
            />
          </div>
        </div>
        {/* welcome note */}
        <div className="z-10 static font-sans lg:absolute lg:left-8 lg:bottom-10 max-w-sm">
          <p className="text-f-primary leading-relaxed">
            I work at the intersection of research, design and development, what
            I like to call the sweet spot of UX.
          </p>
        </div>
      </div>
      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;

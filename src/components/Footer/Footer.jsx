import Image from "next/image";
import { ArrowIcon } from "../ArrowIcon";
import Bottom from "./Bottom";
import Link from "next/link";
import { HeadingXL } from "../Text";

// add on hover mouse change to write me an email
// add this cute little animation showing what the icons mean

const Footer = () => {
  const artBanner = "/images/banner.png";
  return (
    <footer
      className="pt-32 lg:pt-48"
      id="contact"
    >
      {/* contact cta */}
      <div className="container flex flex-col mb-16 lg:mb-32">
        <div className="relative">
          <HeadingXL
            headingText="Let's work together."
            subheadingText="Sparked your curiosity?"
          />
          <ArrowIcon
            className="rotate-[135deg] absolute right-[8%] bottom-0 z-10"
            size="36"
          />
        </div>

        {/* banner */}
        <div className="flex flex-col md:flex-row md:gap-8 items-center relative">
          {/* image */}
          <div
            className="flex-1"
            // href="mailto:sararossow@mail.com?subject=Getting%20in%20touch&body=Hello%20Sara,"
          >
            <Image
              src={artBanner}
              width={556}
              height={184}
              quality={100}
              className="rounded-2xl w-full h-full object-cover"
              alt="Image of a horizon with mountains and colorful clouds"
            />
          </div>

          {/* text */}
          <div className="flex-shrink-0">
            <h2
              className="relative font-bold text-transparent bg-clip-text whitespace-nowrap"
              style={{
                backgroundImage: `url(${artBanner})`,
              }}
            >
              Get in touch
            </h2>
            <p className="text-2xl lg:text-[2.5rem] leading-tight ml-1">
              sararossow@mail.com
            </p>
          </div>
        </div>
      </div>

      <Bottom />
    </footer>
  );
};

export default Footer;

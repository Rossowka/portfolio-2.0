import Image from "next/image";
import { ArrowIcon } from "../ArrowIcon";
import Bottom from "./Bottom";
import Link from "next/link";

// fix padding so the text will be aligned to the bottom
// add this cute little animation showing what the icons mean

const Footer = () => {
  const artBanner = "/images/banner.png";
  return (
    <footer className="pt-32 lg:pt-60 overflow-hidden ">
      {/* contact cta */}
      <div className="container flex flex-col mb-16 lg:mb-32">
        <div className="relative">
          <h2 className="page-title mb-10">Let's work together.</h2>
          <ArrowIcon
            className="rotate-[135deg] absolute right-[8%] bottom-0 z-10"
            size="36"
          />
        </div>

        {/* banner */}
        <Link
          href="/contact"
          className="flex flex-col md:flex-row md:gap-8 items-center relative"
        >
          {/* image */}
          <div className="flex-1">
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
          </div>
        </Link>
      </div>

      <Bottom />
    </footer>
  );
};

export default Footer;

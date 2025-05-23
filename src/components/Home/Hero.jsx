import LittleMarquee from "./LittleMarquee";
import ScrollIndicator from "./ScrollIndicator";
import { HeroImage, HeroText, HeroValueProposition } from ".";

const Hero = () => {
  return (
    <section className="pb-2 md:pb-12 overflow-hidden relative">
      {/* Top padding for menu */}
      <div className="h-20 md:h-24"></div>

      <div className="flex flex-col gap-8 h-full relative container pt-4 pb-24">
        <LittleMarquee />
        <div className="h-full relative mt-8 lg:mt-16 pt-16 pb-16 lg:pt-32 lg:pb-32">
          <HeroText />
          <HeroImage
            src="/images/hero-image.webp"
            alt="Colorful AI generated avatar of Sara"
          />
        </div>
        <HeroValueProposition />
      </div>
      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;

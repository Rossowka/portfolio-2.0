import LittleMarquee from "./LittleMarquee";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroValueProposition from "./HeroValueProposition";

const Hero = () => {
  return (
    <section className="pb-2 md:pb-12 overflow-hidden relative">
      {/* Top padding for menu */}
      <div className="h-20 md:h-24" />

      <div className="flex flex-col gap-8 h-full relative max-w-[77.5rem] mx-auto px-4 lg:px-8 pt-4 pb-24">
        <LittleMarquee />

        <div className="h-full relative mt-8 lg:mt-16 pt-16 pb-16 lg:pt-32 lg:pb-32">
          <HeroImage
            src="/images/hero-image.webp"
            alt="Colorful AI generated avatar of Sara"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <HeroText />
          </div>
        </div>
        <HeroValueProposition />
      </div>
    </section>
  );
};

export default Hero;

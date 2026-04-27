import HeroExperience from "./HeroExperience";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import HeroValueProposition from "./HeroValueProposition";

const Hero = () => {
  return (
    <section className="pb-2 md:pb-12 overflow-hidden relative">
      {/* Top padding for menu */}
      <div className="h-[60px] md:h-24" />

      <div className="flex flex-col sm:flex-row justify-between max-w-7xl mx-auto lg:px-0 sm:pt-10 pb-24 relative">
        <div className="flex flex-col order-2 sm:order-1 w-full sm:w-1/2 lg:w-8/12 md:pr-4 px-6">
          <HeroText />
          <HeroValueProposition />
          <HeroExperience />
        </div>

        <HeroImage
          src="/images/hero-image.webp"
          alt="Close-up portrait of Sara smiling at the camera."
        />
      </div>
    </section>
  );
};

export default Hero;

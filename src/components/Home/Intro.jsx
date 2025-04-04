import { CircularButton } from "../CircularButton";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add text animations
[] add GSAP ScrollToPlugin https://gsap.com/docs/v3/Plugins/ScrollToPlugin/
[] add a little parallax to circular button

*/

const Intro = () => {
  return (
    <section className="pt-16 pb-24 lg:pt-24 lg:pb-72 flex flex-col">
      <header className="container mt-16 mb-8 md:mb-12 lg:mt-36 lg:mb-24">
        <h2 className="page-title md:indent-12 lg:indent-24">
          let's create something stunning together
        </h2>
      </header>
      <div className="container flex flex-col md:flex-row relative gap-8 mt-8">
        <p className="hidden md:inline-block eyebrow md:basis-1/5 lg:basis-1/4">
          [ what I do ]
        </p>
        <p className="sm:mr-48 md:basis-1/2">
          I help brands create great digital products. I tell engaging stories,
          craft beautiful interfaces and shape people’s experiences in elegantly
          simple ways.
        </p>
        <div className="self-end sm:absolute sm:bottom-0 md:bottom-1/2 sm:right-8 lg:right-12">
          <CircularButton
            text={"Explore my work"}
            radius={80}
            iconSrc={"icons/arrow-down-left.svg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;

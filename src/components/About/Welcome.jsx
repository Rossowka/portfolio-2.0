import Image from "next/image";

const avatar = "/images/sara-rossow.png";

const Welcome = () => {
  return (
    <section className="pt-16 pb-24 lg:pt-48 lg:pb-72 flex flex-col">
      <header className="container mt-16 mb-8">
        <div className="sm:hidden mb-4">
          <Image
            src={avatar}
            width={160}
            height={180}
            alt="Photo of Sara Rossow"
            className="w-1/3 max-w-40"
            quality={100}
          />
        </div>
        <h2 className="page-title ">the sweet spot</h2>
        <h2 className="page-title md:indent-12 lg:indent-28">
          of product design
        </h2>
      </header>
      <div className="container">
        <div className=" bg-f-primary/20 h-[1px]"></div>
      </div>
      <div className="container flex flex-col md:flex-row relative gap-8 mt-8 justify-end">
        <p className="sm:mr-48 max-w-md md:max-w-none md:basis-1/2">
          Hey, I am Sara. I am a designer and developer based in{" "}
          <span className="text-f-primary/40 line-through">
            Gdansk, Poland Gold Coast, Australia
          </span>{" "}
          Hamburg, Germany
        </p>
        <div className="self-end absolute hidden sm:block md:bottom-2/3 sm:right-8 lg:right-12">
          <Image
            src={avatar}
            width={160}
            height={180}
            alt="Photo of Sara Rossow"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;

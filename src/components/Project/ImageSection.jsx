import Image from "next/image";

const ImageSection = ({ currentProject }) => {
  return (
    <div className="container">
      <Image
        src={currentProject.mainShot.src}
        alt={currentProject.mainShot.alt}
        className={`object-cover w-full h-full object-center`}
        width={540}
        height={360}
      />
      <div className="flex mt-8 gap-8 overflow-hidden flex-wrap">
        {currentProject.imageShowcase.map((image, index) => (
          <Image
            src={image.src}
            alt={image.alt}
            className={`object-cover object-center md:flex-[0_0_50%] md:max-w-[calc(50%-16px)]`}
            width={540}
            height={360}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSection;

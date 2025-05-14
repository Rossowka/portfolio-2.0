import Image from "next/image";

const CaseStudyImage = ({ src, alt, caption, height }) => {
  return (
    <figure className="mt-8 mb-4">
      <Image
        src={src}
        alt={alt}
        width={672}
        height={height}
        className="w-full h-auto mb-4 rounded-lg"
      />
      {caption && (
        <figcaption className="text-sm text-f-primary/60 ml-[2px]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default CaseStudyImage;

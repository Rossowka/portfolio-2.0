import Image from "next/image";
import Link from "next/link";

const CircularButton = ({ text, radius, iconSrc }) => {
  const diameter = radius * 2;
  const textHeight = 14;
  const letterSpacing = 0.25;
  const textPathRadius = radius - textHeight / 2;
  const separator = "-";

  // Format text with separators
  const formatCircularText = (text) => {
    const spacedSeparator = ` ${separator} `;
    return `${text}${spacedSeparator}${text}${spacedSeparator}`;
  };

  const formattedText = formatCircularText(text);

  // Calculate spacing adjustment at the end
  const calculateSpacingAdjustment = () => {
    const baseCharacterWidth = textHeight * 0.6; // Approximate width of a character
    const letterSpacingWidth = textHeight * letterSpacing; // Convert em to pixels

    // Calculate total space characters that should appear at the end
    const totalSpaceAdjustment = baseCharacterWidth + letterSpacingWidth;

    return totalSpaceAdjustment;
  };

  // Calculate the circumference and adjust for text distribution
  const circumference = 2 * Math.PI * textPathRadius;
  const spacingAdjustment = calculateSpacingAdjustment();
  const adjustedTextLength = circumference - spacingAdjustment;

  return (
    <Link
      href="#featured"
      className="relative block group hover:scale-105 transition-transform duration-300 overflow-hidden"
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
      }}
    >
      <svg
        className="absolute top-0 left-0 animate-spin-slow"
        viewBox={`0 0 ${diameter} ${diameter}`}
        width={`${diameter}px`}
        height={`${diameter}px`}
      >
        <defs>
          <path
            id="textPath"
            fill="none"
            stroke="none"
            d={`
                M ${radius},${radius} 
                m -${textPathRadius},0 
                a ${textPathRadius},${textPathRadius} 0 1,1 ${
              textPathRadius * 2
            },0 
                a ${textPathRadius},${textPathRadius} 0 1,1 -${
              textPathRadius * 2
            },0
                `}
          />
        </defs>
        <text
          className="fill-f-dark/70 group-hover:fill-f-dark uppercase"
          style={{
            fontSize: `${textHeight}px`,
            letterSpacing: `${letterSpacing}em`,
          }}
        >
          <textPath
            href="#textPath"
            startOffset="0%"
            dominantBaseline="hanging"
            textLength={adjustedTextLength}
            lengthAdjust="spacingAndGlyphs"
          >
            {formattedText}
          </textPath>
        </text>
      </svg>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        rounded-full flex items-center justify-center
        group-hover:bg-accent/40 transition-colors duration-300"
        style={{
          width: `${radius}px`,
          height: `${radius}px`,
        }}
      >
        <Image
          src={iconSrc}
          className="group-hover:-rotate-45 transform transition-all duration-300 ease-in-out"
          width={36}
          height={36}
          alt="Arrow pointing down and left"
        />
      </div>
    </Link>
  );
};

export default CircularButton;

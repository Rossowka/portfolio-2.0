"use client";

import { useGsapScrollTo } from "@/utils/useGsapScrollTo";
import Link from "next/link";
import { ArrowIcon } from "../Icons";

const CircularButton = ({ text, radius, iconSrc }) => {
  const scrollTo = useGsapScrollTo();
  const diameter = radius * 2;
  const textHeight = 16;
  const letterSpacing = 0.28;
  const textPathRadius = radius - textHeight / 2;
  const separator = "-";

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    scrollTo("featured");
  };

  const formatCircularText = (text) => {
    const spacedSeparator = ` ${separator} `;
    return `${text}${spacedSeparator}${text}${spacedSeparator}`;
  };

  const formattedText = formatCircularText(text);

  const calculateSpacingAdjustment = () => {
    const baseCharacterWidth = textHeight * 0.6;
    const letterSpacingWidth = textHeight * letterSpacing;
    const totalSpaceAdjustment = baseCharacterWidth + letterSpacingWidth;
    return totalSpaceAdjustment;
  };

  const circumference = 2 * Math.PI * textPathRadius;
  const spacingAdjustment = calculateSpacingAdjustment();
  const adjustedTextLength = circumference - spacingAdjustment;

  return (
    <Link
      href="#featured"
      aria-label={`${text} — scroll to featured section`}
      className="relative block group hover:scale-105 transition-transform duration-[450ms] overflow-hidden
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
        focus-visible:outline-reddishBrown motion-reduce:hover:scale-100 motion-reduce:transition-none"
      style={{
        width: `${diameter}px`,
        height: `${diameter}px`,
        transitionTimingFunction: "cubic-bezier(0.65,0,0,1)",
      }}
      onClick={handleSmoothScroll}
    >
      {/* Hidden label for screen readers — the circular SVG text is purely decorative */}
      <span className="sr-only">{text} — scroll to featured section</span>

      <svg
        aria-hidden="true"
        focusable="false"
        className="absolute top-0 left-0 animate-spin-slow motion-reduce:animate-none"
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
              a ${textPathRadius},${textPathRadius} 0 1,1 ${textPathRadius * 2},0 
              a ${textPathRadius},${textPathRadius} 0 1,1 -${textPathRadius * 2},0
            `}
          />
        </defs>
        <text
          className="fill-f-inverse uppercase"
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
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          rounded-full flex items-center justify-center
          bg-paleOak transition-colors duration-200 p-5"
        style={{
          width: `${radius}px`,
          height: `${radius}px`,
        }}
      >
        <ArrowIcon className="group-hover:rotate-180 transform transition-all duration-[450ms] motion-reduce:transition-none motion-reduce:group-hover:rotate-0" />
      </div>
    </Link>
  );
};

export default CircularButton;

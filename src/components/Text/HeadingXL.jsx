const HeadingXL = ({ headingText, subheadingText, className }) => {
  return (
    <div className="flex flex-col mb-4 md:mb-8 lg:mb-16">
      {subheadingText && (
        <p className="whitespace-nowrap uppercase text-xs font-semibold text-accent mb-3 ml-1">
          {subheadingText}
        </p>
      )}
      <h2
        className={`font-semibold text-[3rem] md:text-[4rem] lg:text-[5rem] tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </h2>
    </div>
  );
};

export default HeadingXL;

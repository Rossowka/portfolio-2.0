const HeadingXL = ({ headingText, subheadingText, className }) => {
  return (
    <div className="flex flex-col pb-4 md:pb-8 lg:pb-12">
      {subheadingText && (
        <p className="whitespace-nowrap text-base font-semibold text-accent mb-1 ml-1">
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

const HeadingL = ({ headingText, subheadingText, className }) => {
  return (
    <div className="mb-12">
      {subheadingText && (
        <p className="whitespace-nowrap text-xs uppercase font-semibold text-accent mb-4 ml-1">
          {subheadingText}
        </p>
      )}
      <h3
        className={`font-semibold md:font-bold text-5xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </h3>
    </div>
  );
};

export default HeadingL;

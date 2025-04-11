const HeadingL = ({ headingText, subheadingText, className }) => {
  return (
    <div className="pt-12 pb-6">
      {subheadingText && (
        <p className="whitespace-nowrap text-sm uppercase font-semibold text-accent mb-3 ml-1">
          {subheadingText}
        </p>
      )}
      <h3
        className={`font-semibold text-5xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </h3>
    </div>
  );
};

export default HeadingL;

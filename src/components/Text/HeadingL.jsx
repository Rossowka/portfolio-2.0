const HeadingL = ({ headingText, className }) => {
  return (
    <div className="pt-10 pb-5 md:pt-12 md:pb-6">
      <h3
        className={`font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </h3>
    </div>
  );
};

export default HeadingL;

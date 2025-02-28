const HeadingM = ({ headingText, className }) => {
  return (
    <div className="pt-8 pb-4 md:pt-10 md:pb-5">
      <p
        className={`font-semibold text-2xl md:text-3xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </p>
    </div>
  );
};

export default HeadingM;

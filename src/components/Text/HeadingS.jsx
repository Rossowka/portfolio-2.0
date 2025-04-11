const HeadingS = ({ headingText, className }) => {
  return (
    <div className="pt-8 pb-4">
      <p
        className={`font-semibold text-2xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </p>
    </div>
  );
};

export default HeadingS;

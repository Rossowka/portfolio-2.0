const HeadingS = ({ headingText, className }) => {
  return (
    <div className="mt-8 mb-4">
      <p
        className={`font-semibold text-2xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </p>
    </div>
  );
};

export default HeadingS;

const HeadingM = ({ headingText, className }) => {
  return (
    <div className="mt-16 mb-8">
      <p
        className={`font-bold text-3xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </p>
    </div>
  );
};

export default HeadingM;

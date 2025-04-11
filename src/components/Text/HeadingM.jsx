const HeadingM = ({ headingText, className }) => {
  return (
    <div className="pt-10 pb-5">
      <p
        className={`font-semibold text-3xl tracking-tight leading-tight ${className}`}
      >
        {headingText}
      </p>
    </div>
  );
};

export default HeadingM;

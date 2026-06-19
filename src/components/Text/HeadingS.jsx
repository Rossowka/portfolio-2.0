const marginVariants = {
  "1col": "mt-5 mb-10",
  "2col": "",
  "3col": "",
};
const HeadingS = ({ headingText, className, noBreak = false, variant }) => {
  // don't add any breaks if noBreak is true
  if (noBreak) {
    return (
      <div className={marginVariants[variant]}>
        <p className={`font-semibold text-[26px] tracking-tight leading-tight ${className}`}>
          {headingText}
        </p>
      </div>
    );
  }

  // check if text needs a break
  const words = headingText.split(" ");
  const isShortHeading = words.length <= 5; // Consider text with 4 or fewer words as "short"

  let content;
  if (isShortHeading && words.length === 2) {
    // break after the first word
    const firstLine = words[0];
    const secondLine = words.slice(1).join(" ");
    content = (
      <>
        {firstLine} <br /> {secondLine}
      </>
    );
  } else if (isShortHeading && words.length <= 5) {
    // break in the middle
    const firstLine = words.slice(0, 2).join(" ");
    const secondLine = words.slice(2).join(" ");
    content = (
      <>
        {firstLine} <br /> {secondLine}
      </>
    );
  } else {
    // for longer titles there is no need for break
    content = headingText;
  }

  return (
    <div className={marginVariants[variant]}>
      <p
        className={`font-semibold text-[26px] tracking-tight leading-tight text-balance ${className}`}
      >
        {content}
      </p>
    </div>
  );
};

export default HeadingS;

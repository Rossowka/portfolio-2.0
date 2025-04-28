const HeadingS = ({ headingText, className, noBreak = false }) => {
  // don't add any breaks if noBreak is true
  if (noBreak) {
    return (
      <div className="mt-8 mb-4">
        <p
          className={`font-semibold text-2xl tracking-tight leading-tight ${className}`}
        >
          {headingText}
        </p>
      </div>
    );
  }

  // check if text needs a break
  const words = headingText.split(" ");
  const isShortHeading = words.length <= 4; // Consider text with 4 or fewer words as "short"

  let content;
  if (isShortHeading && words.length < 4) {
    // break after the first word
    const firstLine = words[0];
    const secondLine = words.slice(1).join(" ");
    content = (
      <>
        {firstLine} <br /> {secondLine}
      </>
    );
  } else if (isShortHeading && words.length === 4) {
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
    <div className="mt-8 mb-4">
      <p
        className={`font-semibold text-2xl tracking-tight leading-tight ${className}`}
      >
        {content}
      </p>
    </div>
  );
};

export default HeadingS;

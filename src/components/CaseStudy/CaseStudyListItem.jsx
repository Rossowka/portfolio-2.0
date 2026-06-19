import { HeadingS } from "../Text";

const itemVariants = {
  "1col": "w-full grid grid-cols-[400px_1fr] gap-10",
  "2col": "sm:flex-[0_0_50%] sm:max-w-[50%] md:border-none px-5 mt-10",
  "3col":
    "sm:flex-[0_0_50%] sm:max-w-[50%] md:flex-[0_0_33.333%] md:max-w-[33.333%] md:border-none px-5 mt-10",
};

const CaseStudyListItem = ({
  title = "placeholder title",
  noBreak,
  variant = "2col",
  children,
}) => {
  return (
    <li className={`invisible border-t border-f-primary/10 ${itemVariants[variant]}`}>
      <HeadingS
        headingText={title}
        noBreak={noBreak}
        variant={variant}
      />
      <p className="mt-5 mb-10 text-base leading-relaxed text-f-primary/80 text-pretty">
        {children}
      </p>
    </li>
  );
};

export default CaseStudyListItem;

import Link from "next/link";
import { ArrowIcon } from "../Icons";

const NakedButton = ({ project, variant = "alt" }) => {
  const isAlt = variant === "alt";

  return (
    <Link
      href={project.url}
      aria-label={"Link to case study"}
      className="flex items-center gap-3 text-sandyBrown -ml-8 group w-full justify-center md:justify-end focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm focus-visible:outline-reddishBrown"
    >
      <p
        className={`whitespace-nowrap text-lg leading-relaxed font-medium text-inherit relative overflow-visible ${isAlt ? "underline-link-alt" : "underline-link-default"}`}
      >
        <span className="truncate">{project.cta || "Explore the impact"}</span>
      </p>

      <span
        className={`relative w-6 h-6 rounded-sm transition-colors duration-200 text-white overflow-hidden shrink-0 bg-reddishBrown group-hover:bg-reddishBrown/90`}
        aria-hidden="true"
      >
        <span
          className={`absolute inset-0 flex items-center justify-center p-1 translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:-translate-y-full transition-transform duration-[450ms] `}
          style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
        >
          <ArrowIcon />
        </span>

        <span
          className={`absolute inset-0 flex items-center justify-center p-1 -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-[450ms] `}
          style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
        >
          <ArrowIcon />
        </span>
      </span>
    </Link>
  );
};

export default NakedButton;

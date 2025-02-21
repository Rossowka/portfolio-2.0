import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add that cool button animation on hover/click

*/

const Button = ({ label = "button", href = "#", sup, primary, dark }) => {
  return (
    <div
      className={`rounded-3xl w-full md:w-fit border-[1px] ${
        dark
          ? "bg-accent md:bg-transparent overflow-hidden border-f-inverse/20 hover:border-f-inverse"
          : primary
          ? "bg-accent text-f-inverse hover:border-f-inverse/40"
          : "text-inherit border-f-primary/20 hover:border-f-primary/60 "
      } transform transition-all duration-700 ease-in-out`}
    >
      <Link
        href={href}
        className="flex group gap-1 px-8 py-4 lg:py-8 lg:px-16 justify-center"
      >
        {/* icon */}
        <div className="min-w-fit">
          <ArrowIcon
            className={` transform transition-all duration-300 ease-in-out  ${
              dark ? "lg:text-accent -rotate-45 lg:rotate-0" : "text-inherit"
            } ${
              primary
                ? "-rotate-45 md:group-hover:rotate-0"
                : "rotate-0 md:group-hover:-rotate-45"
            }`}
          />
        </div>

        {/* text */}
        <p className={`${dark ? "text-f-inverse" : "inherit"}`}>
          {label}
          {/*  superscript */}
          {sup && (
            <sup
              className={`text-xs pl-1 ${
                dark ? "md:text-accent" : "text-inherit"
              }`}
            >
              {sup}
            </sup>
          )}
        </p>
      </Link>
    </div>
  );
};

export default Button;

import { projects } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../ArrowIcon";

// -----------------------------------------------------------------------------------
// THINGS TO TAKE CARE OF
// -----------------------------------------------------------------------------------
/*

[] add that cool button animation on hover/click

*/

const Button = ({ label = "button", sup }) => {
  return (
    <div className="rounded-3xl bg-accent md:bg-transparent border-[1px] overflow-hidden w-full md:w-fit border-f-inverse/20 hover:border-f-inverse transform transition-all duration-700 ease-in-out">
      {/* <div className="rounded-3xl border-[1px] w-fit overflow-hidden border-f-inverse/20 hover:border-f-inverse transform transition-all duration-700 ease-in-out"> */}
      <Link
        href="/projects"
        className="flex group gap-1 px-8 py-4 lg:py-8 lg:px-16 justify-center"
      >
        {/* icon */}
        <div className="min-w-fit">
          <ArrowIcon className="-rotate-45 lg:rotate-0 md:group-hover:-rotate-45 transform transition-all duration-300 ease-in-out lg:text-accent" />
        </div>

        {/* text */}
        <p>
          {label}
          {/*  superscript */}
          {sup && <sup className="text-xs pl-1 md:text-accent">{sup}</sup>}
        </p>
      </Link>
    </div>
  );
};

export default Button;

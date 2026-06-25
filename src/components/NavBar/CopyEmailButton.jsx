"use client";

import { EMAIL } from "@/utils/about";
import { useState, useCallback } from "react";
import { ArrowIcon, CheckIcon } from "../Icons";

const CopyEmailButton = () => {
  const [state, setState] = useState("idle"); // "idle" | "hover" | "copied"

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setState("copied");
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setState("idle");
  }, []);

  const handleBlur = useCallback(() => {
    setState("idle");
  }, []);

  const textTranslate =
    state === "copied"
      ? "-translate-y-2/3"
      : state === "hover"
        ? "-translate-y-1/3"
        : "translate-y-0";

  const iconBg =
    state === "copied"
      ? "bg-sandyBrown"
      : state === "hover"
        ? "bg-reddishBrown/90"
        : "bg-reddishBrown";

  const primaryIconTranslate =
    state === "idle" ? "translate-x-0 translate-y-0" : "translate-x-full -translate-y-full";

  const secondaryIconTranslate =
    state === "hover"
      ? "translate-x-0 translate-y-0"
      : state === "copied"
        ? "translate-x-full -translate-y-full"
        : "-translate-x-full translate-y-full";

  const checkIconTranslate =
    state === "copied" ? "translate-x-0 translate-y-0" : "-translate-x-full translate-y-full";

  return (
    <div className="flex flex-col items-center gap-2 max-w-[400px]">
      <button
        type="button"
        aria-label={state === "copied" ? "Email copied to clipboard!" : "Copy email to clipboard"}
        onClick={handleCopy}
        onMouseEnter={() => setState("hover")}
        onMouseLeave={handleMouseLeave}
        onFocus={() => setState("hover")}
        onBlur={handleBlur}
        className="group flex items-center gap-3 bg-white rounded-md px-4 py-3 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {/* Text stack */}
        <span className="overflow-hidden h-[1.5em] text-[26px] leading-loose font-medium flex flex-col items-center">
          <span
            className={`flex flex-col items-center whitespace-nowrap transition-transform duration-[450ms] ${textTranslate}`}
            style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
          >
            <span className="h-[1.5em] flex items-center">{EMAIL}</span>
            <span className="h-[1.5em] flex items-center">Click to copy email</span>
            <span className="h-[1.5em] flex items-center">Copied to clipboard!</span>
          </span>
        </span>

        <span
          className={`relative w-10 h-10 rounded-sm transition-colors duration-200 text-white overflow-hidden shrink-0 ${iconBg}`}
          aria-hidden="true"
        >
          <span
            className={`absolute inset-0 flex items-center justify-center p-2 ${primaryIconTranslate} transition-transform duration-[450ms] `}
            style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
          >
            <ArrowIcon />
          </span>

          <span
            className={`absolute inset-0 flex items-center justify-center p-2 ${secondaryIconTranslate} transition-transform duration-[450ms] `}
            style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
          >
            <ArrowIcon />
          </span>

          <span
            className={`absolute inset-0 flex items-center justify-center p-2 ${checkIconTranslate} transition-transform duration-[450ms] `}
            style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
          >
            <CheckIcon />
          </span>
        </span>
      </button>
    </div>
  );
};

export default CopyEmailButton;

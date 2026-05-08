import { EMAIL } from "@/utils/about";
import { useState, useCallback, useRef } from "react";

export default function NavBarEmail({ tooltipPosition = "bottom", className }) {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(false);
  const timerRef = useRef(null);

  const handleCopy = useCallback(async () => {
    setActive(true);
    setTimeout(() => setActive(false), 150);

    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement("textarea");
      el.value = EMAIL;
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }

    setCopied(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopied(false), 2000);
  }, []);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleCopy();
      }
    },
    [handleCopy]
  );

  const isAbove = tooltipPosition === "top";

  return (
    <button
      type="button"
      onClick={handleCopy}
      onKeyDown={handleKeyDown}
      aria-label={`Copy email address ${EMAIL}`}
      className={`
    relative
    bg-transparent border-none p-0
    font-[inherit] text-[inherit] leading-[inherit]
    cursor-pointer select-none
    text-f-tetriary hover:text-current
    underline underline-offset-[6px] lg:decoration-[transparent] hover:decoration-current
    transition-colors duration-200
    ${active ? "opacity-55" : "opacity-100"}
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown
    ${className ?? ""}
  `}
    >
      {EMAIL}

      {/* Tooltip */}
      <span
        role="tooltip"
        aria-live="polite"
        className={`
          absolute left-1/2 -translate-x-1/2
          pointer-events-none
          inline-flex items-center gap-1.5
          whitespace-nowrap
          text-[10px] font-medium tracking-[0.01em] text-f-inverse
          bg-s-inverse rounded-md px-2.5 py-1
          ${isAbove ? "bottom-[calc(100%+10px)]" : "top-[calc(100%+10px)]"}
          transition-all duration-[180ms] ease-out
          ${
            copied
              ? "opacity-100 translate-y-0"
              : isAbove
                ? "opacity-0 translate-y-1"
                : "opacity-0 -translate-y-1"
          }
        `}
      >
        {/* Arrow — rotated square */}
        <span
          aria-hidden="true"
          className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-s-inverse rotate-45
              ${isAbove ? "top-full -translate-y-1/2" : "bottom-full translate-y-1/2"}
          `}
        />
        Email was copied to clipboard.
      </span>
    </button>
  );
}

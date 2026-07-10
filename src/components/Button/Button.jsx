import Link from "next/link";
import { ArrowIcon } from "../Icons";
import { style } from "framer-motion/client";

const ButtonIcon = ({ href, label, sup, className, variant = "dark" }) => {
  const VARIANTS = {
    default: {
      container: "text-inherit border-accent",
      ripple: "bg-accent",
      text: "text-inherit",
    },
    primary: {
      container: "bg-accent border-reddishBrown text-white",
      ripple: "bg-reddishBrown",
      text: "text-white",
    },
    dark: {
      container: "bg-sandyBrown",
      ripple: "bg-paleOak",
      text: "text-f-primary",
      icon: "bg-jetBlack text-sandyBrown",
      sup: "text-reddishBrown",
    },
  };

  const styles = VARIANTS[variant];

  return (
    <Link
      href={href}
      className={`group flex items-center no-underline ${className}`}
    >
      {/* Content */}
      <span
        className={`relative flex items-center gap-5 overflow-hidden rounded-md p-8 ${styles.container}`}
      >
        <span className="relative z-10 flex items-center overflow-hidden">
          <span
            className={`text-[26px] leading-tight transition-transform duration-[450ms] group-hover:-translate-y-[1.5em] ${styles.text}`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.65,0,0,1)",
              textShadow: "0px 1.5em ",
            }}
          >
            {label}
            {sup && <sup className={`pl-1 mt-auto ${styles.sup}`}>{sup}</sup>}
          </span>
        </span>

        <span
          className={`pointer-events-none absolute bottom-0 left-[-10%] z-0 h-full w-[120%] -translate-y-0 rotate-0  transition-transform duration-[450ms] [transform:translate(0,175%)_rotate(15deg)] group-hover:[transform:translate(0,0%)_rotate(0deg)] ${styles.ripple}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
          aria-hidden="true"
        />
        {/* Icon */}
        <span
          className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <span
            className={`absolute h-full w-full rounded-sm transition-transform duration-[450ms] group-hover:rotate-90`}
            style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
          />
          <span className={`relative flex h-full w-full items-center justify-end overflow-hidden `}>
            <span className="flex h-full shrink-0 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-full w-8 shrink-0 transition-transform duration-[450ms] group-hover:translate-x-[200%]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.65,0,0,1)" }}
                >
                  <ArrowIcon className={`p-1 ${styles.icon}`} />
                </span>
              ))}
            </span>
          </span>
        </span>
      </span>
    </Link>
  );
};

export default ButtonIcon;

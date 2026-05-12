"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "../ArrowIcon";

gsap.registerPlugin(useGSAP);

const VARIANTS = {
  default: {
    container: "text-inherit border-accent/20",
    ripple: "bg-accent",
    text: "text-inherit",
  },
  primary: {
    container: "bg-accent border-reddishBrown text-white",
    ripple: "bg-reddishBrown",
    text: "text-white",
  },
  dark: {
    container: "bg-reddishBrown md:bg-transparent border-f-inverse/20",
    ripple: "bg-sandyBrown",
    text: "text-f-inverse",
  },
};

const Button = ({ label = "button", href = "#", sup, variant = "default", noIcon = false }) => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const rippleRef = useRef(null);
  const textRef = useRef(null);

  const styles = VARIANTS[variant];

  useGSAP(
    () => {
      const container = containerRef.current;
      const ripple = rippleRef.current;
      const text = textRef.current;

      gsap.set(ripple, {
        scale: 0,
        opacity: 0,
        borderRadius: "50%",
        transformOrigin: "center center",
      });

      const mm = gsap.matchMedia();

      mm.add("(hover: hover) and (pointer: fine)", () => {
        const handleMouseEnter = (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const maxDist = Math.max(
            Math.hypot(x, y),
            Math.hypot(rect.width - x, y),
            Math.hypot(x, rect.height - y),
            Math.hypot(rect.width - x, rect.height - y)
          );
          const size = maxDist * 2;

          gsap.killTweensOf(ripple);
          gsap.set(ripple, {
            opacity: 1,
            scale: 0,
            width: size,
            height: size,
            x: x - size / 2,
            y: y - size / 2,
            borderRadius: "50%",
            transformOrigin: "center center",
          });
          gsap.to(ripple, { scale: 1, duration: 0.5, ease: "power3.out" });

          if (variant === "dark") {
            gsap.killTweensOf(text, "color");
            gsap.to(text, { color: "#1a1a1a", duration: 0.15, delay: 0.15 });
          }
        };

        const handleMouseLeave = (e) => {
          const rect = container.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.killTweensOf(ripple);
          gsap.set(ripple, { transformOrigin: `${x}px ${y}px` });
          gsap.to(ripple, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "power4.in",
            onComplete: () =>
              gsap.set(ripple, { transformOrigin: "center center", scale: 0, opacity: 0 }),
          });

          if (variant === "dark") {
            gsap.killTweensOf(text, "color");
            gsap.to(text, { clearProps: "color", duration: 0.2 });
          }
        };

        const handleMouseDown = () =>
          gsap.to(container, { scale: 0.96, duration: 0.1, ease: "power2.out" });

        const handleMouseUp = () =>
          gsap.to(container, { scale: 1, duration: 0.35, ease: "back.out(2.5)" });

        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);
        container.addEventListener("mousedown", handleMouseDown);
        container.addEventListener("mouseup", handleMouseUp);

        return () => {
          container.removeEventListener("mouseenter", handleMouseEnter);
          container.removeEventListener("mouseleave", handleMouseLeave);
          container.removeEventListener("mousedown", handleMouseDown);
          container.removeEventListener("mouseup", handleMouseUp);
        };
      });

      return () => mm.revert();
    },
    { scope: wrapperRef }
  );

  return (
    <div
      ref={wrapperRef}
      className="relative w-full md:w-fit focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:rounded-sm
     focus-visible:outline-reddishBrown"
    >
      <div
        ref={containerRef}
        className={`relative w-full md:w-fit border cursor-pointer [will-change:transform] ${styles.container}`}
      >
        <span
          className="absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none"
          aria-hidden="true"
        >
          <span
            ref={rippleRef}
            className={`pointer-events-none absolute top-0 left-0 [will-change:transform] ${styles.ripple}`}
          />
        </span>
        <Link
          href={href}
          className="relative z-10 flex gap-1 px-8 py-4 lg:py-8 lg:px-16 justify-center group"
        >
          <div
            ref={textRef}
            className={`flex gap-1 items-center [will-change:transform] ${styles.text}`}
          >
            {!noIcon && (
              <div className="min-w-fit content-center">
                <ArrowIcon
                  className={`transform transition-all duration-300 ease-in-out ${
                    variant === "dark"
                      ? "lg:text-sandyBrown group-hover:text-f-primary"
                      : "text-inherit"
                  } ${
                    variant === "primary"
                      ? "-rotate-45 md:group-hover:rotate-0"
                      : "rotate-0 md:group-hover:-rotate-45"
                  }`}
                />
              </div>
            )}
            <p className="whitespace-nowrap text-lg leading-relaxed font-medium">
              {label}
              {sup && (
                <sup
                  className={`text-xs pl-1 ${variant === "dark" ? "text-sandyBrown group-hover:text-f-primary" : ""}`}
                >
                  {sup}
                </sup>
              )}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Button;

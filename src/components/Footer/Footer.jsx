"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { ArrowIcon } from "../ArrowIcon";
import Bottom from "./Bottom";
import NavBarEmail from "../NavBar/NavBarEmail";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Footer = () => {
  const footerRef = useRef(null);

  useGSAP(
    () => {
      const heading = footerRef.current.querySelector(".footer-heading");
      const emailRow = footerRef.current.querySelector(".footer-email-row");
      const banner = footerRef.current.querySelector(".footer-banner");
      const getInTouch = footerRef.current.querySelector(".footer-get-in-touch");

      if (!heading || !emailRow || !banner || !getInTouch) return;

      const headingSplit = SplitText.create(heading, {
        type: "words,chars",
        wordsClass: "inline-block",
      });

      gsap.set(heading, { autoAlpha: 1 });
      gsap.set(headingSplit.chars, { y: 20, autoAlpha: 0 });
      gsap.set([emailRow, banner, getInTouch], { y: 12, autoAlpha: 0 });

      // --- Entrance ---
      const entrance = gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      entrance
        .to(headingSplit.chars, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.03,
          ease: "power2.out",
        })
        .to(emailRow, { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }, "-=0.6")
        .to(banner, { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }, "-=0.7")
        .to(getInTouch, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }, "-=0.7")
        .then(() => startIdleWave(headingSplit.chars));

      // --- Idle wave: simulates mouse dragging left→right then right→left ---
      const startIdleWave = (chars) => {
        // Fires the exact same per-char animation as a real hover
        const triggerChar = (char) => {
          gsap.to(char, {
            y: -8,
            rotationZ: gsap.utils.random(-6, 6),
            duration: 0.25,
            ease: "back.out(2)",
            overwrite: "auto",
          });
          gsap.to(char, {
            y: 0,
            rotationZ: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
            delay: 0.2,
          });
        };

        // Sequence through chars with a small gap between each — feels like a cursor passing
        const wave = (order, onComplete) => {
          const tl = gsap.timeline({ onComplete });
          order.forEach((char, i) => {
            tl.call(() => triggerChar(char), null, i * 0.05);
          });
          return tl;
        };

        const ltr = [...chars];
        const rtl = [...chars].reverse();

        // Time for one full wave pass to settle: last char fires at (n * 0.05)s,
        // then needs 0.2 + 0.5s to finish elastic — add a little breathing room
        const passSettleTime = ltr.length * 0.05 + 0.8;

        const runCycle = () => {
          // Left → right
          wave(ltr, () => {
            // After ltr settles, wait then fire rtl
            gsap.delayedCall(passSettleTime, () => {
              wave(rtl, () => {
                // After rtl settles, wait 4s then repeat
                gsap.delayedCall(passSettleTime + 12, runCycle);
              });
            });
          });
        };

        // Small initial delay so it doesn't fire the instant the entrance finishes
        gsap.delayedCall(0.5, runCycle);
      };

      // --- Hover: same animation, coexists with idle wave ---
      headingSplit.chars.forEach((char) => {
        char.addEventListener("mouseenter", () => {
          gsap.to(char, {
            y: -8,
            rotationZ: gsap.utils.random(-6, 6),
            duration: 0.25,
            ease: "back.out(2)",
            overwrite: "auto",
          });
          gsap.to(char, {
            y: 0,
            rotationZ: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.4)",
            delay: 0.2,
            overwrite: false,
          });
        });
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      id="contact"
      aria-label="Contact and footer"
    >
      <div className="px-6 py-24 md:py-20 lg:py-40">
        <div className="max-w-7xl mx-auto flex flex-col gap-5 md:gap-10">
          {/* Heading row */}
          <div className="footer-email-row flex flex-col md:flex-row justify-between items-stretch gap-5">
            <h2 className="footer-heading text-[42px] lg:text-[80px] tracking-tight leading-tight invisible">
              let's work together
            </h2>
            <div className="w-full sm:w-[400px] flex justify-between relative">
              <NavBarEmail
                tooltipPosition="top"
                className="text-[26px] self-end pb-3"
              />
              <ArrowIcon
                className="rotate-[135deg] absolute bottom-1/2 right-0"
                size="42"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Banner + Get in touch */}
          <div className="flex flex-col md:flex-row gap-5 lg:gap-10 items-center relative">
            <div className="footer-banner overflow-hidden rounded-lg">
              <Image
                src="/images/banner.svg"
                width={400}
                height={120}
                alt=""
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 400px"
                aria-hidden="true"
                className="object-cover"
              />
            </div>

            <div className="footer-get-in-touch flex-shrink-0 ">
              <h2
                className="font-bold text-transparent bg-clip-text whitespace-nowrap text-[42px] md:text-[68px] lg:text-[112px] tracking-tight leading-tight"
                style={{ backgroundImage: "url(/images/banner-flipped.svg)" }}
              >
                Get in touch
              </h2>
            </div>
          </div>
        </div>
      </div>

      <Bottom />
    </footer>
  );
};

export default Footer;

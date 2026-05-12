import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { CircularButton } from "../CircularButton";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const Intro = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const heading = sectionRef.current.querySelector(".intro-heading");
      const label = sectionRef.current.querySelector(".intro-label");
      const body = sectionRef.current.querySelector(".intro-body");
      const cta = sectionRef.current.querySelector(".intro-cta");

      if (!heading || !body || !cta) return;

      const mm = gsap.matchMedia();

      // ── DESKTOP ──────────────────────────────────────────────
      mm.add("(min-width: 768px)", () => {
        const split = SplitText.create(heading, {
          type: "words,chars",
          wordsClass: "inline-block",
        });

        gsap.set(heading, { autoAlpha: 1 });
        gsap.set(split.chars, { y: 20, autoAlpha: 0 });
        gsap.set([label, body, cta], { y: 12, autoAlpha: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            once: true,
          },
        });

        tl.to(split.chars, {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          stagger: 0.03,
          ease: "power2.out",
        })
          .to(label, { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }, "-=0.6")
          .to(body, { y: 0, autoAlpha: 1, duration: 1, ease: "power2.out" }, "-=0.7")
          .to(cta, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }, "-=0.7");

        split.chars.forEach((char) => {
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

        // gsap.to(cta, {
        //   y: -80,
        //   ease: "none",
        //   scrollTrigger: {
        //     trigger: sectionRef.current,
        //     start: "top bottom",
        //     end: "bottom top",
        //     scrub: 0.8,
        //   },
        // });
      });

      // ── MOBILE ───────────────────────────────────────────────
      mm.add("(max-width: 767px)", () => {
        const split = SplitText.create(heading, {
          type: "words,chars",
          wordsClass: "inline-block",
        });

        // Body split into lines — mirrors Hero's value proposition
        const bodySplit = SplitText.create(body, { type: "lines" });

        gsap.set(heading, { autoAlpha: 1 });
        gsap.set(split.chars, { y: 20, autoAlpha: 0 });
        gsap.set(body, { y: 12, autoAlpha: 0 });
        gsap.set([label, cta], { y: 12, autoAlpha: 0 });

        // Heading animates on its own trigger
        gsap
          .timeline({
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              once: true,
            },
          })
          .to(split.chars, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: "power2.out",
          });

        // Body block animates separately, further down
        gsap
          .timeline({
            scrollTrigger: {
              trigger: body,
              start: "top 85%",
              once: true,
            },
          })
          .to(label, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" })
          .to(
            body,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "power2.out",
            },
            "-=0.4"
          )
          .to(cta, { y: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" }, "-=0.6");
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:py-36 lg:py-48 flex flex-col bg-linen"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 justify-between">
        <h2 className="intro-heading text-[42px] lg:text-[68px] tracking-tight leading-tight sm:w-1/3 lg:w-5/12">
          let's create something stunning together
        </h2>

        <div className="flex flex-col relative gap-10 mt-5 w-full sm:w-1/2 md:w-7/12">
          <p className="intro-label font-semibold uppercase tracking-widest text-reddishBrown whitespace-nowrap leading-normal text-base">
            what I do
          </p>
          <p className="intro-body text-[26px] leading-relaxed max-w-lg">
            I design digital products: web apps, internal tools, e-commerce platforms and solutions
            for complex B2B environments.
          </p>
          <div className="intro-cta self-end absolute  sm:right-8 -bottom-3/4 lg:right-0 lg:-bottom-1/4 overflow-hidden mix-blend-difference">
            <CircularButton
              text={"Explore my work"}
              radius={85}
              iconSrc={"icons/arrow-down-left.svg"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

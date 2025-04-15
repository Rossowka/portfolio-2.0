// "use client";

// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { navigation } from "@/utils/navigation";
// import { closeMenu, openMenu } from "./animation";
// import Link from "next/link";
// import { Socials } from "../Socials";

// gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

// const SideMenu = ({ handleClick, isMenuOpen, pathname }) => {
//   const menuRef = useRef(null);
//   const containerRef = useRef(null);

//   useGSAP(
//     () => {
//       if (isMenuOpen) {
//         openMenu(containerRef, menuRef);
//       } else {
//         closeMenu(containerRef);
//       }
//     },
//     { dependencies: [isMenuOpen], scope: containerRef }
//   );

//   return (
//     <div
//       ref={containerRef}
//       className={`fixed w-full top-0 bottom-0 z-40 justify-between ${
//         isMenuOpen ? "block" : "hidden"
//       }
//       `}
//     >
//       <nav className="w-full h-full pt-20 md:pt-40 relative">
//         {/* Background panels for menu slide-in animation */}
//         <div
//           ref={menuRef}
//           className="absolute inset-0 z-0"
//         >
//           <div className="absolute inset-0  bg-accent"></div>
//           <div className="absolute inset-0  bg-f-primary"></div>
//           <div className="absolute inset-0  bg-s-secondary"></div>
//         </div>
//         {/* Menu inner content */}
//         <div className="flex flex-col h-full z-10 justify-between text-f-inverse">
//           <ul className="flex flex-col">
//             <li className="overflow-hidden">
//               <Link
//                 href="/"
//                 onClick={handleClick}
//                 className="block w-full pl-8 py-6 md:p-8"
//               >
//                 <p className="relative font-semibold text-6xl md:text-8xl w-fit">
//                   <span>Home</span>
//                   {/* Underline */}
//                   <span
//                     className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
//                       pathname == "/" ? "bg-s-primary" : "hide"
//                     }`}
//                   ></span>
//                 </p>
//               </Link>
//             </li>
//             {navigation.map((item) => (
//               <li
//                 className="overflow-hidden"
//                 key={item.id}
//               >
//                 <Link
//                   href={item.url}
//                   onClick={handleClick}
//                   className="block w-full pl-8 py-6 md:p-8"
//                 >
//                   <p className="relative font-semibold text-6xl md:text-8xl w-fit">
//                     <span>
//                       {item.title}
//                       {item.sup && (
//                         <sup className="pl-3 text-accent">{item.sup}</sup>
//                       )}
//                     </span>
//                     {/* Underline */}
//                     <span
//                       className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
//                         pathname == item.url ? "bg-s-primary" : "hide"
//                       }`}
//                     ></span>
//                   </p>
//                 </Link>
//               </li>
//             ))}
//           </ul>
//           {/* <div className="pl-8 py-20 md:p-8 -mx-3"> */}
//           <div className="landscape:py-2 pl-8 portrait:py-6 md:p-12 -mx-3 md:max-w-full absolute bottom-0 left-0 right-0">
//             <Socials />
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default SideMenu;

"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navigation } from "@/utils/navigation";
import { closeMenu, openMenu } from "./animation";
import Link from "next/link";
import { Socials } from "../Socials";

gsap.registerPlugin(useGSAP);

const SideMenu = ({ handleClick, isMenuOpen, pathname }) => {
  const menuRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [orientation, setOrientation] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Detect orientation changes
  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(
        window.innerHeight > window.innerWidth ? "portrait" : "landscape"
      );
    };

    // Set initial orientation
    updateOrientation();

    // Add event listener
    window.addEventListener("resize", updateOrientation);

    // Clean up
    return () => window.removeEventListener("resize", updateOrientation);
  }, []);

  // Update background height when content changes
  useEffect(() => {
    if (contentRef.current && isMenuOpen) {
      const updateHeight = () => {
        const height = contentRef.current.scrollHeight;
        setContentHeight(height);
      };

      updateHeight();
      // Small delay to ensure all content is rendered
      const timer = setTimeout(updateHeight, 100);

      window.addEventListener("resize", updateHeight);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", updateHeight);
      };
    }
  }, [isMenuOpen, orientation]);

  useGSAP(
    () => {
      if (isMenuOpen) {
        openMenu(containerRef, menuRef);
      } else {
        closeMenu(containerRef);
      }
    },
    { dependencies: [isMenuOpen], scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`fixed w-full top-0 bottom-0 z-40 ${
        isMenuOpen ? "block" : "hidden"
      } overflow-auto`}
    >
      <nav className="w-full h-full relative">
        {/* Background panels for menu slide-in animation */}
        <div
          ref={menuRef}
          className="fixed inset-0 z-0"
          style={{
            height:
              contentHeight > window.innerHeight
                ? `${contentHeight}px`
                : "100%",
          }}
        >
          <div className="absolute inset-0 bg-accent h-full"></div>
          <div className="absolute inset-0 bg-f-primary h-full"></div>
          <div className="absolute inset-0 bg-s-secondary h-full"></div>
        </div>

        {/* Menu inner content */}
        <div
          ref={contentRef}
          className="flex flex-col z-10 relative text-f-inverse"
        >
          {/* Top padding for menu */}
          <div className="h-16 md:h-24 lg:h-32"></div>

          {/* Menu items */}
          <ul className="flex flex-col">
            <li className="overflow-hidden">
              <Link
                href="/"
                onClick={handleClick}
                className="block w-full pl-8 py-6 md:p-8"
              >
                <p className="relative font-semibold text-6xl md:text-8xl w-fit">
                  <span>Home</span>
                  {/* Underline */}
                  <span
                    className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
                      pathname == "/" ? "bg-s-primary" : "hide"
                    }`}
                  ></span>
                </p>
              </Link>
            </li>
            {navigation.map((item) => (
              <li
                className="overflow-hidden"
                key={item.id}
              >
                <Link
                  href={item.url}
                  onClick={handleClick}
                  className="block w-full pl-8 py-6 md:p-8"
                >
                  <p className="relative font-semibold text-6xl md:text-8xl w-fit">
                    <span>
                      {item.title}
                      {item.sup && (
                        <sup className="pl-3 text-accent">{item.sup}</sup>
                      )}
                    </span>
                    {/* Underline */}
                    <span
                      className={`underline absolute left-0 -bottom-2 w-full h-0.5 ${
                        pathname == item.url ? "bg-s-primary" : "hide"
                      }`}
                    ></span>
                  </p>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div
            className={`
            pl-8 -mx-3
            ${orientation === "landscape" ? "py-8" : "py-6 md:py-8"} 
            w-full
          `}
          >
            <Socials />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideMenu;

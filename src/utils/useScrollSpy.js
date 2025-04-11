import { useState, useEffect } from "react";

export function useScrollSpy(navItems, options = {}) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const { offset = 100 } = options;

    const handleScroll = () => {
      // Find all sections in the document
      const sections = navItems
        .map(({ id }) => {
          const element = document.getElementById(id);
          if (element) {
            return {
              id,
              offsetTop: element.offsetTop,
              offsetHeight: element.offsetHeight,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Get current scroll position
      const scrollPosition = window.scrollY + offset;

      // Find the current active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          setActiveSection(section.id);
          return;
        }
      }

      // If we got here, set the first section as active
      if (sections.length > 0 && scrollPosition < sections[0].offsetTop) {
        setActiveSection(sections[0].id);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Call once to initialize
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navItems, options]);

  return activeSection;
}

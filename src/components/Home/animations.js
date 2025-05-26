import { gsap } from "gsap";

export const createListAnimation = (listRef, index, wordHeight, words) => {
  return () => {
    index++;

    // Force GPU acceleration and preserve blend mode during animation
    gsap.set(listRef.current, {
      willChange: "transform",
      backfaceVisibility: "hidden",
    });

    gsap.to(listRef.current, {
      y: -wordHeight * index,
      duration: 1.2,
      ease: "elastic.out(1, 0.85)",
      onComplete: function () {
        if (index >= words.length - 2) {
          // Clone the first child instead of moving it to preserve styling
          const firstChild = listRef.current.children[0];
          const clone = firstChild.cloneNode(true);
          listRef.current.appendChild(clone);

          // Remove the first child after appending its clone
          setTimeout(() => {
            listRef.current.removeChild(firstChild);
            index--;
            gsap.set(listRef.current, {
              y: -wordHeight * index,
            });
            words.push(words.shift());
          }, 0);
        }
      },
    });
  };
};

export const setupHeroAnimations = (leftListRef, rightListRef) => {
  // Ensure elements are ready for animation
  gsap.set([leftListRef.current, rightListRef.current], {
    willChange: "transform",
    backfaceVisibility: "hidden",
  });

  const leftWords = Array.from(leftListRef.current.children);
  const rightWords = Array.from(rightListRef.current.children);

  requestAnimationFrame(() => {
    const leftWordHeight = leftWords[0].offsetHeight;
    const rightWordHeight = rightWords[0].offsetHeight;

    const loopLeftList = createListAnimation(
      leftListRef,
      0,
      leftWordHeight,
      leftWords
    );
    const loopRightList = createListAnimation(
      rightListRef,
      0,
      rightWordHeight,
      rightWords
    );

    const masterTimeline = gsap.timeline({ delay: 3 });
    masterTimeline.call(loopLeftList).to({}, { duration: 3 }).repeat(-1);
    masterTimeline
      .call(loopRightList, [], 2)
      .to({}, { duration: 6 })
      .repeat(-1);
  });
};

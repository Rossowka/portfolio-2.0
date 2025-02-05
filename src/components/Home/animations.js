import { gsap } from "gsap";

export const createListAnimation = (listRef, index, wordHeight, words) => {
  return () => {
    index++;
    gsap.to(listRef.current, {
      y: -wordHeight * index,
      duration: 1.2,
      ease: "elastic.out(1, 0.85)",
      onComplete: function () {
        if (index >= words.length - 2) {
          listRef.current.appendChild(listRef.current.children[0]);
          index--;
          gsap.set(listRef.current, {
            y: -wordHeight * index,
          });
          words.push(words.shift());
        }
      },
    });
  };
};

export const setupHeroAnimations = (leftListRef, rightListRef) => {
  const leftWords = Array.from(leftListRef.current.children);
  const rightWords = Array.from(rightListRef.current.children);

  const leftWordHeight = leftWords[0].offsetHeight;
  const rightWordHeight = rightWords[0].offsetHeight;

  let leftIndex = 0;
  let rightIndex = 0;

  const loopLeftList = createListAnimation(
    leftListRef,
    leftIndex,
    leftWordHeight,
    leftWords
  );
  const loopRightList = createListAnimation(
    rightListRef,
    rightIndex,
    rightWordHeight,
    rightWords
  );

  const masterTimeline = gsap.timeline({ delay: 3 });

  masterTimeline.call(loopLeftList).to({}, { duration: 3 }).repeat(-1);

  masterTimeline.call(loopRightList, [], 2).to({}, { duration: 6 }).repeat(-1);
};

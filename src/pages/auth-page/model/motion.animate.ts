export const animationFromLeftToRight = (delay: number) => {
  return {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay },
  };
};

export const animationFromRightToLeft = (delay: number) => {
  return {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { delay },
  };
};

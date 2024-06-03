export const AUTH_TRANSITION_PAGE = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
  transition: { duration: 0.3 },
};

export const ANIMATE_SCALE = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
  },
  transition: { duration: 0.2 },
};

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

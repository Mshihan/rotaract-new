import { AnimationProps } from "framer-motion";

export const bottomVariants: AnimationProps["variants"] = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.3,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

import { AnimationProps } from "framer-motion";

export const formVariants: AnimationProps["variants"] = {
  initial: {
    opacity: 0,
    transform: "translateX(+20%)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0)",
    transition: {
      duration: 0.3,
      delay: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    transform: "translateX(-20%)",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const formVariantsSecond: AnimationProps["variants"] = {
  initial: {
    opacity: 0,
    transform: "translateX(+20%)",
  },
  animate: {
    opacity: 1,
    transform: "translateX(0)",
    transition: {
      duration: 0.3,
      delay: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    transform: "translateX(-20%)",
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

import { AnimationProps } from "framer-motion";

export const bottomVariants: AnimationProps["variants"] = {
  initial: {
    transform: "translateY(+100%)",
  },
  animate: {
    transform: "translateY(0)",
    transition: {
      duration: 0.3,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    transform: "translateY(+100%)",
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

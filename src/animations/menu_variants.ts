import { AnimationProps } from "framer-motion";

export const menuVariants: AnimationProps["variants"] = {
  initial: {
    scaleX: 0,
  },
  animate: {
    scaleX: 1,
    transition: {
      duration: 0.2,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleX: 0,
    transition: {
      duration: 0.3,
      delay: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const buttonVariant: AnimationProps["variants"] = {
  initial: {
    y: "-10vh",
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
    },
  },
};

export const staggerVariant: AnimationProps["variants"] = {
  initial: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.09,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const linkVariant: AnimationProps["variants"] = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.7,
    },
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    y: "-30vh",
    transition: {
      duration: 0.7,
    },
  },
};

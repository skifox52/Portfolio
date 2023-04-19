import { Variants } from "framer-motion"

type variantType = (duration: number, delay: number) => Variants
export const lowerNavBarVariant: variantType = (duration, delay) => ({
  hidden: {
    opacity: 0,
    y: "2vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
    },
  },
})
export const navBarLineVariant: variantType = (duration, delay) => ({
  hidden: {
    width: 0,
  },
  visible: {
    width: "50%",
    transition: {
      duration,
      delay,
    },
  },
})
export const textVariant: variantType = (duration, delay) => ({
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
    },
  },
})

import React from "react"
import { motion, Variants } from "framer-motion"
import { lowerNavBarVariant, navBarLineVariant } from "../utils/Variants"
import { Link } from "react-router-dom"

interface ContactProps {}

export const Contact: React.FC<ContactProps> = ({}) => {
  const transitionVatiant: Variants = {
    hidden: {
      y: 0,
    },
    visible: {
      y: "100%",
      transition: {
        ease: [1, 0, 0, 1],
        duration: 1,
        delay: 0.4,
      },
    },
  }
  const contentVariant: Variants = {
    hidden: {
      backgroundColor: "rgb(207 250 254)",
    },
    visible: {
      backgroundColor: "rgb(22 78 99)",
      transition: {
        ease: [1, 0, 0, 1],
        duration: 1,
        delay: 1.4,
      },
    },
  }
  const appearVariant = (duration: number, delay: number): Variants => {
    return {
      hidden: {
        backgroundColor: "rgb(207 250 254)",
      },
      visible: {
        backgroundColor: "rgb(22 78 99)",
        transition: {
          ease: [1, 0, 0, 1],
          duration,
          delay,
        },
      },
    }
  }
  return (
    <motion.div
      variants={contentVariant}
      initial="hidden"
      animate="visible"
      className="w-screen h-full bg-cyan-950 py-[1vw] px-[3vw]"
    >
      <motion.div
        variants={transitionVatiant}
        initial="hidden"
        animate="visible"
        className="bg-gray-800 w-screen h-screen absolute z-50"
      ></motion.div>
      <main className=" text-white w-full flex">
        <section className="w-full h-screen flex flex-col justify-between pb-[50vh]">
          <motion.nav
            variants={lowerNavBarVariant(0.5, 6)}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <ul className="flex justify-between font-light tracking-widest text-amber-50">
              <li>2023 &copy;</li>
              <motion.li
                variants={navBarLineVariant(0.75, 6.9)}
                initial="hidden"
                animate="visible"
                className="w-1/2 border-b border-amber-50 translate-y-[-50%]"
              ></motion.li>
              <li className="flex justify-between w-1/6">
                <Link
                  to={"/"}
                  className="tracking-[1ch] font-light cursor-pointer text-amber-50 hover:line-through"
                >
                  HOME
                </Link>
              </li>
            </ul>
          </motion.nav>
          <article>
            <p>
              I can help you design and build your next website. Let me know
              what you need.
            </p>
            <p>Email: sayhi.abdelfattah@gmail.com</p>
            <p>
              Socials:{" "}
              <a
                href="https://www.linkedin.com/in/abdelfattah-sayhi/"
                target="_blank"
              >
                Linkedin
              </a>{" "}
              /{" "}
              <a href="https://github.com/skifox52" target="_blank">
                Github
              </a>
            </p>
          </article>
        </section>
        <section className="flex flex-col items-center justify-center">
          <h1 className=" text-[20vw] font-voyage">Hello.</h1>
        </section>
      </main>
    </motion.div>
  )
}

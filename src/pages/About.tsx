import React from "react"
import { motion, Variants } from "framer-motion"
import { Link } from "react-router-dom"
import image from "../assets/placeholder.jpeg"
import { lowerNavBarVariant, navBarLineVariant } from "../utils/Variants"

interface AboutProps {}
const aboutLoaderVariant: Variants = {
  hidden: {
    y: 0,
  },
  visible: {
    y: "-100vh",
    transition: {
      ease: [1, 0, 0, 1],
      duration: 1,
      delay: 0.4,
    },
  },
}
const aboutContentVariant: Variants = {
  hidden: {
    backgroundColor: "rgb(207 250 254)",
  },
  visible: {
    backgroundColor: "#163F42",
    transition: {
      ease: [1, 0, 0, 1],
      duration: 1,
      delay: 1.4,
    },
  },
}
const showContentVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: [1, 0, 0, 1],
      duration: 1,
      delay: 2.4,
    },
  },
}
const imageVariant = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      ease: [1, 0, 0.94, 0.94],
      duration: 0.5,
      delay: 3.4,
    },
  },
}
export const About: React.FC<AboutProps> = ({}) => {
  return (
    <motion.div
      className="h-screen w-screen bg-[#163F42]"
      variants={aboutContentVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={aboutLoaderVariant}
        initial="hidden"
        animate="visible"
        className=" absolute w-screen h-screen bg-gray-800 z-50 top-0 left-0"
      ></motion.div>
      <motion.main
        variants={showContentVariant}
        initial="hidden"
        animate="visible"
        className="h-full w-full px-[5vw] py-[4vw] flex"
      >
        <section className=" w-1/2 flex flex-col justify-between">
          <h1 className="text-[12vw] font-voyage text-center text-amber-100">
            About
          </h1>
          <motion.nav
            variants={lowerNavBarVariant(0.5, 3.9)}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <ul className="flex justify-between font-light tracking-widest text-amber-50">
              <li>2023 &copy;</li>
              <motion.li
                variants={navBarLineVariant(0.75, 4.4)}
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
        </section>
        <section className="w-1/2 flex flex-col gap-[3vw] ">
          <motion.img
            src={image}
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            alt="placeholder"
            className="w-[55%] mx-auto opacity-30"
          />
          <article className="flex h-full flex-col justify-between items-center ">
            <main className="w-full  flex">
              <section className="text-amber-50 flex  justify-start flex-1 items-center flex-col">
                <h2 className="font-voyage text-[2vw]">Education</h2>
                <ul className=" list-disc pl-[10%] font-montserrat w-2/3 font-extralight ">
                  <li>Baccalaureate in Science.</li>
                  <li>Master 1 in Information Systems.</li>
                  <li>
                    Master 2 in Administration and Management of Databases.
                  </li>
                </ul>
              </section>
              <section className="text-amber-50 flex flex-1 justify-start items-center flex-col">
                <h2 className="font-voyage text-[2vw]">Informations</h2>
                <ul className=" list-disc pl-[10%] font-montserrat w-2/3 font-extralight ">
                  <li>Name: Abdelfattah. </li>
                  <li>Surname: SAYHI.</li>
                  <li>Date of birth: 26-06-1995.</li>
                  <li>Driving License: YES.</li>
                </ul>
              </section>
            </main>
            <button className="text-xl font-voyage tracking-widest hover:w-3/5 duration-200 ease-linear text-amber-50 bg-[#0d2526] shadow-lg w-1/2 py-[1.5vh] rounded-[1vw]">
              My CV
            </button>
          </article>
        </section>
      </motion.main>
    </motion.div>
  )
}

import React from "react"
import { motion, Variants } from "framer-motion"
import { Link } from "react-router-dom"
import image from "../assets/placeholder.jpeg"
import { lowerNavBarVariant, navBarLineVariant } from "../utils/Variants"
import pdfFile from "../assets/pdf/Abdelfattah_Sayhi.pdf"

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
    backgroundColor: "#083344",
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
      delay: 4.4,
    },
  },
}
const animateTitleVariant = {
  hidden: {
    letterSpacing: "-1ch",
    opacity: 0,
  },
  visible: {
    letterSpacing: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 1,
      delay: 3.4,
    },
  },
}
const showTextVarient = {
  hidden: {
    x: "30%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 1,
      delay: 4.9,
    },
  },
}
const animateButton = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 1,
      delay: 5.9,
    },
  },
}
const openPdfNewTab = (): void => {
  const pdf = pdfFile
  window.open(pdf, "_blank")
}
export const About: React.FC<AboutProps> = ({}) => {
  return (
    <motion.div
      className="h-screen w-screen "
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
        className="h-full w-full flex-col lg:flex-row px-[5vw] py-[2vw] flex text-white"
      >
        <section className=" w-full flex flex-col h-full justify-between">
          <motion.h1
            variants={animateTitleVariant}
            initial="hidden"
            animate="visible"
            className="text-[13.5vw] font-voyage font-extralight text-center text-white"
          >
            About
          </motion.h1>
          <main className="flex flex-col pb-[2vw] items-center justify-around border-r border-amber-50 h-full">
            <motion.article
              variants={showTextVarient}
              initial="hidden"
              animate="visible"
              className="flex w-full items-start"
            >
              <section className="text-amber-50 flex w-1/2  justify-start flex-col">
                <h2 className="font-montserrat tracking-widest font-light text-[16px] lg:text-[1.5vw]">
                  Education
                </h2>
                <ul className="font-montserrat w-2/3 font-extralight text-[12px] lg:text-[14px] ">
                  <li>Baccalaureate in Science.</li>
                  <li>Master 1 in Information Systems.</li>
                  <li>
                    Master 2 in Administration and Management of Databases.
                  </li>
                </ul>
              </section>
              <section className="text-white flex w-1/2  justify-start  flex-col">
                <h2 className="font-montserrat tracking-widest font-light text-[16px] lg:text-[1.5vw]">
                  Experience
                </h2>
                <ul className="font-montserrat w-2/3 font-extralight text-[12px] lg:text-[14px] ">
                  <li>6 months in IT service at Sonatrach.</li>
                  <li>9 months of Dev in BNP Paribas El Djazayer.</li>
                </ul>
              </section>
            </motion.article>
            <motion.article
              variants={showTextVarient}
              initial="hidden"
              animate="visible"
              className=" w-full items-start"
            >
              <section className="text-white flex w-full justify-start  flex-col ">
                <h2 className="font-montserrat tracking-widest font-light text-[16px] lg:text-[1.5vw]">
                  Skills
                </h2>
                <ul className="font-montserrat font-extralight text-[12px] lg:text-[14px] ">
                  <li> JavaScript, TypeScript, Bash, Java, C++.</li>
                  <li>
                    HTML5, CSS3, SASS, TailwindCSS, React, Framer-motion,
                    ReduxToolkit, RTK Query, React-Query.
                  </li>
                  <li>NodeJS, Express, SocketIO, Docker, Kubernetes.</li>
                  <li>MpngoDB, Mysql, SQLServer, Oracle PL/SQL, Redis.</li>
                  <li>Arab, French, English</li>
                </ul>
              </section>
            </motion.article>
          </main>
          <motion.nav
            variants={lowerNavBarVariant(0.5, 6)}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            <ul className="flex justify-between font-light tracking-widest text-white">
              <li>2023 &copy;</li>
              <motion.li
                variants={navBarLineVariant(0.75, 6.9)}
                initial="hidden"
                animate="visible"
                className="w-1/2 border-b border-white translate-y-[-50%]"
              ></motion.li>
              <li className="flex justify-between w-1/6">
                <Link
                  to={"/"}
                  className="tracking-[1ch] font-light cursor-pointer text-white hover:line-through"
                >
                  HOME
                </Link>
              </li>
            </ul>
          </motion.nav>
        </section>
        <section className="w-full py-4 h-1/3 sm:h-1/2 flex flex-col sm:flex-row  lg:flex-col gap-[3vw] justify-between items-center">
          <motion.img
            src={image}
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            alt="placeholder"
            className="h-[80%] lg:h-auto lg:w-[70%] mx-auto opacity-30"
          />
          <motion.button
            variants={animateButton}
            initial="hidden"
            animate="visible"
            onClick={openPdfNewTab}
            className="sm:text-xl font-montserrat font-light tracking-widest hover:translate-y-1 lg:hover:translate-y-0 w-full  lg:hover:w-3/5 duration-200 ease-linear text-white bg-cyan-950 border border-cyan-9 00 shadow-lg sm:w-1/2 py-[.75vh] sm:py-[1.5vh] rounded-[1vw]"
          >
            My CV
          </motion.button>
        </section>
      </motion.main>
    </motion.div>
  )
}

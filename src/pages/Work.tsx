import React from "react"
import { motion, Variants } from "framer-motion"
import { Link } from "react-router-dom"
import {
  lowerNavBarVariant,
  navBarLineVariant,
  textVariant,
} from "../utils/Variants"

interface WorkProps {}
const transitionVatiant = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
    transition: {
      ease: [1, 0, 0, 1],
      duration: 1,
      delay: 0.4,
    },
  },
}
const workVariant = (duration: number, delay: number): Variants => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration,
      delay: 1.4 + delay,
    },
  },
})

export const Work: React.FC<WorkProps> = ({}) => {
  return (
    <div className="bg-cyan-100 h-full w-screen">
      <motion.div
        variants={transitionVatiant}
        initial="hidden"
        animate="visible"
        className="bg-gray-800 h-full w-screen text-cyan-100 lg:flex-row flex flex-col-reverse"
      >
        <section className="flex-1  h-full flex flex-col justify-between pb-32">
          <motion.nav
            variants={lowerNavBarVariant(0.5, 3.4)}
            initial="hidden"
            animate="visible"
            className="w-full py-8"
          >
            <ul className="flex justify-between px-[4vw]">
              <li className=" tracking-widest font-light text-xs lg:text-lg">
                2023 &copy;
              </li>
              <motion.li
                variants={navBarLineVariant(0.75, 3.9)}
                initial="hidden"
                animate="visible"
                className=" border-b border-cyan-100 w-1/2 translate-y-[-50%]"
              ></motion.li>
              <li className=" tracking-[1ch] font-light cursor-pointer hover:line-through">
                <Link to="/">HOME</Link>
              </li>
            </ul>
          </motion.nav>
          <motion.article
            variants={textVariant(0.5, 4.65)}
            initial="hidden"
            animate="visible"
            className="px-[4vw] max-w-[80%]"
          >
            <h1 className=" text-2xl font-normal tracking-[.6ch] pb-4">WORK</h1>
            <p className="font-extralight pb-3 text-justify lg:text-lg text-xs">
              As a fullstack web developer with a passion for backend
              development, I've had the opportunity to work on a variety of
              exciting projects that have challenged and inspired me. From
              designing and implementing robust APIs to developing efficient
              database architectures.
            </p>
            <p className="font-extralight text-justify lg:text-lg text-xs">
              Whether you're looking to build a custom web application, optimize
              your existing backend systems, or implement new technologies to
              enhance your business operations, I'm confident that I have the
              skills and experience necessary to deliver exceptional results.
            </p>
          </motion.article>
        </section>
        <section className=" h-full w-3/5 font-voyage flex flex-col items-start justify-center gap-[2vw] px-[4vw] lg:px-0">
          <motion.article
            variants={workVariant(0.4, 0)}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw] duration-300 w-screen">
              <a
                href="https://github.com/skifox52/PerfectPetMatch"
                target="_blank"
              >
                Perfect pet match
              </a>
            </h1>
            <span className=" opacity-0 group-hover:opacity-100 duration-200 font-montserrat text-[1.2vw] font-light">
              - NodeJS, React, RTK Query, Docker, Kubernetes, TypeScript,
              MongoDB, TailwindCSS.
            </span>
          </motion.article>
          <motion.article
            variants={workVariant(0.4, 0.4)}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300 w-screen">
              <a href="https://github.com/skifox52/gpi_pfe" target="_blank">
                IT asset management
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat text-[1.2vw] font-light">
              - NodeJS, Express, React, RTK, SASS, MySQL.
            </span>
          </motion.article>
          <motion.article
            variants={workVariant(0.4, 0.8)}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300 w-screen">
              <a href="https://github.com/skifox52/projetL" target="_blank">
                Country manager
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat text-[1.2vw] font-light">
              - NodeJS, Express, React, RTK, MongoDB.
            </span>
          </motion.article>
          <motion.article
            variants={workVariant(0.4, 1.2)}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300 w-screen">
              <a href="https://github.com/skifox52/social" target="_blank">
                Social media
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat text-[1.2vw] font-light">
              - NodeJS, Express, React, React-Query, TypeScript, MongoDB,
              TailwindCSS.
            </span>
          </motion.article>
          <motion.article
            variants={workVariant(0.4, 1.6)}
            initial="hidden"
            animate="visible"
            className="group"
          >
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300 w-screen">
              <a href="https://github.com/skifox52/Portfolio" target="_blank">
                Portfolio
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat text-[1.2vw] font-light">
              React, TypeScript, Framer-Motion, TailwindCSS.
            </span>
          </motion.article>
        </section>
      </motion.div>
    </div>
  )
}

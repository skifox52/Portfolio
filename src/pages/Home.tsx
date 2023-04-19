import React from "react"
import { motion } from "framer-motion"
import {
  lowerNavBarVariant,
  navBarLineVariant,
  textVariant,
} from "../utils/Variants"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className=" h-full w-2/3 bg-opacity-50 py-[8vw] flex items-start justify-between flex-col">
      <motion.section
        variants={textVariant(0.5, 1.8)}
        initial="hidden"
        animate="visible"
      >
        <h1 className=" font-montserrat font-normal text-2xl py-4 text-gray-800 tracking-wider">
          SAYHI ABDELFATTAH
        </h1>
        <p className="pb-1 font-xl font-light tracking-wide">
          Junior FullStack Web Developer
        </p>
        <p className="font-xl font-light tracking-wide">
          Currently enrolled at Fabrikademy.
        </p>
      </motion.section>
      <motion.nav
        variants={lowerNavBarVariant(0.5, 2.2)}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <ul className="flex justify-between font-light tracking-widest">
          <li>2023 &copy;</li>
          <motion.li
            variants={navBarLineVariant(0.75, 2.7)}
            initial="hidden"
            animate="visible"
            className="w-1/2 border-b border-gray-800 translate-y-[-50%]"
          ></motion.li>
          <li className="flex justify-between w-1/6">
            <a
              href="https://github.com/skifox52"
              target="_blank"
              className="hover:line-through tracking-widest"
              title="Github"
            >
              GI
            </a>
            <a
              href="https://www.linkedin.com/in/abdelfattah-sayhi/"
              target="_blank"
              className="hover:line-through tracking-widest"
              title="Linkedin"
            >
              LI
            </a>
          </li>
        </ul>
      </motion.nav>
    </div>
  )
}

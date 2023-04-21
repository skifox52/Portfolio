import React from "react"
import { useLocation, Link } from "react-router-dom"
import { motion } from "framer-motion"

interface NavBarProps {}
const blurAnimation = {
  hidden: {
    opacity: 0,
    lineHeight: 0.4,
  },
  visible: {
    opacity: 1,
    lineHeight: 1,
    transition: {
      ease: "linear",
      delay: 0.8,
      duration: 1,
    },
  },
}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const location = useLocation()
  if (location.pathname === "/") {
    return (
      <motion.nav
        variants={blurAnimation}
        initial="hidden"
        animate="visible"
        className="p-[4vw] pl-[20%] lg:pl-0 lg:p-0  w-full lg:w-[50%] flex flex-col gap-['-100px'] items-start justify-center font-voyage text-[12vw] font-normal leading-[1]"
      >
        <Link to="/about">
          <h1 className="transition-all duration-100 hover:tracking-tighter hover:cursor-pointer hover:-translate-x-4 w-screen ease-linear">
            About
          </h1>
        </Link>
        <Link to="/contact">
          <h1 className="transition-all duration-100 hover:tracking-tighter hover:cursor-pointer hover:-translate-x-4 w-screen ease-linear">
            Contact
          </h1>
        </Link>
        <Link to="/work">
          <h1 className="transition-all duration-100 hover:tracking-tighter hover:cursor-pointer hover:-translate-x-4 w-screen ease-linear">
            Work
          </h1>
        </Link>
      </motion.nav>
    )
  }
  return (
    <nav className="w-[50%] flex flex-col gap-['-100px'] items-start justify-center font-voyage text-[12vw] font-normal leading-[1.5ch]">
      <Link to="/about">
        <h1 className="font-light transition-all duration-100 hover:tracking-tighter hover:cursor-pointer hover:font-extralight hover:-translate-x-4 ease-linear">
          About
        </h1>
      </Link>
      <Link to="/contact">
        <h1 className="font-light transition-all duration-100 hover:tracking-tighter hover:cursor-pointer hover:font-extralight hover:-translate-x-4 ease-linear">
          Contact
        </h1>
      </Link>
      <Link to="/work">
        <h1 className="font-light transition-all duration-100 hover:tracking-tighter hover:cursor-pointer hover:font-extralight hover:-translate-x-4 ease-linear">
          Work
        </h1>
      </Link>
    </nav>
  )
}

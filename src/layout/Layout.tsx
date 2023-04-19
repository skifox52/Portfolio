import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { motion } from "framer-motion"

interface LayoutProps {}
const loaderVariant = {
  hidden: { y: 0 },
  visible: {
    y: "100vh",
    transition: {
      ease: [1, 0, 0, 1],
      delay: 0.2,
      duration: 1.3,
    },
  },
}
const containerVariant = {
  hidden: {
    scale: 1.3,
  },
  visible: {
    scale: 1,
    transition: {
      ease: "linear",
      delay: 0.8,
      duration: 1,
    },
  },
}
export const Layout: React.FC<LayoutProps> = ({}) => {
  const location = useLocation()
  if (location.pathname === "/") {
    return (
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex w-screen h-screen overflow-hidden  bg-cyan-100 text-gray-800 justify-between"
      >
        <motion.div
          variants={loaderVariant}
          initial="hidden"
          animate="visible"
          className="absolute block bg-gray-800 h-screen w-screen z-50"
        ></motion.div>
        <main className="w-[50%] h-screen flex items-center justify-center">
          <Outlet />
        </main>
        <NavBar />
      </motion.div>
    )
  }
  return (
    <div className="flex w-screen h-screen overflow-hidden  bg-cyan-100 text-gray-800 justify-between">
      <main className="min-w-[50%] h-screen flex items-center justify-center">
        <Outlet />
      </main>
      {location.pathname === "/" && <NavBar />}
    </div>
  )
}

import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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

export const Work: React.FC<WorkProps> = ({}) => {
  return (
    <div className="bg-cyan-100 h-full w-screen">
      <motion.div
        variants={transitionVatiant}
        initial="hidden"
        animate="visible"
        className="bg-gray-800 h-full w-screen text-cyan-100 flex"
      >
        <section className="flex-1  h-full flex flex-col justify-between pb-32">
          <nav className="w-full py-8">
            <ul className="flex justify-between px-[4vw]">
              <li className=" tracking-widest font-light">2023 &copy;</li>
              <li className=" border-b border-cyan-100 w-1/2"></li>
              <li className=" tracking-[1ch] font-light cursor-pointer hover:line-through">
                <Link to="/">HOME</Link>
              </li>
            </ul>
          </nav>
          <article className="px-16 max-w-[80%]">
            <h1 className=" text-2xl font-normal tracking-[.6ch] pb-4">WORK</h1>
            <p className="font-extralight pb-3 text-justify">
              As a fullstack web developer with a passion for backend
              development, I've had the opportunity to work on a variety of
              exciting projects that have challenged and inspired me. From
              designing and implementing robust APIs to developing efficient
              database architectures.
            </p>
            <p className="font-extralight text-justify">
              Whether you're looking to build a custom web application, optimize
              your existing backend systems, or implement new technologies to
              enhance your business operations, I'm confident that I have the
              skills and experience necessary to deliver exceptional results.
            </p>
          </article>
        </section>
        <section className=" h-full w-3/5 font-voyage flex flex-col items-start justify-center gap-[2vw]">
          <article className="group">
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300">
              <a
                href="https://github.com/skifox52/PerfectPetMatch"
                target="_blank"
              >
                Perfect pet match
              </a>
            </h1>
            <span className=" opacity-0 group-hover:opacity-100 duration-200 font-montserrat ">
              - NodeJS, React, RTK Query, Docker, Kubernetes, TypeScript,
              MongoDB, TailwindCSS.
            </span>
          </article>
          <article className="group">
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300">
              <a href="https://github.com/skifox52/gpi_pfe" target="_blank">
                IT asset management
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat">
              - NodeJS, Express, React, RTK, SASS, MySQL.
            </span>
          </article>
          <article className="group">
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300">
              <a href="https://github.com/skifox52/projetL" target="_blank">
                Country manager
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat">
              - NodeJS, Express, React, RTK, MongoDB.
            </span>
          </article>
          <article className="group">
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300">
              <a href="https://github.com/skifox52/social" target="_blank">
                Social media
              </a>
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat">
              - NodeJS, Express, React, React-Query, TypeScript, MongoDB,
              TailwindCSS.
            </span>
          </article>
          <article className="group">
            <h1 className=" text-[6vw] leading-[.75] cursor-pointer hover:tracking-tight hover:py-[1.5vw]  duration-300">
              Portfolio
            </h1>
            <span className="opacity-0 group-hover:opacity-100 duration-200 font-montserrat">
              React, TypeScript, Framer-Motion, TailwindCSS.
            </span>
          </article>
        </section>
      </motion.div>
    </div>
  )
}

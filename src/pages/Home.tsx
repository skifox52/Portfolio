import React from "react"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className=" h-1/2 w-2/3 bg-opacity-50 flex items-start justify-center flex-col ">
      <h1 className=" font-montserrat font-semibold  text-gray-800 tracking-wider">
        SAYHI ABDELFATTAH
      </h1>
      <p>Junior FullStack Web Developer</p>
      <h1 className=" font-montserrat font-semibold  text-gray-800 tracking-wider mt-8">
        TECHNOLOGIES
      </h1>
      <ul className=" font-normal px-8">
        <li>HTML5 / CSS3 / JavaScript</li>
        <li>CSS</li>
        <li>JS</li>
        <li>Tailwind</li>
      </ul>
    </div>
  )
}

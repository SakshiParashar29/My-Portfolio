"use client";
import React from 'react'
import { FaCode, FaFileCode, FaLaptop, FaLaptopCode, FaTools } from 'react-icons/fa'
import {
  fadeInUp,
  fadeInDown,
  fadeIn,
  staggerContainer,
  cardHover,
  cardHoverSmall
} from '../utils/animation'
import { motion } from "framer-motion"

const page = () => {
  return (
    <div className='container max-w-7xl py-12 mx-auto '>
      <motion.h2 {...fadeInDown} className='font-bold text-3xl mb-8 text-center'>About Me</motion.h2>

      {/* Bio */}
      <motion.section {...fadeInUp} className='mb-16 container mx-auto max-w-2xl'>
        <p className='text-center dark:text-gray-300 text-gray-600 text-xl '>I&apos;m a MERN Stack Developer who loves building real-world projects that make a difference. I'm passionate about problem-solving, constantly improving my DSA skills, and exploring new technologies like Cloud and DevOps to broaden my expertise.</p>
      </motion.section>

      {/* Skills section */}
      <motion.section {...fadeIn} className='mb-16 ml-4 mr-4'>
        <motion.h2 {...fadeInUp} className='font-bold text-3xl mb-8 text-center'>Skills</motion.h2>

        <motion.div variants={staggerContainer} initial="initial" animate="animate" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <motion.div variants={fadeInUp} className='bg-white dark:bg-gray-700 rounded-lg shadow-md p-6' whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 },
          }}>
            <FaCode className='h-8 w-8 text-blue-700 mb-4' />
            <h3 className='text-2xl font-semibold mb-2'>Frontend</h3>
            <ul className='dark:text-gray-200  text-gray-600 space-y-2 text-xl'>
              <li>React Js</li>
              <li>Next Js</li>
              <li>TailwindCss</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 },
          }} className='bg-white dark:bg-gray-700 rounded-lg shadow-md p-6'>
            <FaLaptopCode className='h-8 w-8 text-blue-700 mb-4' />
            <h3 className='text-2xl font-semibold mb-2'>Backend</h3>
            <ul className='dark:text-gray-200  text-gray-600 space-y-2 text-xl'>
              <li>Node Js</li>
              <li>Express Js</li>
              <li>MongoDB</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 },
          }} className='bg-white dark:bg-gray-700 rounded-lg shadow-md p-6'>
            <FaTools className='h-8 w-8 text-blue-700 mb-4' />
            <h3 className='text-2xl font-semibold mb-2'>Tools & Others</h3>
            <ul className='dark:text-gray-200  text-gray-600 space-y-2 text-xl'>
              <li>Git/GitHub</li>
              <li>Vercel</li>
              <li>VS Code</li>
              <li>Render</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300 },
          }} className='bg-white dark:bg-gray-700 rounded-lg shadow-md p-6'>
            <FaFileCode className='h-8 w-8 text-blue-700 mb-4' />
            <h3 className='text-2xl font-semibold mb-2'>Languages</h3>
            <ul className='dark:text-gray-200  text-gray-600 space-y-2 text-xl'>
              <li>C programming</li>
              <li>C++</li>
              <li>SQL</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Education */}
      <motion.section {...fadeIn} transition={{ delay: 0.6 }} className='mb-16 ml-4 mr-4'>
        <motion.h2 {...fadeInUp} className='font-bold text-3xl mb-8 text-center'>Education</motion.h2>
        <motion.div {...fadeInUp} whileHover={{
          scale: 1.02,
          transition: { type: "spring", stiffness: 300 },
        }} className='bg-white dark:bg-gray-700 rounded-lg shadow-md p-6'>
          <h2 className='text-xl font-semibold mb-2'>Bachelor of Engineering in Computer Science</h2>
          <motion.div variants={fadeInUp} className='flex justify-between dark:text-blue-400 text-blue-700 mb-2'>
            <span>University Institute of Technology</span>
            <span>Aug 2023 - Aug 2027</span>
          </motion.div>
          <p className='font-bold'>Courses: <span className='italic dark:text-gray-200 text-gray-700 font-normal'>Operating Systems, Data Structures, Analysis Of Algorithms, C programming, Software Engineering, DBMS</span></p>
        </motion.div>
      </motion.section>
    </div>
  )
}

export default page

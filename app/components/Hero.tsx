"use client";
import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '../utils/animation';

const Hero = () => {
    // const {darkMode, toggleTheme} = useTheme();
    return (
        <div className='py-28 mx-auto container px-4 max-w-7xl'>
            <div className='max-w-3xl text-center mx-auto'>
                <motion.div
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col items-center mb-4'>
                    <Image src="/hero.jpeg" alt='profile photo' width={100} height={100} className='rounded-full object-cover w-32 h-32 ring-2 ring-blue-200' />
                </motion.div>

                <div className='light:text- mb-4'>
                    <motion.h2
                        {...fadeInUp}
                        transition={{ delay: 0.3 }}
                        className='text-4xl font-semibold'>Hi, I&apos;m <span className='text-blue-600'>Sakshi</span></motion.h2>
                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.5 }}
                        className='dark:text-gray-200 font-semibold text-xl mt-4'>Aspiring Full Stack Developer | MERN Stack Developer | Open Source Contributor | Exploring Cloud & DevOps | Growing through DSA</motion.p>
                </div>

                <motion.div {...fadeInUp} transition={{ delay: 0.8}} className='flex gap-2 mb-4 justify-center'>
                    <motion.a href="https://github.com/SakshiParashar29" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}><FaGithub className='h-8 w-10 dark:hover:text-blue-400 hover:text-blue-600' /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/sakshi-parashar-753947298" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}><FaLinkedin className='h-8 w-10 dark:hover:text-blue-400 hover:text-blue-600' /></motion.a>
                    <motion.a href="https://leetcode.com/u/Parashar29/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}><SiLeetcode className='h-8 w-10 dark:hover:text-blue-400 hover:text-blue-600' /></motion.a>
                    <motion.a href="https://www.geeksforgeeks.org/user/sakshipara9t46/" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}><SiGeeksforgeeks className='h-10 w-12 dark:hover:text-blue-400 hover:text-blue-600' /></motion.a>
                </motion.div>

                <motion.div {...fadeInUp} transition={{delay: 1.0}} className='flex flex-col md:flex-row gap-4 justify-center mt-6'
                >
                    <motion.div className='mb-2' whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href="/projects" className='bg-blue-400 px-4 py-2 rounded-md font-semibold cursor-pointer' >View Projects</Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        <Link href="/contact" className='bg-gray-400 px-6 rounded-md font-semibold py-2 cursor-pointer'>Contact Me</Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero

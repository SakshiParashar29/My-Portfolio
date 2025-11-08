"use client";
import React from 'react'
import { projects } from '../Data/project'
import Image from 'next/image'
import { FaGithub  } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'
import { fadeInUp } from '../utils/animation';
import {motion} from 'framer-motion'

const page = () => {
  return (
    <div className='container max-w-7xl mx-auto py-20'>
      <motion.h2 className='text-4xl font-bold mb-4 text-center' 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>My Projects</motion.h2>
      <motion.p className='text-lg dark:text-gray-400 text-gray-600 mb-24 text-center' 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}>Every project here marks a step in my journey — learning, experimenting, and evolving as a web developer.</motion.p>
      <motion.div {...fadeInUp} transition={{delay:0.5}} className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
         {
            projects.map((project) =>(
              <article key={project.title} className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-100 hover:z-10 hover:shadow-2xl overflow-hidden'>
                {/* Image */}
                <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                   <Image src={project.image} alt={project.title} fill className='object-cover' sizes='(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
                </div>

                <h3 className='text-xl mb-2 font-bold'>{project.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{project.description}</p>
                <div className='flex gap-2 flex-wrap mb-4'>
                  {
                    project.technology.map((tech) => (
                      <span key={tech}  className='bg-blue-900 px-3 py-1 rounded-full text-sm text-blue-300'>{tech}</span>
                    ))
                  }
                </div>

                <div className='flex gap-4 mt-2'>
                   <Link href={project.gitHubLink} target="_blank" className='flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors'>
                     <FaGithub className='w-6 h-6'/> <span className='font-semibold'>code</span>
                   </Link>
                   <Link href={project.demoLink} target="_blank" className='flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors'>
                     <FiExternalLink className='w-6 h-6'/> <span className='font-semibold'>Live Demo</span>
                   </Link>
                </div>
              </article>
            ))
         }
      </motion.div>
    </div>
  )
}

export default page

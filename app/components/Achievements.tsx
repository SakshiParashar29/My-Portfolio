import { title } from 'process'
import React from 'react'
import { FaAward, FaUserGraduate, FaBullseye, FaCode, FaFireAlt, FaTrophy } from 'react-icons/fa'

const achievements = [
  {
    icon: <FaUserGraduate className="text-indigo-500 text-3xl" />,
    title: "Codesscafe Mentee 2025",
    description: "Selected as a mentee for Codesscafe 2025 mentorship program"
  },
  {
  icon: <FaCode className="text-indigo-500 text-3xl" />,
  title: "CodeBird Winter of Code",
  description: "Ranked among the top 10 contributors, demonstrating dedication and impactful contributions throughout the program."
},
  {
    icon: <FaTrophy className="text-green-500 text-3xl" />,
    title: "CodeWiz 5.0",
    description: "Secured 3rd position in CodeWiz 5.0, a DSA competition organized at college level."
  },
  {
    icon: <FaBullseye className="text-red-500 text-3xl" />,
    title: "GFG 160 Days Workshop",
    description: "Completed GFG 160 Days of Problem Solving Summer Workshop"
  },
  {
    icon: <FaAward className="text-yellow-500 text-3xl" />,
    title: "Contest Ratings & Badges",
    description: "LeetCode Rating: 1523 | GFG Rating: 1545 | Earned 50, 100 & 200 Days badges on LeetCode."
  },
  {
    icon: <FaCode className="text-blue-600 text-3xl" />,
    title: "DSA Milestone",
    description: "Solved 500+ problems on LeetCode and 700+ on GeeksforGeeks, strengthening problem-solving fundamentals."
  },
  {
    icon: <FaFireAlt className="text-orange-500 text-3xl" />,
    title: "Consistency Streak",
    description: "Maintained a 400+ day streak on GeeksforGeeks with consistent practice and learning."
  }
]

const Achievements = () => {
  return (
    <div className='py-28 mx-auto container px-4 max-w-7xl'>
      <h2 className='text-3xl font-bold mb-12 text-center'>Achievements</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {achievements.map((item, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='flex justify-center mb-4'>{item.icon}</div>
            <h3 className='font-semibold text-lg mb-2'>{item.title}</h3>
            <p className='text-gray-600 dark:text-gray-300 text-sm'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements

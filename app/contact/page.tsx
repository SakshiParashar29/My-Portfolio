"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { FaEnvelope, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { motion } from 'framer-motion'
import { fadeInUp, fadeIn, slideInLeft, slideInRight } from '../utils/animation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";;

const page = () => {
  const [FormData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const [error, setError] = useState<String | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const [showSuccess, setshowSuccess] = useState<Boolean>(false);

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(FormData)
      })

      if(!response.ok)
         throw new Error("failed to send message");

      setStatus("success");
      setshowSuccess(true);

      setTimeout(() => {
        setshowSuccess(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        message: ""
      })
    } catch (error) {
      setStatus("error");
    }
  }
  return (
    <div className='container max-w-7xl mx-auto py-20 pl-4'>
      <motion.h2 className='text-4xl font-bold mb-8 text-center' {...fadeInUp} >Contact Me</motion.h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <motion.div {...slideInLeft} className='space-y-8'>
          <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
          <p className='dark:text-gray-400 text-gray-600 md:w-2/3'>I'm always open to new opportunities, collaborations, and conversations about tech.</p>
          <div>
            <div className='flex items-center gap-4 mb-4'>
              <FaEnvelope className='w-6 h-6 text-blue-700 mt-2' />
              <div className='flex flex-col'>
                <h3 className='text-semibold'>Email:</h3>
                <Link href="mailto:sakshiparashar2910@gmail.com" className='text-gray-400'>sakshiparashar2910@gmail.com</Link>
              </div>
            </div>
            <div className='flex items-center gap-4 mb-4'>
              <FaPhone className='w-6 h-6 text-blue-700 mt-2' />
              <div className='flex flex-col'>
                <h3 className='font-semibold'>Phone</h3>
                <Link href="tel:+919263452630" className='text-gray-400 hover:text-blue-500 transition-colors'>
                  +91 92634 52630
                </Link>
              </div>
            </div>

            <div className='flex items-center gap-4 mb-4'>
              <FaLocationDot className='w-6 h-6 text-blue-700 mt-2' />
              <div className='flex flex-col'>
                <h3 className='text-semibold'>Location</h3>
                <p className='text-gray-400'>Burdwan, West Bengal, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div {...slideInRight} className='bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor="name" className='block text-sm font-medium mb-2'>Name</label>
              <input required type="text" id="name" name="name" value={FormData.name} onChange={handleChange}  placeholder='Enter your name' className='w-full px-4 py-2 focus:ring-2 focus:ring-blue-400 rounded-md border-gray-400 border-2 dark:border-gray-700 bg-white dark:bg-gray-700 focus:border-none focus:outline-none dark:text-gray-200 text-gray-800' />
            </div>

            <div>
              <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
              <input required type="email" id="email" name='email' value={FormData.email}
                onChange={handleChange} placeholder='Enter your Email' className='w-full px-4 py-2 focus:ring-2 focus:ring-blue-400 rounded-md border-gray-400 border-2 dark:border-gray-700 bg-white dark:bg-gray-700 focus:border-none focus:outline-none dark:text-gray-200 text-gray-800' />
            </div>
            <div>
              <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
              <textarea id="message" name='message' value={FormData.message} onChange={handleChange} placeholder='Enter your message'
                rows={4} required className='w-full px-4 py-2 focus:ring-2 focus:ring-blue-400 rounded-md border-gray-400 border-2 dark:border-gray-700 bg-white dark:bg-gray-700 focus:border-none focus:outline-none dark:text-gray-200 text-gray-800' />
            </div>
            <motion.button type='submit' className='px-4 py-2 w-full bg-blue-700 text-white font-semibold text-xl rounded-md mb-2' whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}>
              {status === 'loading' ? "sending..." : "Send Message"}
            </motion.button>
            {
              showSuccess && (
                <p className='text-green-700 text-center'>Message Sent Successfully!!!</p>
              )
            }
            {
              status === 'error' && (
                <p className='text-red-500 text-center'>
                   Failed to send message. Please try again.
                </p>
              )
            }
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default page

"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isMobileMenu, setMobileMenu] = useState(false);
  const {darkMode, toggleTheme} = useTheme();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };



  return (
    <div>
      {/* Top navbar */}
      <div className={`p-4 rounded-bl-md rounded-br-md flex md:justify-around items-center justify-between ${!darkMode ? "bg-gray-300 text-black shadow-md" : "bg-gray-800"} :`}>
        <span className="text-blue-500 text-2xl font-bold">Sakshi</span>

        {/* Desktop Menu */}
        <ul className="md:flex gap-7 hidden md:items-center dark:text-white light:text-black">
          <Link
            className={`hover:text-blue-400 ${
              pathname === "/" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`hover:text-blue-400 ${
              pathname === "/about" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`hover:text-blue-400 ${
              pathname === "/projects" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/projects"
          >
            Projects
          </Link>
          {/* <Link
            className={`hover:text-blue-400 ${
              pathname === "/blogs" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/blogs"
          >
            Blog
          </Link> */}
          <Link
            className={`hover:text-blue-400 ${
              pathname === "/contact" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/contact"
          >
            Contact Me
          </Link>

          {/* Theme toggle */}
          <motion.button
            onClick={toggleTheme}
            className="hover:text-blue-400 cursor-pointer text-xl pt-0.5"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </motion.button>
        </ul>

        {/* Hamburger icon (mobile) */}
        <motion.div className="md:hidden text-white dark:text-gray-200" onClick={toggleMobileMenu}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
        >
          {isMobileMenu ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {isMobileMenu && (
        <ul className={`flex flex-col pl-4 gap-4 py-4 md:hidden ${!darkMode ? "bg-gray-300 text-black shadow-md" : "bg-gray-900"}`}>
          <Link
            className={`hover:text-blue-400 text-xl ${
              pathname === "/" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            className={`hover:text-blue-400 text-xl ${
              pathname === "/about" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/about"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link
            className={`hover:text-blue-400 text-xl ${
              pathname === "/projects" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/projects"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          {/* <Link
            className={`hover:text-blue-400 text-xl ${
              pathname === "/blogs" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/blogs"
            onClick={toggleMobileMenu}
          >
            Blog
          </Link> */}
          <Link
            className={`hover:text-blue-400 text-xl ${
              pathname === "/contact" ? "text-blue-500 font-semibold" : ""
            }`}
            href="/contact"
            onClick={toggleMobileMenu}
          >
            Contact Me
          </Link>

          {/* Theme toggle */}
          <motion.span
            className="flex gap-2 items-center text-xl cursor-pointer hover:text-blue-400"
            onClick={toggleTheme}
          >
            {darkMode ? <FiSun /> : <FiMoon />} Theme
          </motion.span>
        </ul>
      )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

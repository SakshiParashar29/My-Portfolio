import Link from 'next/link'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Sakshi
            </Link>
            <p className="text-sm text-secondary mt-2">
              © {new Date().getFullYear()} Sakshi&trade;. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/SakshiParashar29"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-blue-800 transition-colors"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-blue-800 transition-colors"
            >
              <FaTwitter className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/sakshi-kumari-753947298"
              target="_blank"
              rel="noopener noreferrer"
              className="dark:text-gray-200 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 
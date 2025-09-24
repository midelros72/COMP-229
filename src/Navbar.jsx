import React, { useEffect } from 'react'
import Logo from './UI/Logo'
import { MdMenu } from 'react-icons/md'

export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center font-mono h-16">
          <Logo />

          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono"
            >
              <MdMenu />
            </div>
          )}

          <div className="hidden md:flex items-center space-x-8 ">
            <a href="#home" className=" text-gray-300 text-lg hover:text-xl hover:text-white transition-all">
              Home
            </a>
            <a href="#about" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">
              About Me
            </a>
            <a href="#projects" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">
              Projects
            </a>
            <a href="#services" className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all">
              Services
            </a>
            <a href="#contact" className="  text-gray-300 text-lg hover:text-xl hover:text-white transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

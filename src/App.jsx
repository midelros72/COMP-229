import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileMenu from './UI/MobileMenu'
import LoadingScreenAnimation from './UI/LoadingScreenAnimation'
import Home from './Sections/Home'
import AnimationWaves from './UI/AnimationWaves'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Services from './Sections/Services' // ✅ import Services
import Projects from './Sections/Projects'


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
     
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Sections on one-page scrolling */}
      <Home />
      <AnimationWaves />
      <About />
      <Projects />
      <Services /> {/* ✅ Services section included */}
      <Contact />
    </>
  )
}

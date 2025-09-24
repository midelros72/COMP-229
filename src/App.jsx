/*
Filename: App.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: App page component — Drives the different  
             pages of my portfolio.*/
             
import React, { useState } from 'react'
import Navbar from './Navbar'
import MobileMenu from './UI/MobileMenu'
//import LoadingScreenAnimation from './UI/LoadingScreenAnimation'
import Home from './Sections/Home'
//import AnimationWaves from './UI/AnimationWaves'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Services from './Sections/Services' 
import Projects from './Sections/Projects'


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
     
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Home />
      <About />
      <Projects />
      <Services /> 
      <Contact />
    </>
  )
}

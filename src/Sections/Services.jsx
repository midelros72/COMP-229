/*
Filename: Services.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: Services page component — lists professional services offered 
             with brief descriptions.*/
             
import React from 'react'
import { FaPaintBrush, FaCode, FaMusic } from 'react-icons/fa'
import bgImage2 from "../assets/BlueBG.png"

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-9 lg:gap-20 px-6 py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage2})` }}
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-teal-200 via-blue-300 to-indigo-400 bg-clip-text text-transparent">
          What I Do?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Web Design */}
          <div className="card bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,5)] transition-transform hover:-translate-y-2 hover:scale-105 w-72">
            <FaPaintBrush className="text-5xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            <p>
              Web designing: static, dynamic, CMS, and eCommerce websites
            </p>
          </div>

          {/* Programming */}
          <div className="card bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,5)] transition-transform hover:-translate-y-2 hover:scale-105 w-72">
            <FaCode className="text-5xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Programming</h3>
            <p>OOP, procedural, and functional programming projects</p>
          </div>

          {/* Music */}
          <div className="card bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_20px_rgba(59,130,246,5)] transition-transform hover:-translate-y-2 hover:scale-105 w-72">
            <FaMusic className="text-5xl text-blue-400 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Music</h3>
            <p>Playing and listening to music is part of my life</p>
          </div>
        </div>
      </div>
    </section>
  )
}

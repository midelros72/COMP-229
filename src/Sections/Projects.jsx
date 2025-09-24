/*
Filename: Projects.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: Projects page component — showcases at least three projects
             with images, descriptions, roles, and outcomes.*/

import React from 'react'
import project1Img from '../assets/practera.jpg'
import project2Img from '../assets/Syncspace.jpg'
import project3Img from '../assets/MMTS.jpg'
import bgImage2 from '../assets/BlueBG.png'

export default function Projects() {
  const projectList = [
    { 
      title: 'Cyberthreat Analysis on Practera Website', 
      description: 'Lead a team that performed cyber threat analysis to a website. We identified all threats and gave our recommendations. Submitted oour analyis report. Project was a success and the management was impressed with our work.',
      image: project1Img 
    },
    { 
      title: 'Applied Industry Project: SyncSpace CRM', 
      description: 'A website built by my students demonstrating a custom CRM System.  Guided them and gave my inputs on the project which resulted in a successful working application and students passed their course.',
      image: project2Img,
      link: "https://ishuca004.wixsite.com/syncspce-2"
    },
    { 
      title: 'Applied Industry Project: MMTS', 
      description: 'As a project advisor that aims to reduce traffic and increase urban mobility. Provided technical and non-technical advice to produce high-quality applications. As a result, the students was able to complete the project and pass the course',
      image: project3Img,
      link: "https://jemishkheni07.wixsite.com/mmtstransit"
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-9 lg:gap-20 px-6 py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage2})` }}
    >
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {projectList.map((project, index) => (
            <div
              key={index}
            className="
                group 
                bg-gray-800 
                rounded-2xl 
                p-6 
                shadow-lg 
                w-72 
                hover:shadow-[0_0_15px_rgba(14,165,233,20)]

                transition-transform 
                transform 
                hover:-translate-y-2 
                hover:scale-105 
                text-left
              "

            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>

             
              <div className="mt-4 overflow-hidden rounded-md h-32 w-full">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </a>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

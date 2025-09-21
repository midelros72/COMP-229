/*
Filename: About.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: About page component — displays personal details, profile
             picture, short biography, and link to downloadable resume.*/

import React from "react";
import { FaEnvelope, FaLinkedin, FaDownload } from "react-icons/fa";
import resume from "../assets/Senior_Mainframe_Developer_Resume_MDR.pdf";
import pic1 from "../assets/mike-pic.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20"
    >
      {/* Container */}
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Photo & Contact */}
        <div className="flex flex-col items-center text-center md:text-left">
          <img
            src={pic1}
            alt="Michael Del Rosario"
            className="w-48 h-48 rounded-full object-cover shadow-lg mb-6"
          />
          <h1 className="text-3xl font-bold">Michael Del Rosario</h1>
          <p className="text-lg text-orange-300 mt-2">
            Mainframe Developer & AI Enthusiast
          </p>

          {/* Contact Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="mailto:midelros@gmail.com"
              className="flex items-center gap-2 bg-teal-500 text-white px-4 py-2 rounded-xl hover:bg-teal-600 transition"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://linkedin.com/in/midelros72"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={resume}
              className="flex items-center gap-2 border border-gray-400 text-white px-4 py-2 rounded-xl hover:bg-gray-100 transition"
            >
              <FaDownload /> Resume
            </a>
          </div>
        </div>

        {/* Right Column - About Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="mb-4 leading-relaxed text-justify">
            Hi, I’m <span className="font-semibold">Michael</span> — a Senior
            Mainframe Developer with over 10 years of experience in COBOL, CICS,
            DB2, and JCL. I’ve worked on large-scale enterprise applications,
            focusing on modernization, optimization, and compliance.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            I am currently pursuing a{" "}
            <span className="font-semibold">
              Software Engineering Technology – Artificial Intelligence
            </span>{" "}
            program, expanding my expertise into modern technologies, Python,
            data science, and AI-driven systems.
          </p>
          <p className="mb-4 leading-relaxed text-justify">
            I’m passionate about bridging the gap between{" "}
            <span className="font-semibold">legacy systems</span> and{" "}
            <span className="font-semibold">modern AI solutions</span>, while
            also mentoring the next generation of IT professionals.
          </p>
          <p className="leading-relaxed mb-6 text-justify">
            When I’m not coding or teaching, I enjoy continuous learning and
            exploring how technology can solve real-world problems.
          </p>

          {/* Skills */}
          <h3 className="text-xl font-semibold text-amber-400 mt-6 mb-3">
            Skills
          </h3>
          <div className="flex flex-wrap justify-start gap-2">
            {[
              "COBOL",
              "CICS",
              "DB2",
              "JCL",
              "Python",
              "SQL",
              "Agile/Waterfall",
              "AI & ML (in progress)",
              "Cybersecurity",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-700 text-white rounded-full text-sm font-medium
                           transition-transform transform hover:-translate-y-1 hover:scale-105 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

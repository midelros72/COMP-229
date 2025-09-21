/*
Filename: Home.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: Home page component — introduces portfolio with welcome 
             message, mission statement, and navigation buttons.*/
             
import profileImg from "../assets/profile-pic.png";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/Senior_Mainframe_Developer_Resume_MDR.pdf";
import React, { useState, useEffect } from "react";

function useTypingEffect(words, typingSpeed, backSpeed, delay) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) setIndex(0);

    const currentWord = words[index];

    if (subIndex === currentWord.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), delay);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(currentWord.substring(0, subIndex));
    }, deleting ? backSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, backSpeed, delay]);

  return text;
}

function AnimatedRole({ text }) {
  return (
    <span
      className="inline-block min-w-[24ch] text-left text-xl md:text-2xl lg:text-3xl font-semibold
        bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent
        transition-opacity duration-700 ease-in-out"
    >
      {text}
      <span className="animate-pulse text-gray-400">|</span>
    </span>
  );
}

export default function Home() {
  const typedText = useTypingEffect(
    ["web developer", "mainframe developer", "cybersecurity analyst"],
    180, // typing speed (slower)
    100, // backspacing speed
    2000 // pause before deleting
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row-reverse justify-center items-center gap-9 lg:gap-20 px-6 max-w-5xl py-16"
    >
      {/* Profile Picture */}
      <div className="z-10 mx-auto lg:mx-0">
        <img
          className="w-[200px] border-0 rounded-full shadow-lg shadow-gray-500/70 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all"
          src={profileImg}
          alt="Profile Image"
        />
      </div>

      {/* Text Block */}
      <div className="font-mono z-10 text-left lg:ml-16">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 text-neutral-50">
          Hello, my name is Michael Del Rosario
        </h1>

        <p className="h-12 mb-6">
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-50">
            I'm a{" "}
          </span>
          <AnimatedRole text={typedText} />
        </p>

        <p className="text-gray-300 text-lg mb-8">
          "I empower organizations to modernize legacy systems, secure digital
          infrastructures, and harness AI-driven solutions, bridging the gap
          between proven enterprise technologies and cutting-edge innovation."
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            className="bg-gradient-to-br flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden"
            href="#contact"
          >
            Contact Me
          </a>

          <a
            className="bg-gradient-to-br flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden"
            href={resume}
          >
            <p>Resume</p>
            <span className="h-5 ml-3 text-2xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/*
Filename: Home.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: Home page component — introduces portfolio with welcome 
             message, mission statement, and navigation buttons.*/
             

import { FiDownload } from "react-icons/fi";
import resume from "../assets/Senior_Mainframe_Developer_Resume_MDR.pdf";
import React, { useState, useEffect } from "react";
import bgImage from "../assets/Mike BG.png"

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
    180, 
    100, 
    2000 
  );

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-9 lg:gap-20 px-6 py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
          

        
      <div className="font-mono z-10 text-left lg:ml-[-6in]">
                <h1 className="text-lg md:text-3xl lg:text-4xl font-bold mb-1 text-neutral-50">
                  Hello, 
                </h1>  
                 
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-1 text-neutral-50">
                my name is
                </h1>

                <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-1 text-amber-400">
                Michael Del Rosario
                </h1>

                

                    <p className="h-12 ">
                      <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-neutral-50">
                        I'm a{" "}
                      </span>
                      <AnimatedRole text={typedText} />
                    </p>

                    <p className="text-gray-300 text-lg mb-8 border border-transparent rounded-lg ">
                     "I empower organizations to modernize legacy systems,<br />
                      secure digital infrastructures, and harness AI-driven solutions,<br />
                      bridging the gap between proven enterprise technologies<br />
                      and cutting-edge innovation."
                    </p>

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

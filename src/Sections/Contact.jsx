/*
Filename: Contact.jsx
Student's Name: Michael Del Rosario
StudentID: 301545834
Date: 2025-09-14 
Description: Contact page component — provides a form for users to submit 
             their contact details and message (stored locally) and displays 
             additional contact information.*/

import React, { useState } from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import bgImage2 from "../assets/BlueBG.png"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
      fd.append("_captcha", "false");
      fd.append("_subject", "Portfolio message");

      const res = await fetch("https://formsubmit.co/ajax/mdelrosario0214@gmail.com", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        alert("✅ Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: "",
          lastName: "",
          contactNumber: "",
          email: "",
          message: "",
        });
      } else {
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Network error. Please check your connection.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-9 lg:gap-20 px-6 py-16 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage2})` }}
    >
      <div className="px-4 max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
        
          <div className="flex flex-col items-start text-left mt-24 md:mt-32">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Contact Information
            </h3>

            <p className="mb-3 text-white">
              <span className="text-2xl text-teal-400 inline-block align-middle mr-2">
                <MdLocationOn />
              </span>
              <span className="font-semibold">Location</span>
              <span className="ml-1">: Toronto, Canada</span>
            </p>

            <p className="mb-3 text-white">
              <span className="text-3xl text-teal-400 inline-block align-middle mr-2">
                <MdEmail />
              </span>
              <span className="font-semibold">Email</span>
              <span className="ml-1">: mdelrosario0214@gmail.com</span>
            </p>

            <p className="mb-3 text-white">
              <span className="text-2xl text-teal-400 inline-block align-middle mr-2">
                <MdPhone />
              </span>
              <span className="font-semibold">Phone</span>
              <span className="ml-1">: +1 (647) 819-8072</span>
            </p>

            <p className="mb-3 text-white">
              <span className="text-2xl text-teal-400 inline-block align-middle mr-2">
                <BsLinkedin />
              </span>
              <span className="font-semibold">LinkedIn</span>
              <span className="ml-1">: www.linkedin.com/midelros72</span>
            </p>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg w-full
                       hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-transform transform hover:-translate-y-2 hover:scale-105 space-y-4"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">
              Send Me a Message
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
                required
              />
            </div>

            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white h-24"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-6 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import logo from "../assets/logo-transparent-png.png";

export default function Logo() {
  return (
    <a href="#home" className="flex items-center select-none group">
      <img
        src={logo}
        alt="Logo"
        className="
          
          w-9 h-auto   
          sm:w-12       
          md:w-16       
          lg:w-20      
          xl:w-24      
          object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />
    </a>
  );
}

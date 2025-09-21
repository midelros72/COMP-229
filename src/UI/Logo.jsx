import React from "react";
import logo from "../assets/logo-transparent-png.png";

export default function Logo() {
  return (
    <a href="#home" className="flex items-center select-none group">
      <img
        src={logo}
        alt="Logo"
        className="
          w-9 h-auto    /* Mobile: ~36px wide */
          sm:w-12       /* Small screens (≥640px): ~48px */
          md:w-16       /* Medium screens (≥768px): ~64px */
          lg:w-20       /* Large screens (≥1024px): ~80px */
          xl:w-24       /* Extra large (≥1280px): ~96px */
          object-contain
          transition-transform duration-300
          group-hover:scale-110
        "
      />
    </a>
  );
}

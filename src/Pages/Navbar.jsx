"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-[#1d1d2281] backdrop-blur-md shadow-lg w-[90%] rounded-full mt-4">
      <div className="mx-auto">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center">
            <a
              href="#"
              className="flex text-3xl font-text font-semibold text-white"
            >
              Grew
            </a>
          </div>

          {/* Desktop Navbar Links */}
          <div className="hidden lg:flex items-center space-x-10 mt-2">
            <a
              href="#"
              className="font-medium font-text text-white text-base hover:text-[#1c8bd5]"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium font-text text-white text-base hover:text-[#1c8bd5]"
            >
              Shop
            </a>
            <a
              href="#"
              className="font-medium font-text text-white text-base hover:text-[#1c8bd5]"
            >
              About
            </a>
            <a
              href="#"
              className="font-medium font-text text-white text-base hover:text-[#1c8bd5]"
            >
              Contact
            </a>
          </div>

          {/* Desktop Sign Up Button */}
          <div className="hidden lg:block">
            <button className="text-black bg-neutral-100 px-7 py-3 font-text font-medium rounded-3xl hover:bg-neutral-200 transition-colors duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Sliding from Left to Right) */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
        style={{
          backgroundColor: "#05050b", // Apply red background when menu is open
          height: "100vh", // Full screen height
          width: "90%", // Ensure the menu takes 90% width on mobile
          left: "50%",
          transform: isMenuOpen ? "translateX(-50%)" : "translateX(-200%)",
          marginTop: "5rem",
          borderRadius: "7px", // Add margin from the top
        }}
      >
        <div className="flex text-start flex-col h-full">
          <div className="flex justify-between text-start items-center p-4">
            <a href="#" className="text-xl font-text font-semibold text-white">
              Grew
            </a>
            <button
              onClick={toggleMenu}
              className="p-1 rounded-md text-white"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 items-start text-start flex-grow">
            <a
              href="#"
              className="py-4 text-center font-medium font-text text-white text-lg hover:text-[#1c8bd5] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="py-4 text-center font-medium font-text text-white text-lg hover:text-[#1c8bd5] transition-colors duration-200"
            >
              Shop
            </a>
            <a
              href="#"
              className="py-4 text-center font-medium font-text text-white text-lg hover:text-[#1c8bd5] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="py-4 text-center font-medium font-text text-white text-lg hover:text-[#1c8bd5] transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <div className="p-4">
            <button className="w-full bg-[#1c8bd5] text-center hover:bg-[#056aad] text-white px-3 py-3 rounded-3xl font-medium font-text text-lg transition-colors duration-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

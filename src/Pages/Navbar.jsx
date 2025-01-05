"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? " bg-[#1d1d2281] backdrop-filter backdrop-blur-md bg-opacity-40  shadow-lg w-[82%]"
          : "bg-[#1d1d2281]"
      } text-white w-[90%] mx-auto rounded-full mt-4`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center">
            <a
              href="#"
              className="flex text-3xl font-text font-semibold text-white"
            >
              Grew{" "}
            </a>
          </div>
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
          <div className="hidden lg:block">
            <button className="text-black bg-neutral-100 px-7 py-3 font-text font-medium rounded-3xl hover:bg-neutral-200 transition-colors duration-200">
              Sign Up
            </button>
          </div>
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
      <div
        className={`fixed inset-0 bg-[#1d1d22] z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out lg:hidden`}
      >
        <div className="flex text-start flex-col h-full">
          <div className="flex justify-between text-start items-center p-4 border-b">
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
              className="py-4 text-center font-meduim font-text text-white text-lg hover:hover:text-[#1c8bd5] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="py-4 text-center font-meduim font-text text-white text-lg hover:hover:text-[#1c8bd5] transition-colors duration-200"
            >
              Shop
            </a>
            <a
              href="#"
              className="py-4 text-center font-meduim font-text text-white text-lg hover:hover:text-[#1c8bd5] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="py-4 text-center font-meduim font-text text-white text-lg hover:hover:text-[#1c8bd5] transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <div className="p-4 border-t">
            <button className="w-full bg-[#1c8bd5] text-center hover:bg-[#056aad] text-white px-3 py-3 rounded-3xl font-medium font-text text-lg transition-colors duration-200">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

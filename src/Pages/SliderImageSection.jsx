"use client";
import { useState, useEffect } from "react";
import PorsheImage from "./porshe.png";
import PorsheImageTwo from "./PorsheTwo.png";
import PorsheImageThree from "./PorsheThree.png";
const images = [PorsheImage, PorsheImageTwo, PorsheImageThree];
export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-1 max-w-7xl h-[500px] overflow-hidden flex items-center justify-center">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute  w-full object-fill transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

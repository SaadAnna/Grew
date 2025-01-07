'use client'
import { useState, useEffect, } from 'react'
import PorsheImage from "./porshe.png";
import PorsheImageTwo from "./PorsheTwo.png";
import PorsheImageThree from "./PorsheThree.png";
const images = [
  PorsheImage,
  PorsheImageTwo,
  PorsheImageThree,
]
export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
      }, 5000)
      return () => clearInterval(interval)
    }, [])
  
    return (
      <div className="relative w-full -mt-52 max-w-3xl mx-auto h-[700px] overflow-hidden">
        {images.map((src, index) => (
          <img
            key={src}
            src={src} 
            alt={`Slide ${index + 1}`}
            className={`absolute top-32 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              />
            ))}
          </div>
        </div>
      )
    }
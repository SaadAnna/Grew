import { useState } from "react";
import PorsheImage from "./PorsheImage.png";
import MercdesImage from "./MercedesImage.png";
import FerrariImage from "./FerrariImage.png";
const cars = [
  {
    id: 1,
    name: " Porshe 911 GT3",
    MoreDetails: "View More",
    description:
      " Track-bred performance with iconic design. Pure driving thrill.",
    image: PorsheImage,
  },
  {
    id: 2,
    name: "Mercedes GLE 300d",
    MoreDetails: "View More",
    description: "Luxury, power, and advanced technology in every drive",
    image: MercdesImage,
  },
  {
    id: 3,
    name: "Ferrari SF90 ",
    MoreDetails: "View More",
    description: "Hybrid power, stunning design, and unmatched performance.",
    image: FerrariImage,
  },
];

export default function SimpleBestSellerSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-center items-center gap-4 mt-32">
        {cars.map((car) => (
          <div
            key={car.id}
            className="relative cursor-pointer w-[300px] h-[400px] bg-[#1d1d224f] backdrop-blur-md shadow-lg rounded-xl p-4"
            onMouseEnter={() => setHoveredId(car.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-contain"
            />
            {hoveredId === car.id && (
              <div className="absolute inset-0 flex gap-2 flex-col text-start bg-black backdrop-blur-sm bg-opacity-20 text-white p-4">
                <h3 className="font-text text-white font-semibold text-2xl">
                  {car.name}
                </h3>
                <p className="font-text text-neutral-300 text-lg font-normal">
                  {car.description}
                </p>
                <a
                  href="#"
                  className="font-text text-lg font-normal text-neutral-500 duration-100 hover:text-neutral-300"
                >
                  {car.MoreDetails}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

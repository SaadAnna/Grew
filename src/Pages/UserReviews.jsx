/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import UserOne from "./UserOne.png";
import UserTwo from "./UserTwo.png";
import UserTHree from "./UserThree.png";
import AOS from "aos";
import "aos/dist/aos.css";
// Sample review data
const reviews = [
  {
    id: 1,
    Image: UserOne,
    name: "Alice Johnson",
    contry: "Morocco",
    review:
      "This is the best car-selling website I’ve used! The platform is user-friendly, the payment process is secure, and delivery was fast. I highly recommend this site to anyone looking for a trusted place to buy cars online",
    rating: 4,
  },
  {
    id: 2,
    Image: UserTwo,
    name: "Bob Smith",
    contry: "USA",
    review:
      "Amazing car dealership with excellent customer support! The website made it easy to find the perfect car, and the entire process was transparent. I’m very satisfied and will definitely shop here again.",
    rating: 4,
  },
  {
    id: 3,
    Image: UserTHree,
    name: "Carol Williams",
    contry: "Canada",
    review:
      "A very reliable and professional online car store! The buying process was smooth, with no hidden fees, and the team was very helpful. I trust this platform for safe and easy car purchases.",
    rating: 4,
  },
];

const UserReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const timer = setInterval(nextReview, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-52">
      <div className="flex flex-col  mx-auto justify-center gap-3">
        <h1
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-semibold text-3xl text-white "
        >
          What do customers say about Grew?          {" "}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="900"
          className="font-text font-normal text-lg md:text-xl  text-neutral-400"
        >
          Make your trust in us more by watching our customers' opinions{" "}
        </p>
      </div>
      <div className="relative overflow-hidden mt-20">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentReview * 100}%)` }}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-[100%] flex-shrink-0">
              <div
                data-aos="fade-up"
                data-aos-duration="900"
                className="bg-[#1d1d2281] gap-2 w-[100%]  h-fit duration-100 ease-linear  cursor-pointer backdrop-blur-sm flex flex-col text-center items-center rounded-lg p-5 hover:backdrop-blur-md "
              >
                <img className="w-12 h-12 rounded-full" src={review.Image} />
                <div>
                  <span className="font-text text-sm font-normal text-neutral-400">
                    {review.contry}
                  </span>
                  <h3 className="font-semibold  text-xl font-text text-white">
                    {review.name}
                  </h3>
                </div>

                <p className="font-text text-lg text-neutral-300 font-normal">
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={prevReview}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2"
          aria-label="Previous review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextReview}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-55 hover:bg-opacity-75 rounded-full p-2 "
          aria-label="Next review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default UserReviews;

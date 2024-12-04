import React, { useState } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const slides = [
    "https://www.taskpulse.in/images/taskpulse1.jpeg",
    "https://www.taskpulse.in/images/taskpulse2.jpeg",
    "https://www.taskpulse.in/images/taskpulse3.jpeg",
    "https://www.taskpulse.in/images/taskpulse4.jpeg",
  ];

  const handlePrev = () => {
    setDirection(-1); // set direction for sliding left
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1); // set direction for sliding right
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <div id="indicators-carousel" className="relative w-full" data-carousel="static">
        <div className="relative h-[150vh] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full  h-full transition-all duration-1000 ease-in-out`}
              style={{
                transform: `translateX(${index === currentSlide ? direction === 1 ? '0%' : '0%' : direction === 1 ? '100%' : '-100%'})`,
                opacity: index === currentSlide ? 1 : 0,
                transition: 'transform 1s ease, opacity 1s ease',
              }}
            >
              <img
                src={slide}
                className="w-full mt-20 object-contain "
                alt={`slide-${index}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 group-hover:bg-black group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 group-hover:bg-black group-focus:ring-4 group-focus:ring-white">
            <svg
              className="w-4 h-4 text-white group-hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;

"use client";

import { useEffect, useRef } from "react";

export default function TaskCards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter((card) => card !== null);
    let animationFrameId;

    const animate = () => {
      const time = Date.now() / 1000;
      cards.forEach((card, index) => {
        const offset = Math.sin(time + index * 0.5) * 10;  // Sinusoidal movement
        card.style.transform = `translateY(${offset}px)`; // Apply continuous movement
      });
      animationFrameId = requestAnimationFrame(animate); // Continue the animation
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup when component unmounts
    };
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-16">
          HERE IS{" "}
          <span className="relative">
            TASK
            <div className="relative w-[200px] mt-3 mx-auto">
              <div className="absolute inset-0 bg-purple-600 h-1.5"></div>

              <div className="absolute left-1/2 top-1/2 w-14 h-2.5 mt-[2px] bg-purple-800 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Data Scraping Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-white border rounded-lg shadow-lg p-6 transition-transform duration-600"
          >
            <div className="flex gap-6">
              <img
                src="https://www.taskpulse.in/images/tasklist3.jpeg"
                alt="Data Scraping"
                className="w-40 h-40 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Data Scraping</h3>
                <p className="text-gray-600 mb-4">
                  Basic requirements - 20+ age, Good typing skills, Basic
                  English, Android mobile required with good Internet
                  connectivity.
                </p>
                <p className="font-semibold">Earning potential: 40000/-</p>
              </div>
            </div>
          </div>

          {/* Store Near Me Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-white border rounded-lg shadow-lg p-6 transition-transform duration-600"
          >
            <div className="flex gap-6">
              <img
                src="https://www.taskpulse.in/images/tasklist1.jpeg"
                alt="Store Near Me"
                className="w-40 h-40 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Store near me</h3>
                <p className="text-gray-600 mb-4">
                  Basic requirements - 20+ age, Good typing skills, good
                  knowledge of ChatGPT, Quick learner, Android mobile required
                  with good internet connectivity.
                </p>
                <p className="font-semibold">Earning potential: 30000/-</p>
              </div>
            </div>
          </div>

          {/* Prompt Pairing Card */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-white border rounded-lg shadow-lg p-6 transition-transform duration-600"
          >
            <div className="flex gap-6">
              <img
                src="https://www.taskpulse.in/images/tasklist2.jpeg"
                alt="Prompt Pairing"
                className="w-40 h-40 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Prompt Pairing</h3>
                <p className="text-gray-600 mb-4">Basic Requirements: 18+ Age, Good Communication.</p>
                <p className="font-semibold">Earning potential: 30000/-</p>
              </div>
            </div>
          </div>

          {/* Profile Creation Card */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-white border rounded-lg shadow-lg p-6 transition-transform duration-600"
          >
            <div className="flex gap-6">
              <img
                src="https://www.taskpulse.in/images/tasklist4.jpeg"
                alt="Profile Creation"
                className="w-40 h-40 object-contain"
              />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Profile Creation</h3>
                <p className="text-gray-600 mb-4">Basic Requirements: 18+ Age, Computer knowledge.</p>
                <p className="font-semibold">Earning potential: 30000/-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

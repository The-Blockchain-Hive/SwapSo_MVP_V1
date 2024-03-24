'use client'
import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from './useWindowSize';

export default function Message() {
  const { width } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-blue-1150">
      {showConfetti && <Confetti width={width} />}
      <div className="flex flex-col items-center">
        <div className="p-6 rounded-lg shadow-md text-center">
          <h1 className="text-3xl text-green-500 mb-4">
            You have joined the waiting list successfully!!!!
          </h1>
          <p className="text-white text-lg mb-8">
            Congratulations! You are now part of our waiting list. Get ready for an amazing experience.
          </p>
          <button className="bg-purple-900 rounded-lg p-2 transform transition-transform hover:scale-105 hover:opacity-90">
            <a href="https://swapso.io/" className="text-white">Return Back to Home Page</a>
          </button>
        </div>
      </div>
    </div>
  );
}

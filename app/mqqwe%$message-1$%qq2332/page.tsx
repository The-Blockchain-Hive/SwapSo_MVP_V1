import React from 'react';

export default function Message() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col items-center">
        <div>
          <h1 className="text-2xl text-green-500">
            You have joined the waiting list successfully!!!!
          </h1>
        </div>
        <div>
          <button className="bg-purple-900 rounded-lg p-2 mt-16 transform transition-transform hover:scale-105 hover:opacity-90">
            <a href="https://swapso.io/">Return Back to Home Page</a>
          </button>
        </div>
      </div>
    </div>
  );
}

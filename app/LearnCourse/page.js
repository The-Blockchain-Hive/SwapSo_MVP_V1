'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SidebarItem = ({ active, value, title, onClick }) => (
  <li
    className={`cursor-pointer py-2 px-4 border-b-2 border-gray-300 flex justify-between items-center ${active ? 'text-green-500' : 'text-black'}`}
    onClick={onClick}
  >
    <div className={`font-bold p-1 border-2 border-black rounded-full w-6 h-6 flex items-center justify-center ${active ? 'bg-green-500 text-white' : 'text-black'}`}>
      {value}
    </div>
    <span>{title}</span>
  </li>
);

const VideoCoursePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentModule, setCurrentModule] = useState(1);
  const totalModules = 4;

  const videoUrl = "https://www.youtube.com/watch?v=qP9U9NEaQHE"; // Replace with your video URL

  function navigateToModule(moduleNumber) {
    setCurrentModule(moduleNumber);
    setSidebarOpen(true);  // Open the sidebar when a module is clicked
  }

  function navigateToNextModule() {
    if (currentModule < totalModules) setCurrentModule(currentModule + 1);
  }

  function navigateToPrevModule() {
    if (currentModule > 1) setCurrentModule(currentModule - 1);
  }

  const progress = (currentModule / totalModules) * 100;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {sidebarOpen ? (
        <div className="bg-white shadow w-64 space-y-4 py-7 px-5 relative" onClick={() => setSidebarOpen(false)}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo.png" width={50} height={50} alt='noe' />
              <h3 className="text-2xl font-semibold text-gray-700 ml-3">Modules</h3>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="bg-gray-200 h-2 w-full rounded">
            <div className="bg-blue-500 h-full rounded-l" style={{ width: `${progress}%` }}></div>
          </div>
          <ul>
            {[...Array(totalModules)].map((_, i) => (
              <SidebarItem
                key={i + 1}
                value={i + 1}
                title={`Module ${i + 1}`}
                active={i + 1 === currentModule}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateToModule(i+1);
                }}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className="bg-white shadow w-20 flex flex-col items-center justify-between py-3 px-2 space-y-4">
          <Image src="/logo.png" width={50} height={50} onClick={() => setSidebarOpen(true)} alt='noe'/> 
          {[...Array(totalModules)].map((_, i) => (
            <div
            key={i}
              className={`font-bold p-1 border-2 border-black rounded-full w-6 h-6 flex items-center justify-center cursor-pointer ${i+1 === currentModule ? 'bg-green-500 text-white' : 'text-black'}`} 
              onClick={() => navigateToModule(i+1)}
            >
              {i+1}
            </div>
          ))}
        </div>
      )}
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-8 space-y-8">
        {/* Video Player */}
        <ReactPlayer url={videoUrl} width="60%" height="60%" controls />
        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2" 
            onClick={navigateToPrevModule}
          >
            <FaChevronLeft size={20} />
            <span>Previous</span>
          </button>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2" 
            onClick={navigateToNextModule}
          >
            <span>Next</span>
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoCoursePage;
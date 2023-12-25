 'use client'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoCoursePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentModule, setCurrentModule] = useState(1);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true after the component mounts on the client side
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const navigateToModule = (moduleNumber) => {
    setCurrentModule(moduleNumber);
    // Add logic to load corresponding video content
  };

  const navigateToNextModule = () => {
    const nextModule = currentModule < 4 ? currentModule + 1 : 4;
    navigateToModule(nextModule);
  };

  const navigateToPrevModule = () => {
    const prevModule = currentModule > 1 ? currentModule - 1 : 1;
    navigateToModule(prevModule);
  };

  const videoUrl = "https://www.youtube.com/watch?v=qP9U9NEaQHE"; // Replace with your video URL

  return (
    <div className="flex">
      {/* Sidebar */}
      {isClient && (
        <div className={`w-64 bg-blue-500 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-center p-4">
            <button onClick={toggleSidebar}>&#9776;</button>
            <img src="/logo.png" alt="Course Icon" className="w-8 h-8" />
          </div>
          <div className="p-4">
            <div className="h-2 bg-white" style={{ width: `${(currentModule - 1) * 25}%` }}></div>
            <ul>
              {[1, 2, 3, 4].map((module) => (
                <li
                  key={module}
                  className={`py-2 cursor-pointer transition-colors ${currentModule === module ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
                  onClick={() => navigateToModule(module)}
                >
                  Module {module}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow p-8">
        {/* Video Lecture */}
        <div className="mb-8 flex justify-center items-center">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="400px"
            controls
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button onClick={navigateToPrevModule} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
          <button onClick={navigateToNextModule} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCoursePage;

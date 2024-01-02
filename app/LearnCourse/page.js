'use client'
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const MiniSidebar = ({ currentModule, navigateToModule }) => (
  <div className="fixed left-0 top-0 h-full bg-white text-blue-500 w-1/12">
    <div className="p-2">
      {/* <button className='my-10' onClick={() => navigateToModule(1)}>&#9776;</button> */}
      <ul className='my-16'>
        {[1, 2, 3, 4].map((module) => (
          <li
            key={module}
            className={`py-2 text-center cursor-pointer transition-colors ${currentModule === module ? 'bg-gray-200' : 'hover:bg-gray-400'}`}
            onClick={() => navigateToModule(module)}
          >
            {module}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

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
        <>
          {isSidebarOpen ? (
            <div className="w-64 h-screen bg-white text-blue-500">
              <div className="flex justify-between items-center p-4">
                <button onClick={toggleSidebar}>&#9776;</button>
                <img src="/logo.png" alt="Course Icon" className="w-14 h-14" />
              </div>
              <div className="p-4">
                <div className="h-2 my-10 border-solid border-2 border-blue-400 bg-blue-400" style={{ width: `${(currentModule - 1) * 25}%` }}></div>
                <ul>
                  {[1, 2, 3, 4].map((module) => (
                    <li
                      key={module}
                      className={`py-2 text-center cursor-pointer transition-colors ${currentModule === module ? 'bg-gray-200' : 'hover:bg-gray-400'}`}
                      onClick={() => navigateToModule(module)}
                    >
                      Module {module}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <MiniSidebar currentModule={currentModule} navigateToModule={navigateToModule} />
          )}
        </>
      )}

      {/* Sidebar Toggle Button */}
      <button
        className="fixed top-4 left-4 z-10 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleSidebar}
      >
        &#9776;
      </button>

      {/* Main Content */}
      <div className="flex-col mx-auto my-auto p-8">
        {/* Video Lecture */}
        <div className=" my-auto mx-auto w-full flex justify-center items-center">
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="400px"
            controls
            config={{
              youtube: {
                playerVars: {
                  modestbranding: 1,
                  showinfo: 0,
                },
              },
            }}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-around ">
          <button onClick={navigateToPrevModule} className="bg-blue-500 text-white px-4 py-2 mr-52 rounded">Previous</button>
          <button onClick={navigateToNextModule} className="bg-blue-500 text-white px-4 py-2 ml-52 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default VideoCoursePage;

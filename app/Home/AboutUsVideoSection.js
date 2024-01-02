// VideoSection.js
import React from 'react';

const VideoSection = () => {
  return (
    <div className="relative w-full h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 ease-in-out" autoPlay loop muted>
        <source src="/about_us.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
        <div className='about_us mt-32'>
            <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">About Us</h2>
        </div>
        <div className='w-full mx-auto mb-12 mt-32'>
       <h1 className='text-justify text-2xl mx-8 mt-12'>
             The Blockchain Hive - an initiative by IIT Bombay students is a platform which is building a decentralised educational system where education will be customized and self-owned. Incentivizing user for their capabilities while learning will increase their efficiency of learning as well as generate more skilled people.
           </h1>
         </div>
       </div>

      {/* <video className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out" loop muted>
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default VideoSection;

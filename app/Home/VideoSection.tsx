// VideoSection.js
import React from 'react';
import Typewriter from 'typewriter-effect';

const VideoSection = () => {
  return (
    <div className="relative w-full h-screen">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 ease-in-out" autoPlay loop muted>
        <source src="/landing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
        <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <Typewriter
               options={{              
                 autoStart: true,
                 loop: true
               }}
               onInit={(typewriter) => {
                 typewriter.typeString(
                   '<span style="color: #b31c96; background-image: -webkit-linear-gradient(0deg, #b31c96 26%, #1e2dbd 100%, #6f54a4 47%); background-clip: text; -webkit-background-clip: text; text-align: center; text-fill-color: transparent; -webkit-text-fill-color: transparent">BUY.LEARN.EARN</span>')
                   .callFunction(() => {
                     console.log('String typed out!');
                   })
                   .pauseFor(2500)
                   .deleteAll()
                   .pauseFor(1500)
                   .start();
               }} />                 
        </h1>
      </div>

      {/* <video className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out" loop muted>
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default VideoSection;

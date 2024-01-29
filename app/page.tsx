"use client"
import React, { useState, useEffect} from 'react';
import Image from 'next/image';
import Navbar from './Home/navbar.jsx';
import Navbar2 from './Home/MobileNavbar.jsx';
import Courses from './Home/courses.jsx';
import TrackPath from './Home/Trackpath.jsx';
import Partner from './Home/partner.jsx';
import JoinUs from './Home/JoinUs.jsx';
import ContactForm from './Home/contact.jsx';
import Footer from './Home/footer.jsx';
import Typewriter from 'typewriter-effect';


export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  return (
      <main className="gradient-bg">
        <div className='nav1'>
        {isMobile ? <Navbar2 /> : <Navbar />}
        </div>
        <div className='flex flex-row'>
          <div className="flex flex-col items-center justify-center h-screen bg-transparent text-white w-screen">
            <div className="flex flex-col items-center justify-center w-full h-1/2 px-12 sm:mt-28 xl:mr-96">
              <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:m-16 md:m-32 lg:m-24 xl:m-8 xl:mr-64">
                <Typewriter
                  options={{
                  autoStart: true,
                  loop: true
                }}
                onInit={(typewriter) => {
                typewriter.typeString(
                  '<span style="color: #b31c96; background-image: -webkit-linear-gradient(0deg, #b31c96 26%, #1e2dbd 100%, #6f54a4 47%); background-clip: text; -webkit-background-clip: text; text-align: center; text-fill-color: transparent; -webkit-text-fill-color: transparent">BUY.LEARN.EARN</span>')
                .pauseFor(2500)
                .deleteAll()
                .pauseFor(1500)
                .start();
              }} />
            </h1>
            {/* <Card/> */}
            <h1 className='text-xl text-justify  w-1/2 xl:mr-48'>
              Platform where you can buy courses, learn and resell to earn from it!
            </h1>
            <div className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4  overflow-hidden relative px-8 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-8 font-bold xl:mr-48"><button className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] ml-20"></button>Blogs ➔</div>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          height="100vh"
          className="absolute z-[-1] w-full lg:w-1/2 lg:mr-64 mx-auto xl:w-1/2 object-cover md:h-full lg:h-3/4 xl:h-3/4 lg:mt-32 xl:mt-32 right-0">
          <source src="/cubic.mp4" type="video/mp4" />
        </video>
      </div>

      <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">About Us</h2>
      <div className="relative">
        <div className='mt-16 w-full mx-auto rounded-lg text-center flex flex-col xl:flex-row lg:flex-row'>
          <div className='w-screen lg:ml-12 xl:ml-32 mx-auto md:w-1/2 overflow-hidden'>
            <video
              autoPlay
              muted
              loop
              className=" w-full z-[-1]"
            >
              <source src="/trackpath.mp4" type="video/mp4" />
            </video>
          </div>
          <div className='w-2/3 lg:mt-16 xl:mt-16 mx-auto sm:w-1/2 md:w-1/2 lg:w-1/2 lg:mr-32 xl:w-1/2 xl:mr-48'>
            <h1 className='text-bold text-indigo-500 text-5xl mb-4'>
              SWAPSO
            </h1>
            <h1 className=' text-xl mx-auto mt-16 text-1xl text-justify'>
              A platform by the learners, for the learners which focuses on increasing completion rates in the edtech industry and incentivizes aka reward people for quick completion of courses.Tailored for skill development courses created by top educators.
            </h1>
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <Courses />
      </div>        
        {/* <div className='mt-24'>
            <FeaturedIn />
        </div> */}
      <div className='mt-12'>
        <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100"> Track Path</h2>
        <TrackPath />
      </div>

      <div className='mt-24'>
        <Partner />
      </div>
      <div className='join_us-main'>
        <JoinUs />
      </div>
      <div>
        <ContactForm />
      </div>
      <Footer />
    </main>
      )
}

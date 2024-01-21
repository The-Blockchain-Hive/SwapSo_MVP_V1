"use client"
import React, { useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import Navbar from './Home/navbar.jsx';
import Navbar2 from './Home/MobileNavbar.jsx';
import Courses from './Home/courses.jsx';
import TrackPath from './Home/TrackPath.jsx';
import FeaturedIn from './Home/featuredIn.jsx' 
import Partner from './Home/partner.jsx';
import JoinUs from './Home/JoinUs.jsx';
import ContactForm from './Home/contact.jsx';
import Footer from './Home/footer.jsx';
import Typewriter from 'typewriter-effect';
import Card from './components/Card.js';



export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
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
              <h1 className="sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:m-16 md:m-32 lg:m-24 xl:m-8 xl:mr-48">
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
            {/* <Card/> */}
            <h1 className='text-xl text-center w-1/2 xl:mr-48'>
              Platform where you can buy courses, learn and resell to earn from it!
            </h1>
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
        <div className='mt-32 w-full mx-auto rounded-lg text-center flex flex-col xl:flex-row lg:flex-row'>
          <div className='w-screen sm:w-2/3 lg:ml-12 xl:ml-24 mx-auto md:w-1/2 overflow-hidden'>
            <Image src="/about.png" width={500} height={100} alt={''} />
          </div>
          <div className='w-screen mx-auto sm:w-1/2 md:w-1/2 lg:w-1/2 lg:mr-16 xl:w-1/2 xl:mr-16'>
            <h1 className='text-bold text-indigo-500 text-5xl mb-4'>SWAPSO</h1>
            <h1 className='text-center mx-auto mt-16 text-1xl text-justify'>
              Swapso - an initiative by IIT Bombay students is a platform which is building a decentralised educational system where education will be customized and self-owned. Incentivizing users for their capabilities while learning will increase their efficiency of learning as well as generate more skilled people.
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
        <video
          autoPlay
          muted
          loop
          className=" w-full object-cover z-[-1]"
        >
          <source src="/trackpath.mp4" type="video/mp4" />
        </video>
        {/* <TrackPath /> */}
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

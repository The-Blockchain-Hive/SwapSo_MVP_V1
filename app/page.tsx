"use client"
import React, { useRef, useState, useEffect} from 'react';
import Navbar from './Home/navbar.jsx';
import Navbar2 from './Home/MobileNavbar.jsx';
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

    handleResize(); // Check on initial render

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
  return (
    <main className="gradient-bg">
      <video 
      autoPlay 
      muted 
      loop
      height="100vh" 
      className="absolute z-[-1] w-full object-cover h-screen md:h-full lg:h-screen xl:h-screen">
        <source src="/landing.mp4" type="video/mp4" />
        </video>
        <div className='nav1'>
        {isMobile ? <Navbar2 /> : <Navbar />}
        </div>
        
      <div className="flex flex-col items-center justify-center h-screen bg-transparent text-white">
        <div className="flex flex-col items-center justify-center justify-center  w-screen h-1/2 px-12">
          <h1 className="s:text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight m-16 md:m-32 lg:m-48 xl:m-32">
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
          <h1 className='text-2xl text-center w-2/4 text-justify'>An Edtech platform where you can buy courses, learn and resell to earn from it</h1>
        </div>
      </div> 
      <div className="relative">
        <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        >
        <source src="/about_us.mp4" type="video/mp4" />
        </video>
        <div className='mt-32'>
          <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">About Us</h2>
          <div className='w-full mx-auto mb-12 mt-32 aspect-w-16 aspect-h-9'>
            <h1 className='text-center w-2/4 text-justify text-2xl mx-auto mt-12'>
              The Blockchain Hive - an initiative by IIT Bombay students is a platform which is building a decentralised educational system where education will be customized and self-owned. Incentivizing users for their capabilities while learning will increase their efficiency of learning as well as generate more skilled people.
            </h1>
          </div>
        </div>
      </div>
        {/* <div className='mt-24'>
          <FeaturedIn />
        </div> */}
        <div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">
          Our Mission
        </h2>
        </div>
      {/* <div>
        <Partner />
      </div> */}  
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

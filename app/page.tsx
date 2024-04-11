"use client"
import React, { useState, useEffect} from 'react';
import Link from 'next/link';
import { metadata } from './metadata.ts';
import Navbar from './Home/navbar.jsx';
import Navbar2 from './Home/MobileNavbar.jsx';
import TrackPath from './Home/TrackPath.jsx';
import Partner from './Home/partner.jsx';
import JoinUs from './Home/JoinUs.jsx';
import CardEffect from './Home/cardseffect.jsx';
import ContactForm from './Home/contact.jsx';
import Footer from './Home/footer.jsx';
// import Desktop from './Home/desktop.jsx'
import Typewriter from 'typewriter-effect';
import Script from 'next/script';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="gradient-bg">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <div className="bg-black bg-opacity-90 text-slate-400 text-center text-xl xl:text-2xl lg:text-2xl md:text-xl p-3 border-white-2 border-t-0 fixed top-0 left-0 right-0 z-50 font-comfortaa">
        Our waiting list is live... <a href="/wl" className="text-pink-500 hover:text-pink-300">Join now!</a>
      </div>
      <Script id="ga-script" async src="https://www.googletagmanager.com/gtag/js?id=G-21492NPCH3"></Script>
      <Script id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-21492NPCH3');
        `}
      </Script>
      <div className='nav1 mt-12'>
        {isMobile ? <Navbar2 /> : <Navbar />}
      </div>
      <div className='flex flex-row'>
        <div className="flex flex-col items-center justify-center h-screen bg-transparent text-white w-screen">
          <div className="flex flex-col items-center justify-center w-full h-1/2 px-12 sm:mt-28 xl:mr-96">
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:m-16 md:m-32 lg:m-24 xl:m-8 xl:mr-48">
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
            <h1 className='text-xl text-justify w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 xl:mr-40'>
              Creating a new educational system which is decentralised, transparent & open to all.
            </h1>
            <div className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 overflow-hidden relative px-8 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-8 font-bold xl:mr-48">
              <button className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] ml-20">name</button>
              <Link href="/wl" target='_blank'>Join Waitlist</Link>
            </div>
          </div>
        </div>
        <video autoPlay muted loop playsInline controls={false} height="100vh" className="absolute z-[-1] w-full lg:w-1/2 lg:mr-64 mx-auto xl:w-1/2 object-cover md:h-full lg:h-3/4 xl:h-3/4 lg:mt-32 xl:mt-32 right-0">
          <source src="/cubic.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">About Us</h2>
      <div className="relative" id='about'>
        <div className='mt-16 w-full mx-auto rounded-lg text-center flex flex-col xl:flex-row lg:flex-row'>
          <div className='w-screen lg:ml-12 xl:ml-32 mx-auto md:w-1/2 overflow-hidden'>
            <video autoPlay muted loop playsInline controls={false} height="100vh" className="w-full z-[-2] h-auto">
              <source src="/about.mp4" type="video/mp4" />
            </video>
          </div>
          <div className='w-2/3 lg:mt-16 mx-auto sm:w-1/2 md:w-3/5 lg:w-1/2 lg:mr-32 xl:w-2/3 xl:mr-80'>
            <h1 className='text-md text-white mx-auto text-justify font-semibold'>
              SwapSo, part of Microsoft for “startups founder hub” & incubated at WISE incubator is an initiative founded by IIT Bombay students. In SwapSo, we are bridging educational institutes on a single decentralised network for an open and transparent global education, accessible to everyone. A platform by the learners, for the learners which focuses on increasing completion rates in the edtech industry and incentivizes aka reward people for quick completion of courses.Tailored for skill development courses created by top educators.
            </h1>
          </div>
        </div>
      </div>
      <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100 p-5"> Highlight Courses</h2>
      <CardEffect />
      <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100 mt-12"> Road Map</h2>
      <div className='mt-12'>
        <TrackPath />
      </div>
      <div className='mt-24' id='partners'>
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

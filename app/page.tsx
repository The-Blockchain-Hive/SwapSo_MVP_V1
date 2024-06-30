"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { metadata } from "./metadata.ts";
import Navbar from "./Home/navbar.tsx";
import Navbar2 from "./Home/MobileNavbar.tsx";
import TrackPath from "./Home/TrackPath.tsx";
import Partner from "./Home/partner.tsx";
import JoinUs from "./Home/JoinUs.tsx";
import CardEffect from "./Home/cardseffect.tsx";
import ContactForm from "./Home/contact.tsx";
import Footer from "./Home/footer.tsx";
import Typewriter from "typewriter-effect";
import Script from "next/script";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleReadMore = () => {
    setShowFullText(true);
  };

  const handleViewLess = () => {
    setShowFullText(false);
  };

  return (
    <main className="gradient-bg">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      {/* <div className="bg-black bg-opacity-90 text-slate-400 text-center text-xl xl:text-2xl lg:text-2xl md:text-xl p-3 border-white-2 border-t-0 fixed top-0 left-0 right-0 z-50 font-comfortaa">
        Our waiting list is live... <a href="/wl" className="text-pink-500 hover:text-pink-300">Join now!</a>
      </div> */}
      <Script
        id="ga-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-21492NPCH3"
      ></Script>
      <Script id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-21492NPCH3');
        `}
      </Script>
      <div className="nav1">{isMobile ? <Navbar2 /> : <Navbar />}</div>
      <div className="flex flex-row">
        <div className="flex flex-col items-center justify-center h-screen bg-transparent text-white w-screen">
          <div className="flex flex-col items-center justify-center w-full h-1/2 px-12 sm:mt-28 xl:mr-96">
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:m-16 md:m-32 lg:m-24 xl:m-8 xl:mr-48">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      '<span style="color: #b31c96; background-image: -webkit-linear-gradient(0deg, #b31c96 26%, #1e2dbd 100%, #6f54a4 47%); background-clip: text; -webkit-background-clip: text; text-align: center; text-fill-color: transparent; -webkit-text-fill-color: transparent">BUY.LEARN.EARN</span>'
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .pauseFor(1500)
                    .start();
                }}
              />
            </h1>
            <h1 className="text-xl w-9/10 md:w-1/2 lg:w-1/2 xl:w-1/2 font-comfortaa">
              An initiative by SwapSo to create Web3 awareness
            </h1>
            <div className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 relative px-8 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group mt-8 font-bold xl:mr-64">
              <Link href="/events" target="_blank">
                Register for Events
              </Link>
            </div>
            {/* <button
                onClick={() => {
                  Router.reload();
                }}
              >
                Click to reload
              </button> */}
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          height="100vh"
          className="absolute z-[-1] w-full lg:w-1/2 lg:mr-64 mx-auto xl:w-1/2 object-cover md:h-3/4 lg:h-3/4 xl:h-3/4 lg:mt-32 xl:mt-32 right-0"
        >
          <source src="/cubic.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <div
        className="relative border border-cyan-400 w-4/5 mx-auto rounded-lg mb-16"
        id="about"
      >
        <h2 className="mt-16 text-5xl mb-4 text-left text-transparent text-white ml-8 lg:ml-32 lg:ml-32 font-comfortaa">
          About <span className="text-cyan-300">Swapso</span>
        </h2>
        <div className="mt-12 mx-auto rounded-lg text-center flex flex-col xl:flex-row lg:flex-row">
          {isMobile ? (
            <p></p>
          ) : (
            <div className="w-screen lg:mt-16 lg:ml-32 xl:ml-32 md:w-1/2">
              <Image
                src="/about2.png"
                alt="logo"
                height={150}
                width={200}
                className="shadow-lg"
              />
            </div>
          )}
          <div className="lg:mt-16 mx-auto ml-8 mr-8 lg:ml-24 xl:ml-24">
            {isMobile ? (
              <div className="text-justify">
                {showFullText ? (
                  <>
                    SwapSo, part of Microsoft for “startups founder hub” &
                    incubated at WISE incubator is an initiative founded by IIT
                    Bombay students. In SwapSo, we are bridging educational
                    institutes on a single decentralised network for an open and
                    transparent global education, accessible to everyone. A
                    platform by the learners, for the learners which focuses on
                    increasing completion rates in the edtech industry and
                    incentivizes aka reward people for quick completion of
                    courses. Tailored for skill development courses created by
                    top educators.
                    <button
                      className="text-blue-500 hover:underline focus:outline-none"
                      onClick={handleViewLess}
                    >
                      View Less
                    </button>
                  </>
                ) : (
                  <>
                    SwapSo, part of Microsoft for “startups founder hub” &
                    incubated at WISE incubator is an initiative founded by IIT
                    Bombay students. In SwapSo, we are bridging educational
                    institutes on a single decentralised network for an open and
                    transparent global education, accessible to everyone.
                    {!showFullText && (
                      <button
                        className="text-blue-500 hover:underline focus:outline-none"
                        onClick={handleReadMore}
                      >
                        Read more
                      </button>
                    )}
                  </>
                )}
              </div>
            ) : (
              <h1 className="w-full text-xl text-white mx-auto text-justify font-comfortaa mb-8 lg:mb-24 xl:mb-24">
                SwapSo, part of Microsoft for “startups founder hub” & incubated
                at WISE incubator is an initiative founded by IIT Bombay
                students. In SwapSo, we are bridging educational institutes on a
                single decentralised network for an open and transparent global
                education, accessible to everyone. A platform by the learners,
                for the learners which focuses on increasing completion rates in
                the edtech industry and incentivizes aka reward people for quick
                completion of courses. Tailored for skill development courses
                created by top educators.
              </h1>
            )}
          </div>
        </div>
      </div> */}
      <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white p-5">
        How to use
      </h2>
      <iframe
      className="mx-auto rounded-3xl mt-12 w-2/3 lg:w-1/2 xl:w-1/2 mx-auto"
      height={500}
        src={`https://www.youtube.com/embed/FEiN177H8_o`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      />
      {/* above courses will come the youtube video */}
      
      <h2 className="text-5xl mt-24 font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white p-5">
        {" "}
        Highlight Courses
      </h2>
      <CardEffect />
      <div className="flex flex row space-x-16 m-8">
      <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/%F0%9D%90%8A%F0%9D%90%A7%F0%9D%90%A8%F0%9D%90%B0?src=hash&amp;ref_src=twsrc%5Etfw">#𝐊𝐧𝐨𝐰</a> 𝐘𝐨𝐮𝐫 𝐒𝐰𝐚𝐩𝐒𝐨<br /><br />Hello everyone,<br />Thank you for visiting the SwapSo. In this thread, we will share the complete journey of SwapSo. <a href="https://t.co/bKQRlecfFm">pic.twitter.com/bKQRlecfFm</a></p>&mdash; SwapSo (@swapso_) <a href="https://twitter.com/swapso_/status/1795197225234022632?ref_src=twsrc%5Etfw">May 27, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>
      <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">What can be stored on a Blockchain? <br />Blockchain typically stores 3 kinds of records - <br />1. Smart contracts <br />2. Digital certificates and signatures <br />3.Asset transactions <br /><br />If you want to understand all these 3 points in detail,comment below.<br /><br /> <a href="https://twitter.com/hashtag/smartcontract?src=hash&amp;ref_src=twsrc%5Etfw">#smartcontract</a> <a href="https://twitter.com/hashtag/digital?src=hash&amp;ref_src=twsrc%5Etfw">#digital</a> <a href="https://twitter.com/hashtag/blockchain?src=hash&amp;ref_src=twsrc%5Etfw">#blockchain</a> <a href="https://t.co/kC4QttXkDW">pic.twitter.com/kC4QttXkDW</a></p>&mdash; SwapSo (@swapso_) <a href="https://twitter.com/swapso_/status/1807318205461057975?ref_src=twsrc%5Etfw">June 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" ></script>
      <blockquote className="twitter-tweet" data-theme="dark"><p lang="en" dir="ltr">Do you still stand in long queues outside banks to perform your financial services ?<br /> <br />If yes , then it&#39;s time to know about Defi . <a href="https://twitter.com/hashtag/banking?src=hash&amp;ref_src=twsrc%5Etfw">#banking</a> <a href="https://twitter.com/hashtag/Defi?src=hash&amp;ref_src=twsrc%5Etfw">#Defi</a> <a href="https://twitter.com/hashtag/blockchain?src=hash&amp;ref_src=twsrc%5Etfw">#blockchain</a> <a href="https://twitter.com/hashtag/security?src=hash&amp;ref_src=twsrc%5Etfw">#security</a> <a href="https://twitter.com/hashtag/transparency?src=hash&amp;ref_src=twsrc%5Etfw">#transparency</a> <a href="https://t.co/RmIjbc9f4b">pic.twitter.com/RmIjbc9f4b</a></p>&mdash; SwapSo (@swapso_) <a href="https://twitter.com/swapso_/status/1805687317837074531?ref_src=twsrc%5Etfw">June 25, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js"></script>      </div>
      {/* <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white mt-12">
        {" "}
        Road Map
      </h2>
      <div className="mt-12">
        <TrackPath />
      </div> */}
      {/* <div className="mt-24" id="partners">
        <Partner />
      </div> */}
      {/* add a blog section over here and */}
      {/* <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white p-5">
        {" "}
        Blogs
      </h2> */}
      {/* <div className="grid grid-cols-3 gap-36 h-[400px] mt-24">
          <div className="border border-solid border-white ml-8 text-center rounded-2xl">
      <Image src="/3.png" height={100} width={400} alt="3" className="rounded-3xl" />
      <div className="bg-[#000000]">
            <p className="font-bold text-cyan-500 text-2xl m-4">Web 3.0</p>
            <p className="mt-4">
              This specially designed course aims to transport you into the world of Web3, the next generation of the internet.
            </p>
          </div>
          </div>
          <div className="border border-solid border-white text-center rounded-2xl">
          <Image src="/4.png" height={100} width={400} alt="4" className="rounded-3xl" />
          <div className="bg-[#000000] text-center m-4">
            <p className="font-bold text-cyan-500 text-2xl">Dapp store creation</p>
            <p className="mt-4">
              Unlock the power of blockchain technology by learning to build your own Decentralized Application DApp store.
            </p>
          </div>
          </div>
          <div className="border border-solid border-white mr-8 text-center rounded-2xl">
          <Image src="/7.png" height={100} width={400} alt="7" className="rounded-2xl" />
          <div className="bg-[#000000]">
            <p className="font-bold text-cyan-500 text-2xl m-4">Blockchain Development</p>
            <p className="mt-4">
                A comprehensive course on development over Ethereum Blockchain and building applications on it.
            </p>
          </div>
          </div>
      </div> */}
      {/* <div className="join_us-main">
        <JoinUs />
      </div> */}
      <div>
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

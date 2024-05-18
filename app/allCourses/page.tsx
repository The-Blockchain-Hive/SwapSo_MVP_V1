"use client";
import React, { useState, useEffect } from "react";
import { metadata } from "./metadata.ts";
import Navbar from "../Home/navbar.tsx";
import Navbar2 from "../Home/MobileNavbar.tsx";
import Card from "../components/Card.tsx";
// import SearchBar from "../components/SearchBar.js";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import Script from "next/script";
import Image from "next/image";
import { CourseType } from "../constants/Types.ts";
import { getCourses } from "../utils/firebase.ts";

const Courses = () => {
  const [coursesData, setCoursesData] = useState<CourseType[]>([]);

  const fetchData = async () => {
    try {
      const coursesSnapshot = await getCourses();

      setCoursesData(coursesSnapshot);
      // console.log(courses);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    fetchData();

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
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
      <div className="py-5 mb-10">
        {/* <SearchBar/> */}
        {/* <button onClick={fetchData}>Testing</button>  */}
      </div>
      <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 mt-24">
        {coursesData.map((course: CourseType, index) => (
          <Card key={index} course={course} />
        ))}
        <div>
          <div className="cards w-[310px] sm:w-[350px] md:w-[350px] lg:w-[373px] xl:w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div>
              <Image
                src="/5.png"
                width={300}
                height={100}
                alt="courses"
                className="object-cover object-top w-full h-1/2 rounded-tr-3xl rounded-tl-3xl"
              />
              <div className="w-full h-1/2 rounded-tr-3xl rounded-tl-3xl"></div>
            </div>
            <div className="flex justify-between p-4">
              <p className="font-extrabold text-2xl">Know Your SwapSo</p>
            </div>
            {/* <p className="px-4 py-2">{course.short_desc}</p> */}
            <div className="flex flex-wrap justify-between px-4">
              <div className=" bg-white px-4 w-max text-black rounded-full">
                <span>Free</span>
              </div>
              <div className="rounded-full px-4 w-max bg-transparent outline">
                <span>15 mins Total</span>
              </div>
            </div>
            <div className="flex justify-between px-4">
              <button className="bg-blue-400 font-extrabold p-2 m-4 rounded-xl">
                About
              </button>
              <button className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl">
                Coming Soon..
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Courses;

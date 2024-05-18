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
      </div>
    </main>
  );
};
export default Courses;

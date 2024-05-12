"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../Home/navbar.tsx";
import Navbar2 from "../Home/MobileNavbar.tsx";
// import SearchBar from "../components/SearchBar";
import MyCourses from "../components/MyCourses.tsx";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import Script from "next/script";

const BuyCourses = () => {
  interface Course {
    AboutCourse: string;
    CourseName: string;
    short_desc: string;
    CourseDuration: number;
    CourseEducator: string;
    CourseImgUrl: number;
    EducatorImgUrl: string;
    EducatorSocials: string;
    Educator_desc: string;
    PricePerDay: number;
    WhatLearn: string;
  }

  const [coursesData, setCoursesData] = useState<Course[]>([]);

  const fetchData = async () => {
    try {
      const coursesSnapshot = await getDocs(collection(db, "Courses"));

      const courses = coursesSnapshot.docs.map((doc) => {
        const ids = doc.id;
        const courseData = doc.data() as Course;
        return { ids, ...courseData };
      });

      setCoursesData(courses);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [purchasedCourses, setPurchasedCourses] = useState<Course[]>([]);

  const handleCoursePurchase = (courseCopy: Course) => {
    setPurchasedCourses((prevCourses) => [...prevCourses, courseCopy]);
  };
  // console.log('Main page', selectedTimeframe);

  return (
    <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
      <head>
        <title>Purchased Courses</title>
        <meta name="description" content="ALl the buyed courses stored here" />
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
      <div className="w-screen flex flex-wrap justify-center py-5 h-screen mt-24">
        <MyCourses />
      </div>
    </main>
  );
};
export default BuyCourses;

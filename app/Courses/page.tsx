'use client'
import React, { useState, useEffect } from "react";
import{ metadata } from './metadata.ts';
import Navbar from "../Home/navbar";
import Navbar2 from "../Home/MobileNavbar";
import Card from "../components/Card.tsx";
import SearchBar from "../components/SearchBar";
import SectionDivider from "../components/SectionDivider";
import MyCourses from "../components/MyCourses.tsx";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import Timer from "../components/timer";
import Script from "next/script";



const Courses = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [showMyCourses, setShowMyCourses] = useState(true);
  const [showAllCourses, setShowAllCourses] = useState(false);

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

  interface TimerProps{
    selectedTimeframe: string
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
      console.error('Error fetching data:', error);
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
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

      

      const [purchasedCourses, setPurchasedCourses] = useState<Course[]>([]);

      const handleCoursePurchase = (courseCopy: Course) => {
        setPurchasedCourses((prevCourses) => [...prevCourses, courseCopy]);
      };
      // console.log('Main page', selectedTimeframe);

      const toggleMyCourses = () => {
        setShowMyCourses(true);
        setShowAllCourses(false);
      }

      const toggleAllCourses = () => {
        setShowMyCourses(false);
        setShowAllCourses(true);
      }

    return(
        <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
          </head>
          <Script id="ga-script" async src="https://www.googletagmanager.com/gtag/js?id=G-21492NPCH3"></Script>
      <Script id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-21492NPCH3');
        `}
      </Script>
          <div className='nav1'>
            {isMobile ? <Navbar2 /> : <Navbar />}
          </div>
        <div className="py-5 mb-10">  
          <SearchBar/>
          {/* <button onClick={fetchData}>Testing</button>  */}
        </div>
        <div className="flex justify-center">
            <button
              onClick={toggleMyCourses}
              className={`text-white px-3 py-1 rounded-md ${showMyCourses ? 'bg-blue-700' : 'bg-gray-400'}`}
            >
              My Courses
            </button>
            <button
              onClick={toggleAllCourses}
              className={`ml-4 text-white px-3 py-1 rounded-md ${showAllCourses ? 'bg-blue-700' : 'bg-gray-400'}`}
            >
              All Courses
            </button>
          </div>
          {showMyCourses && (            
        <div className="w-screen flex flex-wrap justify-center py-5 h-screen">
              <MyCourses />
        </div>
          )}
        {showAllCourses && (
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
            {coursesData.map((course, index) => (
              <Card                    
                CourseId={""} key={index} {...course}                    />
              ))
            }
        </div>
        )}
        </main>
    )
}
export default Courses;
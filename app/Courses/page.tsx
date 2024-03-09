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



const Courses = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

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


    return(
        <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
          <head>
            <title>{metadata.title}</title>
            <meta name="description" content={metadata.description} />
          </head>
          <div className='nav1'>
            {isMobile ? <Navbar2 /> : <Navbar />}
          </div>
        <div className="py-5 mb-10">  
          <SearchBar/>
          {/* <button onClick={fetchData}>Testing</button>  */}
        </div>
        
        <div className="bg-transparent">
          <SectionDivider label="My Courses" />      
        </div>                 
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
              <MyCourses />
        </div>
        <div className="bg-transparent">
          <SectionDivider label="All Courses" />  
          {/* <Timer selectedTimeframe={selectedTimeframe} />   */}
        </div>
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
            {coursesData.map((course, index) => (
              <Card                    
                CourseId={""} key={index} {...course}                    />
              ))
            }
        </div>
        </main>
    )
}
export default Courses;
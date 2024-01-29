'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Home/navbar";
import Navbar2 from "../Home/MobileNavbar";
import Card from "../components/Card.tsx";
import SearchBar from "../components/SearchBar";
import SectionDivider from "../components/SectionDivider";
import MyCourses from "../components/MyCourses.tsx";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js"; 

const MarketPlace = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  interface Course {    
    
    AboutCourse: string;
    CourseName: string;
    short_desc: string;
    CourseDuration: number;
    CourseEducator: string;
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
      console.log(courses);  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

      
      const [isMobile, setIsMobile] = useState(false);
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
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


    return(
        <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
          <div className='nav1'>
            {isMobile ? <Navbar2 /> : <Navbar />}
          </div>
        <div className="py-5 mb-10">  
          <SearchBar/>
          {/* <button onClick={fetchData}>Testing</button>  */}
        </div>
        <div className="flex justify-center py-5">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Course Marketplace
          </h1>
        </div>
        <div className="bg-transparent">
          <SectionDivider label="My Courses" />      
        </div>                 
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
              <MyCourses/>
        </div>
        <div className="bg-transparent">
          <SectionDivider label="Market Place" />      
        </div>
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
            {coursesData.map((course, index) => (
              <Card             
              CourseImgUrl="https://picsum.photos/200/300"             
                    key={index} {...course} 
                    />
              ))
            }
        </div>
        </main>
    )
}
export default MarketPlace;
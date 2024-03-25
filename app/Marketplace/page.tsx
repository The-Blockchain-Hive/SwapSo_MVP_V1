'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Home/navbar";
import { metadata } from "./metadata.ts";
import Navbar2 from '../Home/MobileNavbar.jsx';
import SellCard from "../components/SellCard.tsx";
import SearchBar from "../components/SearchBar";
import MyListings from "../components/MyListings.tsx"
import SectionDivider from "../components/SectionDivider";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import Script from "next/script";

const MarketPlace = () => {
  const[isPopupVisible, setIsPopupVisible] = useState(false);

  // const togglePopup = () => {
  //   setIsPopupVisible(!isPopupVisible);
  // };

  // const handlePurchase = () => {
  //   setIsPopupVisible(false);
  // }
  
  interface Course {    
    
    AboutCourse: string;
    CourseName: string;
    short_desc: string;
    CourseDuration: number;
    CourseImgUrl: number;
    CourseEducator: string;
    EducatorImgUrl: string;
    EducatorSocials: string;
    Educator_desc: string;
    PricePerDay: number;
    WhatLearn: string;
    listingPrice: number;
    
  }

  const [coursesData, setCoursesData] = useState<Course[]>([]);


  const fetchData = async () => {
    try {
      console.log("Fetching data");
      const coursesSnapshot = await getDocs(collection(db, "Marketplace"));

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
      const [showMarketPlace, setShowMarketPlace] = useState(true);
      const [showYourListings, setShowYourListings] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 900);
        };
    
        handleResize();
        fetchData();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const toggleMarketPlace = () => {
        setShowMarketPlace(true);
        setShowYourListings(false);
      };
    
      const toggleYourListings = () => {
        setShowMarketPlace(false);
        setShowYourListings(true);
      };

      
    
      return (
        <main className={`bg-gradient-to-b from-blue-1125 to-blue-1150 ${isPopupVisible ? 'blurred' : ''}`}>
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
            <SearchBar />
          </div>
          <div className="flex justify-center">
            <button
              onClick={toggleMarketPlace}
              className={`text-white px-3 py-1 rounded-md ${showMarketPlace ? 'bg-blue-700' : 'bg-gray-400'}`}
            >
              Market Place
            </button>
            <button
              onClick={toggleYourListings}
              className={`ml-4 text-white px-3 py-1 rounded-md ${showYourListings ? 'bg-blue-700' : 'bg-gray-400'}`}
            >
              Your Listings
            </button>
          </div>
          {showMarketPlace && (
            <div>
              <div className="bg-transparent">
                <SectionDivider label="Market Place" />
              </div>
            </div>
          )}
          {showYourListings && (
            <div><div className="bg-transparent">
            <SectionDivider label="Your Listings"/>                
          </div>
          <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 h-screen">
            <MyListings/>
          </div></div>            
              
          )}
          {showMarketPlace&&(
          <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
              {coursesData.map((course, index) => (
                <SellCard                            
                  CourseId={""} listingComment={""} key={index} {...course}                      />
                ))
              }
              </div>
              )}
              
            
          
          
        </main>
    )
}
export default MarketPlace;
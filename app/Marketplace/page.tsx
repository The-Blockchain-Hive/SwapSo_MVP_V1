'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Home/navbar";
import Navbar2 from '../Home/MobileNavbar.jsx';
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SectionDivider from "../components/SectionDivider";

const MarketPlace = () => {
  const[isPopupVisible, setIsPopupVisible] = useState(false);

  // const togglePopup = () => {
  //   setIsPopupVisible(!isPopupVisible);
  // };

  // const handlePurchase = () => {
  //   setIsPopupVisible(false);
  // }
  

  const courseData =  {
        "courses": [
          {
            "imageURL": "/meta.png",
            "courseTitle": "Introduction to Programming",
            "courseDescription": "Learn the basics of programming with this comprehensive introductory course.",
            "courseDuration": "4 weeks",
            "coursePrice": "$49.99",
            "courseExpiry": "2024-01-01"
          },
          {
            "imageURL": "/metaverse2.png",
            "courseTitle": "Web Development Fundamentals",
            "courseDescription": "Explore the fundamentals of web development, including HTML, CSS.",
            "courseDuration": "6 weeks",
            "coursePrice": "$79.99",
            "courseExpiry": "2024-02-15"
          },
          {
            "imageURL": "/js1.png",
            "courseTitle": "Data Science Essentials",
            "courseDescription": "Dive into the world of data science and learn essential skills for data analysis.",
            "courseDuration": "8 weeks",
            "coursePrice": "$99.99",
            "courseExpiry": "2024-03-30"
          },
          {
            "imageURL": "/js2.png",
            "courseTitle": "Mobile App Development with React Native",
            "courseDescription": "Build cross-platform mobile apps using React Native framework.",
            "courseDuration": "10 weeks",
            "coursePrice": "$119.99",
            "courseExpiry": "2024-04-20"
          }
        ]
      }
      const [isMobile, setIsMobile] = useState(false);
      const [showMarketPlace, setShowMarketPlace] = useState(true);
      const [showYourListings, setShowYourListings] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        handleResize();
    
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
          <div className='nav1'>
            {isMobile ? <Navbar2 /> : <Navbar />}
          </div>
          <div className="py-5 mb-10">
            <SearchBar />
          </div>
          <div className="flex justify-center">
            <button
              onClick={toggleMarketPlace}
              className={`text-white px-3 py-1 rounded-md ${showMarketPlace ? 'bg-blue-500' : 'bg-gray-400'}`}
            >
              Market Place
            </button>
            <button
              onClick={toggleYourListings}
              className={`ml-4 text-white px-3 py-1 rounded-md ${showYourListings ? 'bg-blue-500' : 'bg-gray-400'}`}
            >
              Your Listings
            </button>
          </div>
          {showMarketPlace && (
            <div>
              <div className="bg-transparent">
                <SectionDivider label="Market Place" />
              </div>
              <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
                {courseData.courses.map((course, index) => (
                  <Card key={index} {...course} />
                ))}
              </div>
            </div>
          )}
          {showYourListings && (
            <div>
              <div className="bg-transparent">
                <SectionDivider label="Your Listings" />
              </div>
              <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
                {courseData.courses.map((course, index) => (
                  <Card key={index} {...course} />
                ))}
              </div>
            </div>
          )}
          
        </main>
    )
}
export default MarketPlace;
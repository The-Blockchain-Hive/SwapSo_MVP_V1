'use client'
import React, { useState } from "react";
import Navbar from "../Home/navbar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import SectionDivider from "../components/SectionDivider";

const MarketPlace = () => {

  const [purchasedCourses, setPurchasedCourses] = useState([]);

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
          // Add more courses as needed
        ]
      }
    
      

    return(
        <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
          {/* <div className='nav1'>
          <Navbar/>
        </div> */}
        <div className="py-5 mb-10">  
          <SearchBar/> 
        </div>
        <div className="flex justify-center py-5">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Course Marketplace
          </h1>
        </div>
        <div className="bg-transparent">
          <SectionDivider label="Purchased Courses" />      
        </div>                    
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
            {courseData.courses.map((course, index) => (
              <Card key={index} {...course} />
              ))
            }
        </div>
        <div className="bg-transparent">
          <SectionDivider label="Market Place" />      
        </div>
        <div className=" w-screen flex flex-wrap gap-5 justify-center py-5 ">
            {courseData.courses.map((course, index) => (
              <Card key={index} {...course} />
              ))
            }
        </div>
        </main>
    )
}
export default MarketPlace;
import React from "react";
import Card from "../components/Card";
//import SearchBar from "../components/Searchbar";
import SectionDivider from "../components/SectionDivider";

const MarketPlace = () => {

  const courseData =  {
        "courses": [
          {
            "imageURL": "./pexels.jpg",
            "courseTitle": "Introduction to Programming",
            "courseDescription": "Learn the basics of programming with this comprehensive introductory course.",
            "courseDuration": "4 weeks",
            "coursePrice": "$49.99",
            "courseExpiry": "2024-01-01"
          },
          {
            "imageURL": "",
            "courseTitle": "Web Development Fundamentals",
            "courseDescription": "Explore the fundamentals of web development, including HTML, CSS, and JavaScript.",
            "courseDuration": "6 weeks",
            "coursePrice": "$79.99",
            "courseExpiry": "2024-02-15"
          },
          {
            "imageURL": "",
            "courseTitle": "Data Science Essentials",
            "courseDescription": "Dive into the world of data science and learn essential skills for data analysis.",
            "courseDuration": "8 weeks",
            "coursePrice": "$99.99",
            "courseExpiry": "2024-03-30"
          },
          {
            "imageURL": "",
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
        <main>
        <div className="py-5 mb-10">  
          {/* <SearchBar/> */}
        </div>
        <div className="flex justify-center py-5">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
            Course Marketplace
          </h1>
        </div>
        <div className="bg-transparent">
          <SectionDivider label="Your Listings" />      
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
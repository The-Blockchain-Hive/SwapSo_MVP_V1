import React, { useState } from "react";
import './courses.css';
import Card from "../components/Card";


const Courses = () => {


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

        ]
      }

    return (
        <main>
            <div>
            <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100"> Highlight Courses</h2>
            <div className="mt-8 w-screen flex flex-wrap gap-5 justify-center py-5">
            {courseData.courses.map((course, index) => (
              <Card key={index} {...course} />
              ))
            }
        </div>
            </div>
        </main>
    )
}
export default Courses;
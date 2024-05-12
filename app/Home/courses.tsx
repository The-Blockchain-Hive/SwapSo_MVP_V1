import React, { useState } from "react";
import "./courses.css";
import Card from "../components/Card";
import { CourseType } from "../constants/Types";

const Courses = () => {
  const courseData: CourseType[] = [
    {
      CourseImgUrl: "/meta.png",
      CourseName: "Introduction to Programming",
      short_desc:
        "Learn the basics of programming with this comprehensive introductory course.",
      CourseDuration: 4,
      CourseId: "1",
      AboutCourse: "",
      CourseEducator: "",
      EducatorImgUrl: "",
      EducatorSocials: "",
      Educator_desc: "",
      PricePerDay: 4,
      WhatLearn: [""],
    },
    {
      CourseImgUrl: "/metaverse2.png",
      CourseName: "Web Development Fundamentals",
      short_desc:
        "Explore the fundamentals of web development, including HTML, CSS.",
      CourseDuration: 6,
      CourseId: "2",
      AboutCourse: "",
      CourseEducator: "",
      EducatorImgUrl: "",
      EducatorSocials: "",
      Educator_desc: "",
      PricePerDay: 4,
      WhatLearn: [""],
    },
    {
      CourseImgUrl: "/js1.png",
      CourseName: "Data Science Essentials",
      short_desc:
        "Dive into the world of data science and learn essential skills for data analysis.",
      CourseDuration: 9,
      CourseId: "3",
      AboutCourse: "",
      CourseEducator: "",
      EducatorImgUrl: "",
      EducatorSocials: "",
      Educator_desc: "",
      PricePerDay: 4,
      WhatLearn: [""],
    },
  ];

  return (
    <main>
      <div>
        <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">
          {" "}
          Highlight Courses
        </h2>
        <div className="mt-8 w-screen flex flex-wrap gap-5 justify-center py-5">
          {courseData.map((course, index) => (
            <Card key={index} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Courses;

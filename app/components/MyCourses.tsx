'use client'
import React, {useEffect, useState} from 'react';
import NewCard from './newCard';
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
interface Course {    
    
  AboutCourse: string;
  CourseName: string;
  short_desc: string;
  CourseImgUrl: number;
  CourseDuration: number;
  CourseEducator: string;
  EducatorImgUrl: string;
  EducatorSocials: string;
  Educator_desc: string;
  PricePerDay: number;
  WhatLearn: string;
  
}
// import this down { selectedTimeframe }: { selectedTimeframe: string }
  const MyCourses = () => {

  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const { user } = UserAuth();

  const fetchData = async () => {
    try {
      const userId = user.uid;
      const userRef = doc(db,"Users",userId);      

      const coursesSnapshot = await getDocs(collection(userRef,"My_Courses"));

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

  useEffect(()=>{
     fetchData();
  },[])
  // console.log('my courses time frame',selectedTimeframe);


  return (
    <div>      
      {/* <button onClick={}>Testing 2</button> */}
      {coursesData.map((course, index) => (
              <NewCard                       
          selectedTimeframe="" key={index} {...course}                    />
              ))
            }
    </div>
  );
};

export default MyCourses;
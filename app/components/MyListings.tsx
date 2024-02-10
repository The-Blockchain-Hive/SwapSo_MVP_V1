'use client'
import React, {useEffect, useState} from 'react';
import NewSellCard from './NewSellCard';
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
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
  
}

const MyCourses = () => {

  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const { user } = UserAuth();

  const fetchData = async () => {
    try {
      const userId = user.uid;
      const userRef = doc(db,"Users",userId);      

      const coursesSnapshot = await getDocs(collection(userRef,"My_Listings"));

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


  return (
    <div>      
      {/* <button onClick={}>Testing 2</button> */}
      {coursesData.map((course, index) => (
              <NewSellCard                      
                    key={index} {...course} 
                    />
              ))
            }
    </div>
  );
};

export default MyCourses;

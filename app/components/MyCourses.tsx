'use client'
import React, {useEffect, useState} from 'react';
import NewCard from './newCard';
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
interface Course {    
  CourseId: string;  
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
      const userRef = doc(db, "Users", userId);
      const coursesRef = collection(userRef, "My_Courses");
  
      // Fetch all courses for the user
      const querySnapshot = await getDocs(coursesRef);
      const coursessData: Course[] = querySnapshot.docs.map((doc) => {
        const courseId = doc.id; // Get the ID of the document
        const courseData = doc.data() as Course; // Cast to Course type
        return { id: courseId, ...courseData }; // Combine ID and course data
      });
  
      setCoursesData(coursessData);
      // console.log(coursesData);  
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  

  useEffect(()=>{
     fetchData();
  },[coursesData])
  // console.log('my courses time frame',selectedTimeframe);


  return (
    <div className='flex flex-wrap justify-center gap-4 py-5'>      
      {/* <button onClick={}>Testing 2</button> */}
      {coursesData.map((course, index) => (
              <NewCard                       
          selectedTimeframe="" key={index} {...course}
          />
              ))
            }
    </div>
  );
};

export default MyCourses;
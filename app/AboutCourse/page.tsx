// components/CoursePage.js
'use client'
import React, {useState, useEffect, Suspense} from 'react';
import HeroSection from './hero';
import AboutSection from './about';
import WhatWillYouLearnSection from './whatlearn';
import MentorSection from './mentor';
import CurriculumSection from './curriculum';
import { getDocs, collection, doc, setDoc, query, where } from "firebase/firestore";
import { db } from "../firebase.js"; 
import { useSearchParams } from 'next/navigation';


const CoursePage = () => {

  interface Course {    
    
    AboutCourse: string;
    CourseName: string;
    short_desc: string;
    CourseDuration: number;
    CourseEducator: string;
    CourseImgUrl: number;
    EducatorImgUrl: string;
    EducatorSocials: string;
    Educator_desc: string;
    PricePerDay: number;
    WhatLearn: string;
    
  }

  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const searchParams = useSearchParams();
  const CourseName = searchParams.get('CourseName');

  const fetchData = async () => {
    try {
      console.log(CourseName);
      const q = query(collection(db,"Courses"), where("CourseName","==",CourseName));

      const querySnapshot = await getDocs(q);      
      const courses = querySnapshot.docs.map((doc)=>{
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

  useEffect(()=>{
    fetchData();
  },[])
 


  return (
    <Suspense>
      {/* <button onClick={fetchData}>Test</button> */}
      <HeroSection coursesData={coursesData}/>
      <AboutSection coursesData={coursesData}/>
      <WhatWillYouLearnSection coursesData={coursesData}/>
      <MentorSection coursesData={coursesData}/>
      {/* <CurriculumSection coursesData={coursesData}/>  */}
    </Suspense>
  );
};

export default CoursePage;

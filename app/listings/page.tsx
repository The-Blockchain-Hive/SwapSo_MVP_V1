'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Home/navbar.tsx";
import Navbar2 from '../Home/MobileNavbar.tsx';
import MyListings from "../components/MyListings.tsx"
import SectionDivider from "../components/SectionDivider";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.js";
import Script from "next/script";

const Listings = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [coursesData, setCoursesData] = useState<{ ids: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      console.log("Fetching data");
      const coursesSnapshot = await getDocs(collection(db, "Marketplace"));

      const courses = coursesSnapshot.docs.map((doc) => {
        const ids = doc.id;
        const courseData = doc.data();
        return { ids, ...courseData };
      });

      setCoursesData(courses);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <main className={`bg-gradient-to-b from-blue-1125 to-blue-1150 ${isPopupVisible ? 'blurred' : ''}`}>
      <head>
        <title>Your Listings</title>
        <meta name="description" content='All of your listed courses over here' />
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
        {typeof window !== 'undefined' && window.innerWidth <= 900 ? <Navbar2 /> : <Navbar />}
      </div>
      <div className="py-5 mb-10">
        {/* <SearchBar /> */}
      </div>
        <div className="mt-24">
          <div className="bg-transparent">
            <SectionDivider label="Your Listings" />
          </div>
          <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
            <MyListings/>
          </div>
        </div>
    </main>
  )
}

export default Listings;

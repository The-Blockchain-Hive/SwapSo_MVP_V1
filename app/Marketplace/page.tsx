'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../Home/navbar";
import { metadata } from "./metadata.ts";
import Navbar2 from '../Home/MobileNavbar.jsx';
import MyListings from "../components/MyListings.tsx"
import SectionDivider from "../components/SectionDivider";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.js";
import Script from "next/script";
import SearchBar from "../components/SearchBar.js";
import SellCard from "../components/SellCard.tsx";

const MarketPlace = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [coursesData, setCoursesData] = useState<{ ids: string }[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showListingsPage, setShowListingsPage] = useState(false);

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

  const itemsPerPage = 9;
  const totalPages = Math.ceil(coursesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = coursesData.slice(startIndex, endIndex);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <main className={`bg-gradient-to-b from-blue-1125 to-blue-1150 ${isPopupVisible ? 'blurred' : ''}`}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
        <SearchBar />
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowListingsPage(false)}
          className={`text-white px-3 py-1 rounded-md bg-${!showListingsPage ? 'blue-700' : 'gray-400'}`}
        >
          Market Place
        </button>
        <button
          onClick={() => setShowListingsPage(true)}
          className={`ml-4 text-white px-3 py-1 rounded-md bg-${showListingsPage ? 'blue-700' : 'gray-400'}`}
        >
          Your Listings
        </button>
      </div>
      {showListingsPage ? (
        <div>
          <div className="bg-transparent">
            <SectionDivider label="Your Listings" />
          </div>
          <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
            <MyListings/>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-transparent">
            <SectionDivider label="Market Place" />
          </div>
          <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
            {currentItems.map((course, index) => (
              <SellCard AboutCourse={""} CourseName={""} CourseImgUrl={0} short_desc={""} CourseDuration={0} CourseEducator={""} EducatorImgUrl={""} EducatorSocials={""} Educator_desc={""} PricePerDay={0} WhatLearn={""} listingPrice={0} CourseId={""} listingComment={""} key={index} {...course} />
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page + 1)}
                className={`px-3 py-1 rounded-md ${currentPage === page + 1 ? 'bg-blue-700 text-white' : 'bg-gray-400 text-black'}`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

export default MarketPlace;

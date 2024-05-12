"use client";
import React, { useState, useEffect } from "react";
import { readContract, getNetwork } from "@wagmi/core";
import Navbar from "../Home/navbar";
import { metadata } from "./metadata.ts";
import Navbar2 from "../Home/MobileNavbar.tsx";
import SectionDivider from "../components/SectionDivider";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase.js";
import Script from "next/script";
import SearchBar from "../components/SearchBar.tsx";
import SellCard from "../components/SellCard.tsx";
import { ContractAddress } from "../config/config.ts";
import CourseABI from "../constants/ABI/Course.json";
import { useAccount } from "wagmi";
import { CourseType } from "../constants/Types.ts";
import Link from "next/link";

const MarketPlace = () => {
  const { address } = useAccount();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [coursesData, setCoursesData] = useState<CourseType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    try {
      console.log("Fetching data");
      const coursesSnapshot = await getDocs(collection(db, "Marketplace"));

      const courses: any = coursesSnapshot.docs.map((doc) => {
        const ids = doc.id;
        const courseData = doc.data();
        return { ids, ...courseData };
      });

      setCoursesData(courses);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function fetchListedCourses() {
    const network = getNetwork()?.chain?.id
      ? getNetwork()?.chain?.id
      : "default";

    console.log({ network });

    const allCourses: any = await readContract({
      address: ContractAddress[`${network}`].course,
      abi: CourseABI.abi,
      functionName: "getListOfCourses",
    });

    console.log({ allCourses });

    const data = [];

    if (allCourses && allCourses?.length) {
      for (let i = 0; i < allCourses?.length; i++) {
        const resp: any = await readContract({
          address: ContractAddress[`${network}`].course,
          abi: CourseABI.abi,
          functionName: "getCourseDetails",
          args: [allCourses[i]],
        });

        console.log({ resp });
        if (
          resp.isListed &&
          resp.holder.toLowerCase() !== address?.toLowerCase()
        ) {
          const r: CourseType = {
            CourseId: resp.courseId,
            CourseImgUrl: resp.courseNumber,
            CourseDuration: resp.duration,
            PricePerDay: resp.price,
            // "e": resp.holder,
            // "e": resp.id,
            // "e": resp.isListed,
            // "e": resp.pausedTime,
            // "e": resp.recommendedDuration,
            // "e": resp.secondHolder,
            // "e": resp.startTime,

            AboutCourse: "string",
            CourseName: "string",
            short_desc: "string",
            CourseEducator: "string",
            EducatorImgUrl: "string",
            EducatorSocials: "string",
            Educator_desc: "string",

            WhatLearn: ["string"],

            listingPrice: resp.price,
            listingComment: "string",

            // isListed: resp.isListed,
          };

          data.push(r);
        }
      }
    }

    console.log({ data });
    data.push(...coursesData);
    setCoursesData(data);
  }

  useEffect(() => {
    fetchListedCourses();

    // fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const itemsPerPage = 9;
  const totalPages = Math.ceil(coursesData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems: any = coursesData.slice(startIndex, endIndex);

  const handlePageChange = (page: React.SetStateAction<number>) => {
    setCurrentPage(page);
  };

  return (
    <main
      className={`bg-gradient-to-b from-blue-1125 to-blue-1150 ${
        isPopupVisible ? "blurred" : ""
      }`}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <Script
        id="ga-script"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-21492NPCH3"
      ></Script>
      <Script id="ga-script">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-21492NPCH3');
        `}
      </Script>
      <div className="nav1">
        {typeof window !== "undefined" && window.innerWidth <= 900 ? (
          <Navbar2 />
        ) : (
          <Navbar />
        )}
      </div>
      <div className="py-5 mb-10">
        <SearchBar />
      </div>
      <div className="flex justify-center">
        <Link href='/listings'>
        <button className="bg-indigo-500 text-black rounded-lg"></button>
        </Link>
      </div>
        <div>
          <div className="bg-transparent">
            <SectionDivider label="Your Listings" />
          </div>
        </div>
        <div>
          <div className="bg-transparent">
            <SectionDivider label="Market Place" />
          </div>
          <div className="w-screen flex flex-wrap gap-5 justify-center py-5">
            {currentItems.map((course: any, index: number) => (
              <SellCard course={course} selectedTimeFrame={"1"} key={index} />
            ))}
          </div>
          <div className="flex justify-center space-x-2">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === page + 1
                    ? "bg-blue-700 text-white"
                    : "bg-gray-400 text-black"
                }`}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
    </main>
  );
};

export default MarketPlace;

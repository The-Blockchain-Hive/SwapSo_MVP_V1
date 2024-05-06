"use client";
import React, { useEffect, useState } from "react";
import { utils } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import { useDataContext } from "../context/DataContextProvider.jsx";
import NewSellCard from "./NewSellCard";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
import { ContractAddress } from "../config/config.ts";
import CourseABI from "../../blockchain_hive_contracts/artifacts/contracts/V1/Course.sol/Course.json";
import MarketABI from "../../blockchain_hive_contracts/artifacts/contracts/V1/Market.sol/Market.json";

interface Course {
  CourseId: string;
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
  const { address } = useDataContext();
  const [coursesData, setCoursesData] = useState<Course[]>([]);
  const { user } = UserAuth();

  const fetchData = async () => {
    try {
      const userId = user.uid;
      const userRef = doc(db, "Users", userId);

      const coursesSnapshot = await getDocs(collection(userRef, "My_Listings"));

      const courses = coursesSnapshot.docs.map((doc) => {
        const ids = doc.id;
        const courseData = doc.data() as Course;
        return { ids, ...courseData };
      });

      setCoursesData(courses);
      // console.log(courses);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  async function fetchMyListings() {
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
          resp.holder.toLowerCase() === address.toLowerCase()
        ) {
          const r = {
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

            WhatLearn: "string",

            // isListed: resp.isListed,
          };

          data.push(r);
        }
      }
    }

    console.log({ data });
    setCoursesData(data);
  }

  useEffect(() => {
    fetchMyListings();
    fetchData();
  }, [coursesData.length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {coursesData.length === 0 ? (
        <p className="font-bold text-3xl font-comfortaa">NOTHING LISTED </p>
      ) : (
        coursesData.map((course, index) => (
          <NewSellCard key={index} {...course} />
        ))
      )}
    </div>
  );
};

export default MyCourses;

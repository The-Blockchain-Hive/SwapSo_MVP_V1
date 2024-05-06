"use client";
import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { useAccount } from "wagmi";
import { readContract, getNetwork } from "@wagmi/core";
import NewCard from "./newCard";
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
  CourseImgUrl: number;
  CourseDuration: number;
  CourseEducator: string;
  EducatorImgUrl: string;
  EducatorSocials: string;
  Educator_desc: string;
  PricePerDay: number;
  WhatLearn: string;
  isListed: boolean;
}

// import this down { selectedTimeframe }: { selectedTimeframe: string }
const MyCourses = () => {
  const { isConnected, address } = useAccount();
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
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const fetchUserCourses = async () => {
    const network = getNetwork()?.chain?.id
      ? getNetwork()?.chain?.id
      : "default";

    console.log({ network });

    const userCourses: any = await readContract({
      address: ContractAddress[`${network}`].course,
      abi: CourseABI.abi,
      functionName: "getUserCourse",
      args: [address],
    });

    console.log({ userCourses });

    const data = [];

    if (userCourses && userCourses?.length) {
      for (let i = 0; i < userCourses?.length; i++) {
        const resp: any = await readContract({
          address: ContractAddress[`${network}`].course,
          abi: CourseABI.abi,
          functionName: "getCourseDetails",
          args: [userCourses[i]],
        });

        console.log({ resp });
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

          isListed: resp.isListed,
        };
        data.push(r);
      }
    }

    setCoursesData(data);
  };

  useEffect(() => {
    fetchUserCourses();

    fetchData();
  }, [coursesData.length]);
  // console.log('my courses time frame',selectedTimeframe);

  return (
    <div className="flex flex-wrap justify-center gap-4 py-5">
      {coursesData.length === 0 ? (
        <p className="text-3xl text-purple-700 font-comfortaa">
          Uh-oh! Your course cart is empty
        </p>
      ) : (
        coursesData.map((course, index) => (
          <NewCard selectedTimeframe="1" key={index} {...course} />
        ))
      )}
    </div>
  );
};

export default MyCourses;

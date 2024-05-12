"use client";
import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { useAccount } from "wagmi";
import { readContract, getNetwork } from "@wagmi/core";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
import { ContractAddress } from "../config/config.ts";
import CourseABI from "../constants/ABI/Course.json";
import { CourseType } from "../constants/Types.ts";
import NewCard from "./NewCard.tsx";

// import this down { selectedTimeframe }: { selectedTimeframe: string }
const MyCourses = () => {
  const { isConnected, address } = useAccount();
  const [coursesData, setCoursesData] = useState<CourseType[]>([]);
  const { user } = UserAuth();

  const fetchData = async () => {
    try {
      const userId = user.uid;
      const userRef = doc(db, "Users", userId);
      const coursesRef = collection(userRef, "My_Courses");

      // Fetch all courses for the user
      const querySnapshot = await getDocs(coursesRef);
      const coursessData: CourseType[] = querySnapshot.docs.map((doc) => {
        const courseId = doc.id; // Get the ID of the document
        const courseData = doc.data() as CourseType; // Cast to Course type
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

    const data: CourseType[] = [];

    if (userCourses && userCourses?.length) {
      for (let i = 0; i < userCourses?.length; i++) {
        const resp: any = await readContract({
          address: ContractAddress[`${network}`].course,
          abi: CourseABI.abi,
          functionName: "getCourseDetails",
          args: [userCourses[i]],
        });

        console.log({ resp });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coursesData.length]);

  return (
    <div className="flex flex-wrap justify-center gap-4 py-5">
      {coursesData.length === 0 ? (
        <p className="text-3xl text-purple-700 font-comfortaa">
          Uh-oh! Your course cart is empty
        </p>
      ) : (
        coursesData.map((course, index) => (
          <NewCard selectedTimeFrame="1" key={index} course={course} />
        ))
      )}
    </div>
  );
};

export default MyCourses;

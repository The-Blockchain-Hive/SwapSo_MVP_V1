"use client";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import NewSellCard from "./NewSellCard";
import { getDocs, collection, doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
import { ContractAddress } from "../config/config.ts";
import CourseABI from "../constants/ABI/Course.json";
import { CourseType } from "../constants/Types.ts";
import { getCourseWithId } from "../utils/firebase.ts";

const MyCourses = () => {
  const { address } = useAccount();

  const [coursesData, setCoursesData] = useState<CourseType[]>([]);
  const { user } = UserAuth();

  const fetchData = async () => {
    try {
      const userId = user.uid;
      const userRef = doc(db, "Users", userId);

      const coursesSnapshot = await getDocs(collection(userRef, "My_Listings"));

      const courses = coursesSnapshot.docs.map((doc) => {
        const ids = doc.id;
        const courseData = doc.data() as CourseType;
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

    const data: CourseType[] = [];

    if (allCourses && allCourses?.length) {
      for (let i = 0; i < allCourses?.length; i++) {
        const resp: any = await readContract({
          address: ContractAddress[`${network}`].course,
          abi: CourseABI.abi,
          functionName: "getCourseDetails",
          args: [allCourses[i]],
        });

        if (
          resp.isListed &&
          resp.holder.toLowerCase() === address?.toLowerCase()
        ) {
          const courseDetails: CourseType = await getCourseWithId(resp.dbId);
          console.log({ resp });

          console.log({ resp });
          console.log({ courseDetails });

          courseDetails.CourseDbId = resp.dbId;
          courseDetails.CourseId = resp.courseId;
          courseDetails.CourseDuration = Number(resp.duration);
          courseDetails.PricePerDay = Number(resp.price);

          courseDetails.startTime = Number(resp.startTime);
          courseDetails.isListed = resp.isListed;
          courseDetails.pausedTime = Number(resp.pausedTime);
          courseDetails.holder = resp.holder;
          courseDetails.secondHolder = resp.secondHolder;

          // console.log({ r });
          data.push(courseDetails);

        }
      }
    }

    console.log({ data });
    setCoursesData(data);
  }

  useEffect(() => {
    fetchMyListings();
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coursesData.length]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
      {coursesData.length === 0 ? (
        <p className="font-bold text-3xl font-comfortaa">NOTHING LISTED </p>
      ) : (
        coursesData.map((course, index) => (
          <NewSellCard key={index} course={course} selectedTimeFrame="1" />
        ))
      )}
    </div>
  );
};

export default MyCourses;

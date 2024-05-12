"use client";
import React, { useState } from "react";
import "../Home/courses.css";
import Link from "next/link";
import Image from "next/image";
import PopUp from "./Popup";

import { CourseType, CardType } from "../constants/Types";

// const Card: React.FC<CardType> = (props) => {
const Card = ({ course }: CardType) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseType>(course);

  const togglePopup = async () => {
    setCurrentCourse(course);
    setIsPopupVisible(!isPopupVisible);
  };
  const handlePurchase = async () => {
    setIsPopupVisible(false);
  };

  const handleAboutClick = () => {
    // Use Next.js router to navigate to the AboutCourse page with query parameters
    window.location.href = `/AboutCourse?CourseName=${currentCourse?.CourseName}`;
  };

  const imgUrl = `/${currentCourse?.CourseImgUrl}.png`;

  return (
    <div>
      <div className="cards w-[310px] sm:w-[350px] md:w-[350px] lg:w-[373px] xl:w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div>
          <Image
            src={imgUrl}
            width={300}
            height={100}
            alt="courses"
            className="object-cover object-top w-full h-1/2 rounded-tr-3xl rounded-tl-3xl"
          />
          <div className="w-full h-1/2 rounded-tr-3xl rounded-tl-3xl"></div>
        </div>
        <div className="flex justify-between p-4">
          <p className="font-extrabold text-2xl">{currentCourse?.CourseName}</p>
        </div>
        {/* <p className="px-4 py-2">{currentCourse?.short_desc}</p> */}
        <div className="flex flex-wrap justify-between px-4">
          <div className=" bg-white px-4 w-max text-black rounded-full">
            <span>${currentCourse?.PricePerDay}/day</span>
          </div>
          <div className="rounded-full px-4 w-max bg-transparent outline">
            <span>{currentCourse?.CourseDuration} Hours Total</span>
          </div>
        </div>
        <div className="flex justify-between px-4">
          <Link href="/AboutCourse">
            <button
              onClick={handleAboutClick}
              className="bg-blue-400 font-extrabold p-2 m-4 rounded-xl"
            >
              About
            </button>
          </Link>
          <button
            onClick={togglePopup}
            className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl"
          >
            Buy Course
          </button>
        </div>
        {isPopupVisible && (
          <div className="fixed inset-0 z-100 backdrop-filter backdrop-blur-md flex items-center justify-center">
            <PopUp
              handleClose={handlePurchase}
              currentCourse={currentCourse}
              courseName={currentCourse?.CourseName || ""}
            ></PopUp>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;

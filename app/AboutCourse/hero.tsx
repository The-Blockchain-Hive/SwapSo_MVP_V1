import React from "react";
import Image from "next/image";
import { HeroSectionType } from "../constants/Types";

export default function HeroSection(props: HeroSectionType) {
  function test() {
    console.log(props);
  }
  const { coursesData } = props;

  const imgUrl = `/${coursesData[0]?.CourseImgUrl}.png`;

  return (
    <section className="bg-white text-black p-8 flex lg:flex-row md:flex-col justify-between items-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-8 ml-12">
        <span className="block mb-8 font-extrabold text-gray-400">
          <a href="/Courses">All Courses</a> &gt; {coursesData[0]?.CourseName}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">
          {coursesData[0]?.CourseName}
        </h1>
        <p className="text-teal-600 mb-10 text-lg mt-8 md:text-3xl lg:text-3xl xl:text-xl">
          {coursesData[0]?.short_desc}
        </p>

        <div className="flex flex-wrap mb-10">
          {/* Tags */}
          {coursesData[0]?.WhatLearn.slice(0, 3).map((tag, index) => (
            <div
              key={index}
              className=" m-1 bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            >
              <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              {tag}
            </div>
          ))}
        </div>

        {/* <button
          onClick={test}
          className="w-2/3 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 rounded-md bg-sky-800 font-extrabold"
        >
          Start Learning
        </button> */}
      </div>

      <div className="w-full lg:w-1/2 xl:w-1/2 p-8 flex justify-center items-center">
        <div className="overflow-hidden rounded-xl">
          <Image
            src={imgUrl}
            width={800}
            height={800}
            alt={coursesData[0]?.CourseName}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}

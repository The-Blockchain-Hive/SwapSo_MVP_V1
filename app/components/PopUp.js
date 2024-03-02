import React, { useState, useEffect } from "react";
import Timer from "./timer.tsx";
import { useDataContext } from "../context/DataContextProvider.jsx";
import { UserAuth } from "../context/AuthContext.js";
import { db } from "../firebase.js";
import { doc, collection, serverTimestamp, setDoc } from "firebase/firestore";
// import NewCard from "./newCard.tsx";


function PopUp({ handleClose, currentCourse, courseName }) {  

  // const [isPurchaseComplete, setPurchaseComplete] = useState(false);
  const { address, chain, payFees } = useDataContext();
  const { user } = UserAuth();
  
  async function handlePay(course) {
    const userId = user.uid;
    const userRef = doc(db, "Users", userId);
    const coursesRef = collection(userRef, "My_Courses"); // Subcollection for courses
  
    try {
      // Add a new document for each purchased course
      await setDoc(doc(coursesRef), {
        courseId: course.CourseId,       
        courseName: course.CourseName,
        AboutCourse: course.AboutCourse,
        CourseName: course.CourseName,
	    CourseImgUrl: course.CourseImgUrl,
        short_desc: course.short_desc,
        CourseDuration: course.CourseDuration,
        CourseEducator: course.CourseEducator,
        EducatorImgUrl: course.EducatorImgUrl,
        EducatorSocials: course.EducatorSocials,
        Educator_desc: course.Educator_desc,
        PricePerDay: course.PricePerDay,
        WhatLearn: course.WhatLearn,	 
        purchaseDate: serverTimestamp(),
      });
      console.log("course pushed to my courses");
    } catch (error) {
      console.log(error);
    }
  
    handleClose();
  }
  const [Price, setPrice] = useState(5);
  const [selectedDay, setselectedDay] = useState('1 day')
  const [selectedTimeframe, setselectedTimeframe] = useState('1');

  const handleTimeframeChange = (e) => {
      const inputDays = parseInt(e.target.value);
      setselectedTimeframe(inputDays.toString())
      const calculatedPrice = inputDays * 1;
      setPrice(calculatedPrice);
      setselectedDay(inputDays);
    }
  

    return (
        <>
        <div className="flex justify-between p-4">
            <div className="flex items-center">
                <div className="w-[310px] md:w-[350px] lg:w-[400px] xl:w-[400px] h-[276px] relative bg-white rounded-2xl">
                    <div className="w-[130px] md:w-[130px] lg:w-[145px] xl:w-[150px] h-[46px] px-[69px] pt-4 pb-[15px] left-[22px] top-[213px] absolute rounded-[5px] border border-red-600 justify-center items-center inline-flex">
                        <button onClick={handleClose} className="text-red px-4 py-2 rounded-md text-justify text-red-600 text-xl font-medium font-['Inter'] leading-[17px]">Cancel
                        </button>
                    </div>
                    <div className="w-[130px] md:w-[130px] lg:w-[145px] xl:w-[145px] h-[46px] px-[63px] pt-4 pb-[15px] left-[175px] md:left-[200px] lg:left-[225px] xl:left-[225px] top-[213px] absolute bg-blue-600 rounded-[5px] justify-center items-center inline-flex">
                        <button onClick={()=> {handlePay(currentCourse)}} className="text-justify text-white text-xl font-medium font-['Inter'] leading-[17px]">Pay ${Price}</button>
                    </div>
                    <div className="left-[397px] top-[181px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]"> </div>
                    <div className="left-[22px] top-[31px] absolute text-justify text-black text-xl font-medium font-['Inter'] leading-[17px]">{courseName}</div>
                    <div className="left-[21px] top-[109px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]">Decide Time (in days)</div>
                    <div className="left-[343px] top-[26px] absolute justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="pl-[17px] pr-[9px] py-[5px] left-[22px] top-[130px] absolute rounded-[5px] border border-neutral-400 justify-end items-center gap-[5px] inline-flex">
                        {/* <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">1 week</div> */}
                        <div>
                            <input
                            type="number"
                            value={selectedTimeframe}
                            onChange={handleTimeframeChange}
                                className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px] border border-gray-300 rounded-md p-2"
                            >
                            </input>
                        </div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                            <div className="w-6 h-6 relative">
                            </div>
                        </div>
                    </div>
                    <div className="px-[9px] pt-[9px] pb-2.5 left-[22px] top-[62px] absolute bg-gradient-to-r from-green-300 via-orange-100 to-white rounded-[3px] border border-neutral-400 justify-center items-center inline-flex">
                        <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">Course duration : 10 hrs</div>
                    </div>
                    <div className="w-[374px] left-[22px] top-[195px] absolute text-red-600 text-xs font-normal font-['Inter'] leading-[17px]">mostly students take 3 weeks to complete this course</div>
                    <div className="w-[108px] h-[40px] py-[11px] left-[160px] top-[133px] absolute bg-gradient-to-r from-orange-100 via-white to-blue-700 rounded border border-neutral-400 justify-center items-center inline-flex">
                        <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">${Price}</div>
                    </div>
                    <Timer selectedTimeframe = {selectedTimeframe} />
                </div>
            </div>
        </div>
        {/* <NewCard selectedTimeframe={selectedTimeframe} /> */}
        </>

    );
}
export default PopUp;

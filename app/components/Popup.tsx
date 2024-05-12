import React, { useState, useEffect } from "react";
import { utils } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import Timer from "./timer.tsx";
import { UserAuth } from "../context/AuthContext.js";
import { db } from "../firebase.js";
import { doc, collection, serverTimestamp, setDoc } from "firebase/firestore";
import CourseABI from "../constants/ABI/Course.json";
import MarketABI from "../constants/ABI/Market.json";
import { ContractAddress } from "../config/config.ts";
import { getSecondsOfDays, getSecondsOfHours } from "../utils/utils.ts";
import { PopupType } from "../constants/Types.ts";

function Popup({ handleClose, currentCourse, courseName }: PopupType) {
  // const [isPurchaseComplete, setPurchaseComplete] = useState(false);
  const { user } = UserAuth();
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);

  const [price, setPrice] = useState<number>(Number(currentCourse.PricePerDay));
  const [selectedDay, setSelectedDay] = useState<string>("1 day");
  const [selectedTimeFrame, setSelectedTimeFrame] = useState<string>("1");

  const handleTimeFrameChange = (e: any) => {
    e.preventDefault();
    const inputDays = parseInt(e.target.value);
    setSelectedTimeFrame(inputDays ? inputDays.toString() : "0");
    const calculatedPrice =
      Number(inputDays || 0) * Number(currentCourse.PricePerDay);
    setPrice(calculatedPrice);
    setSelectedDay(inputDays == 1 ? `${inputDays} day` : `${inputDays} days`);
  };

  useEffect(() => {
    console.log({ currentCourse });
  });

  async function handlePay(selectedTimeFrame: string, price: number) {
    try {
      // UNCOMMENT DB INTERACTIONS
      /*
      const userId = user.uid;
      const userRef = doc(db, "Users", userId);
      const coursesRef = collection(userRef, "My_Courses");

      // Add course to My_Courses collection
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

      console.log("Course added to My_Courses collection");
      console.log("Selected Time:", selectedTimeFrame);
      console.log("price:", price);
 */

      console.log("ADFSa", utils.parseEther(`${currentCourse.PricePerDay}`));
      console.log("ADFSa3333", utils.parseEther(`${price}`));
      const courseData = [
        Number(currentCourse.CourseId),
        utils.parseEther(`${currentCourse.PricePerDay}`),
        getSecondsOfHours(currentCourse.CourseDuration),
      ];

      const network = getNetwork()?.chain?.id
        ? getNetwork()?.chain?.id
        : "default";

      const courseId = utils.formatBytes32String(
        currentCourse.CourseId + `${new Date().getTime()}`
      );

      const buyCourseAndMint = await writeContract({
        address: ContractAddress[`${network}`].market,
        abi: MarketABI.abi,
        functionName: "buyCourse",
        args: [
          [courseId, [...courseData]],
          getSecondsOfDays(Number(selectedTimeFrame)),
        ],
        value: BigInt(`${utils.parseEther(`${price}`)}`),
      });

      console.log({ buyCourseAndMint });
    } catch (error) {
      console.error("Error purchasing course:", error);
    }

    handleClose();
  }
  console.log("Selected Time:", selectedTimeFrame);

  return (
    <>
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <div className="w-[310px] md:w-[350px] lg:w-[400px] xl:w-[400px] h-[276px] relative bg-white rounded-2xl">
            <div className="w-[130px] md:w-[130px] lg:w-[145px] xl:w-[150px] h-[46px] px-[69px] pt-4 pb-[15px] left-[22px] top-[213px] absolute rounded-[5px] border border-red-600 justify-center items-center inline-flex">
              <button
                onClick={handleClose}
                className="text-red px-4 py-2 rounded-md text-justify text-red-600 text-xl font-medium font-['Inter'] leading-[17px]"
              >
                Cancel
              </button>
            </div>
            <div className="w-[130px] md:w-[130px] lg:w-[145px] xl:w-[145px] h-[46px] px-[63px] pt-4 pb-[15px] left-[175px] md:left-[200px] lg:left-[225px] xl:left-[225px] top-[213px] absolute bg-blue-600 rounded-[5px] justify-center items-center inline-flex">
              <button
                onClick={() => {
                  handlePay(selectedTimeFrame, price);
                }}
                className="text-justify text-white text-xl font-medium font-['Inter'] leading-[17px]"
              >
                Pay MATIC{price}
              </button>
            </div>
            <div className="left-[397px] top-[181px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]">
              {" "}
            </div>
            <div className="left-[22px] top-[31px] absolute text-justify text-black text-xl font-medium font-['Inter'] leading-[17px]">
              {courseName}
            </div>
            <div className="left-[21px] top-[109px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]">
              Decide Time (in days)
            </div>
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
                  value={selectedTimeFrame}
                  onChange={handleTimeFrameChange}
                  className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px] border border-gray-300 rounded-md p-2"
                ></input>
              </div>
              <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                <div className="w-6 h-6 relative"></div>
              </div>
            </div>
            <div className="px-[9px] pt-[9px] pb-2.5 left-[22px] top-[62px] absolute bg-gradient-to-r from-green-300 via-orange-100 to-white rounded-[3px] border border-neutral-400 justify-center items-center inline-flex">
              <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">
                Course duration : 10 hrs
              </div>
            </div>
            <div className="w-[374px] left-[22px] top-[195px] absolute text-red-600 text-xs font-normal font-['Inter'] leading-[17px]">
              mostly students take 3 weeks to complete this course
            </div>
            <div className="w-[108px] h-[40px] py-[11px] left-[160px] top-[133px] absolute bg-gradient-to-r from-orange-100 via-white to-blue-700 rounded border border-neutral-400 justify-center items-center inline-flex">
              <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">
                MATIC{price}
              </div>
            </div>
            <Timer selectedTimeFrame={selectedTimeFrame} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Popup;

// smart contract address: 0x1029d2eb463f1e310e74e7694e725ace17485b0a

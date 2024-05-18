import React, { useState } from "react";
import { utils } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import Link from "next/link";
import Image from "next/image";
import SellPopUp from "./SellPopup.tsx";
import {
  getDocs,
  collection,
  serverTimestamp,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
import CourseCurriculum from "../AboutCourse/curriculum.tsx";
import { ContractAddress } from "../config/config.ts";
import MarketABI from "../constants/ABI/Market.json";
import { NewSellerCardType, CourseType } from "../constants/Types.ts";
import { convertSecondsToHours, convertWeiToEth } from "../utils/utils.ts";
import CountDown from "./countdown.tsx";

const NewSellerCard: React.FC<NewSellerCardType> = ({
  course,
  selectedTimeFrame,
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseType>(course);

  const { user } = UserAuth();

  // 	async function toggleWithdraw (course: CourseType){

  // 		console.log(course.CourseId);
  // 		const courseId = course.CourseId;
  // 		const userId = user.uid;

  // 		const userRef = doc(db, "Users", userId);
  // 		const marketRef = collection(userRef, "My_Listings");
  // 		const coursesRef = collection(userRef,"My_Courses");

  // 		try {
  // 			await setDoc(doc(coursesRef,courseId), {
  // 			  ...course,
  // 			  withdrawDate: serverTimestamp(),
  // 			});

  // 			await deleteDoc(doc(marketRef,courseId));
  //             console.log("course deleted from My Listings");

  // 			await deleteDoc(doc(db,"Marketplace",courseId));
  // 			console.log("Course Deleted from Marketplace");

  // 	}catch(error){
  // 		console.log(error);
  // 	}
  // }

  async function toggleWithdraw() {
    try {
      console.log("ADFSa", utils.parseEther(`${currentCourse?.PricePerDay}`));

      const network = getNetwork()?.chain?.id
        ? getNetwork()?.chain?.id
        : "default";

      const removeCourse = await writeContract({
        address: ContractAddress[`${network}`].market,
        abi: MarketABI.abi,
        functionName: "removeFromMarket",
        args: [currentCourse?.CourseId],
      });

      console.log({ removeCourse });
    } catch (error) {
      console.error("Error purchasing course:", error);
    }
  }

  // const handlePurchase = (course: CourseType) => {
  // 	setIsPopupVisible(false);
  // };
  const imgUrl = `/${currentCourse?.CourseImgUrl}.png`;

  return (
    <div>
      <div className="cards w-[320] md:w-[373px] lg:w-[373px] xl:w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
          <p className="font-extrabold text-2xl">{course.CourseName}</p>
        </div>
        {/* <p className="px-4 py-2">{currentCourse?.short_desc}</p> */}
        <div className="flex flex-wrap justify-between px-4">
          <div className=" bg-white px-4 m-2 w-max  text-black rounded-full">
            <span>
            Validity &quot;{convertSecondsToHours(currentCourse?.CourseDuration)} Hours&quot;{" "}
            </span>
          </div>
          <div className="rounded-full px-4 m-2 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            <span>Selling Price {convertWeiToEth(`${currentCourse?.PricePerDay}`)} MATIC</span>
          </div>
          <div className="rounded-full px-4 m-4 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            Listed course
          </div>
          {/* <div className='rounded-full px-4 mt-3 w-max bg-transparent outline'>
						{/* <span>{courseExpiry}</span> /}
					</div> */}
        </div>
        <div className="flex items-center justify-between px-4">
          <button
            // onClick={() => toggleWithdraw(currentCourse?)}
            onClick={toggleWithdraw}
            className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl"
          >
            Withdraw
          </button>
        </div>
        {/* {isPopupVisible && (
		        <div className='fixed inset-0 z-100 backdrop-filter backdrop-blur-md flex items-center justify-center'> 
		            <SellPopUp
					 handleClose={handlePurchase} currentCourse={currentCourse} />
				</div>
				)} */}
      </div>
    </div>
  );
};
export default NewSellerCard;

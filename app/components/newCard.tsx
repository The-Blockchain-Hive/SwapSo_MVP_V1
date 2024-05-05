import React, { useState } from "react";
import { utils } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import Timer from "./timer.tsx";
import Link from "next/link";
import Image from "next/image";
import SellPopUp from "./SellPopUp";
import { ContractAddress } from "../config/config.ts";
import MarketABI from "../../blockchain_hive_contracts/artifacts/contracts/V1/Market.sol/Market.json";

interface CardProps {
  CourseId: string;
  AboutCourse: string;
  CourseName: string;
  CourseImgUrl: number;
  short_desc: string;
  CourseDuration: number;
  CourseEducator: string;
  EducatorImgUrl: string;
  EducatorSocials: string;
  Educator_desc: string;
  PricePerDay: number;
  WhatLearn: string;
  isListed: boolean;
}
interface TimerProps {
  selectedTimeframe: string;
}

interface NewCardProps extends CardProps, TimerProps {}
const NewCard: React.FC<NewCardProps> = (props) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CardProps | null>(null);

  function togglePopup() {
    setCurrentCourse(props);
    setIsPopupVisible(!isPopupVisible);
  }

  async function unListCourse() {
    try {
      console.log("ADFSa", utils.parseEther(`${props.PricePerDay}`));

      const network = getNetwork()?.chain?.id
        ? getNetwork()?.chain?.id
        : "default";

      const removeCourse = await writeContract({
        address: ContractAddress[`${network}`].market,
        abi: MarketABI.abi,
        functionName: "removeFromMarket",
        args: [props.CourseId],
      });

      console.log({ removeCourse });
    } catch (error) {
      console.error("Error purchasing course:", error);
    }
  }

  const handlePurchase = (course: CardProps) => {
    setIsPopupVisible(false);
  };

  const imgUrl = `/${props.CourseImgUrl}.png`;
  // console.log(' time frame of new card',props.selectedTimeframe);

  return (
    <div>
      <div className="cards w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
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
          <p className="font-extrabold text-2xl">{props.CourseName}</p>
        </div>
        {/* <p className="px-4 py-2">{props.short_desc}</p> */}
        <div className="flex flex-wrap justify-between px-4">
          <div className=" bg-white px-4 w-max text-black rounded-full">
            <span>{props.CourseDuration} Hours Total</span>
          </div>
          <div className="rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            <span>${props.PricePerDay}/Day</span>
          </div>
          <div className="mt-2 rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            <Timer selectedTimeframe="1" />
          </div>
          {/* <div className='rounded-full px-4 w-max bg-transparent outline'>
						<span>50$</span>
					</div> */}
          {/* <div className='rounded-full px-4 mt-3 w-max bg-transparent outline'>
						<span>{courseExpiry}</span>
					</div> */}
        </div>
        <div className="flex justify-between px-4">
          <Link href="/LearnCourse">
            <button className="bg-blue-400 font-extrabold p-2 m-4 rounded-xl">
              Learn
            </button>
          </Link>

          {props.isListed ? (
            <button
              onClick={() => {
                unListCourse();
              }}
              className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl"
            >
              Unlist Course
            </button>
          ) : (
            <button
              onClick={() => {
                togglePopup();
              }}
              className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl"
            >
              Sell Course
            </button>
          )}
        </div>
        {isPopupVisible && (
          <div className="fixed inset-0 z-100 backdrop-filter backdrop-blur-md flex items-center justify-center">
            <SellPopUp
              handleClose={handlePurchase}
              currentCourse={currentCourse}
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default NewCard;

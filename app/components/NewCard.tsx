import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { utils } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import CountDown from "./countdown.tsx";
import Link from "next/link";
import Image from "next/image";
import SellPopUp from "./SellPopup.tsx";
import { ContractAddress } from "../config/config.ts";
import MarketABI from "../constants/ABI/Market.json";
import { NewCardType, CourseType } from "../constants/Types.ts";
import { convertSecondsToHours, convertWeiToEth } from "../utils/utils.ts";
import { getLmsUrl } from "../utils/utils.ts";

const NewCard = ({ course }: NewCardType) => {
  const { address } = useAccount();
  const [lmsUrl, setLmsUrl] = useState<string>("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [currentCourse, setCurrentCourse] = useState<CourseType>(course);

  useEffect(() => {
    async function fetchLmsUrl() {
      setLmsUrl(
        await getLmsUrl(
          address || "",
          currentCourse.CourseDbId,
          currentCourse.lmsUrl || ""
        )
      );
    }
    fetchLmsUrl();
  }, [lmsUrl, address, currentCourse.CourseDbId, currentCourse.lmsUrl]);

  function togglePopup() {
    setCurrentCourse(course);
    setIsPopupVisible(!isPopupVisible);
  }

  async function unListCourse() {
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

  const handlePurchase = () => {
    setIsPopupVisible(false);
  };

  const imgUrl = `/${currentCourse?.CourseImgUrl}.png`;
  // console.log(' time frame of new card',selectedTimeframe);

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
          <p className="font-extrabold text-2xl">{currentCourse?.CourseName}</p>
        </div>
        {/* <p className="px-4 py-2">{currentCourse?.short_desc}</p> */}
        <div className="flex flex-wrap justify-between px-4">
          <div className=" bg-white px-4 w-max text-black rounded-full">
            <span>
              {convertSecondsToHours(currentCourse?.CourseDuration)} Hours Total
            </span>
          </div>
          <div className="rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            <span>{convertWeiToEth(`${currentCourse?.PricePerDay}`)}/Day</span>
          </div>
          <div className="mt-2 rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            {!currentCourse?.isListed ? (
              <CountDown
                startTime={currentCourse.startTime || 0}
                duration={currentCourse.CourseDuration}
                showTime={true}
              />
            ) : (
              "Course is listed for sale"
            )}
          </div>
        </div>
        <div className="flex justify-between px-4">
          {!currentCourse?.isListed && (
            <a target="blank" href={`${lmsUrl}`}>
              <button className="bg-blue-400 font-extrabold p-2 m-4 rounded-xl">
                Learn
              </button>
            </a>
          )}

          {currentCourse?.isListed ? (
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

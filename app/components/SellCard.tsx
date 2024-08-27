import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { parseEther, ethers } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import Link from "next/link";
import Image from "next/image";
import MarketABI from "../constants/ABI/Market.json";
import { ContractAddress } from "../config/config.ts";
import {
  convertSecondsToHours,
  convertWeiToEth,
  getSecondsOfDays,
  getSecondsOfHours,
} from "../utils/utils.ts";
import { SellCardType, CourseType } from "../constants/Types.ts";
import { useError } from "./errorContext.tsx";

const SellCard: React.FC<SellCardType> = ({ course }) => {
  const router = useRouter();
  const { setError } = useError();
  console.log("hgfdhgfc", { course });
  const imgUrl = `/${course.CourseImgUrl}.png`;
  const [currentCourse, setCurrentCourse] = useState<CourseType>(course);
  const [showLoader, setShowLoader] = useState(false);

  const handleCopy = () => {
    if (course?.CourseId) {
      navigator.clipboard.writeText(course.CourseId);
      alert("Course ID copied to clipboard");
    }
  };
  const truncatedCourseId = (id: any, length = 15) => {
    return id.length > length ? `${id.substring(0, length)}...` : id;
  };

  // const handleClick = async () => {
  //   if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
  //     try {
  //       const fromAddress = (window as any).ethereum.selectedAddress;
  //       if (!fromAddress) {
  //         throw new Error("MetaMask selected address is undefined.");
  //       }

  //       const transactionParams = {
  //         to: "0x4D063a1bF80c751501d4DB4dC6877505A3a5D010",
  //         from: fromAddress,
  //         value: course.listingPrice,
  //       };

  //       const txhash = await (window as any).ethereum.request({
  //         method: "eth_sendTransaction",
  //         params: [transactionParams],
  //       });

  //       console.log("Transaction sent successfully:", txhash);
  //     } catch (error) {
  //       console.error("Error sending transaction:");

  //       alert("Error sending transaction. Please try again later.");
  //     }
  //   } else {
  //     console.error("MetaMask extension not detected.");

  //     alert("MetaMask extension is required to complete this transaction.");
  //   }
  // };

  const handleClick = async () => {
    try {
      const network = getNetwork()?.chain?.id
        ? getNetwork()?.chain?.id
        : "default";

      console.log({ course });

      const totalPrice: any =
        (Number(course.CourseDuration) / getSecondsOfDays(1)) *
        Number(ethers.formatEther(`${course.PricePerDay}`));

      console.log({ totalPrice });

      const buyCourseFromMarket = await writeContract({
        address: ContractAddress[`${network}`].market,
        abi: MarketABI.abi,
        functionName: "buyFromMarket",
        args: [course.CourseId],
        value: BigInt(`${parseEther(`${totalPrice}`)}`),
      });

      console.log({ buyCourseFromMarket });
      router.refresh();
    } catch (error) {
      console.error("Error purchasing course:", error);
      if (error instanceof Error) {
        setError(
          "Error purchasing course: " +
            "Please make sure you have connected wallet and have got enough balance"
        );
      } else {
        setError("An unknown error occurred.");
      }
    }
    const showLoad = () => {
      setShowLoader(true);
    };
  };
  const handleAboutClick = () => {
    // Use Next.js router to navigate to the AboutCourse page with query parameters
    window.location.href = `/AboutCourse?CourseName=${currentCourse?.CourseName}`;
  };

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
            loading="lazy"
          />
          <div className="w-full h-1/2 rounded-tr-3xl rounded-tl-3xl"></div>
        </div>
        <div className="flex justify-between p-4">
          <p className="font-extrabold text-2xl">{course.CourseName}</p>
        </div>
        <div className="px-4 py-2 flex items-center">
          <p className="mr-2">
            NFT ID:{" "}
            {course?.CourseId
              ? truncatedCourseId(course.CourseId)
              : "No Course ID"}
          </p>
          {course?.CourseId && (
            <button
              onClick={handleCopy}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Copy
            </button>
          )}
        </div>
        <div className="flex flex-row justify-between mt-4 m-2">
          <div className=" bg-white px-4 w-max text-black rounded-full">
            <span>
              Validity : {convertSecondsToHours(course.CourseDuration)} Hours
            </span>
          </div>
          <div className="rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500">
            <span>Price: {convertWeiToEth(`${course.PricePerDay}`)} MATIC</span>
          </div>
        </div>
        <div className="justify-center">
          <div className="rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink mt-4 ml-8"></div>
          {/* <div className="rounded-full px-4 mt-4 ml-32 justify-center w-max bg-transparent outline">
            <span>{course.listingComment}</span>
          </div> */}
        </div>
        <div className="flex justify-between px-4">
          <Link href="/AboutCourse">
            <button
              onClick={handleAboutClick}
              className="bg-blue-600 font-extrabold p-2 m-4 rounded-xl w-full"
            >
              About
            </button>
          </Link>
          <button
            onClick={handleClick}
            className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl w-1/3"
          >
            {showLoader ? <>Loading</> : <>Buy</>}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SellCard;

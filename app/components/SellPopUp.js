import React, { useState } from "react";
import { utils } from "ethers";
import { writeContract, readContract, getNetwork } from "@wagmi/core";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase.js";
import {
  doc,
  collection,
  deleteDoc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { ethers } from "ethers";
import Abi from "./abi.json";
import { ContractAddress } from "../config/config.ts";
import MarketABI from "../../blockchain_hive_contracts/artifacts/contracts/V1/Market.sol/Market.json";

const SellPopUp = ({ handleClose, currentCourse }) => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [listingAmount, setListingAmount] = useState("");
  const [courseComment, setCourseComment] = useState("");

  const { user } = UserAuth();

  // const handleSell = async(course) => {
  //     console.log('Course Sold', listingAmount);
  //     console.log(course.id);
  //     // console.log(courseComment);

  //     const userId = user.uid;
  //     const userRef = doc(db, "Users", userId);
  //     const marketRef = collection(userRef, "My_Listings");
  //     const coursesRef = collection(userRef,"My_Courses");

  //     try {
  //         await setDoc(doc(marketRef,course.id),{
  //           ...course,
  //           listedDate: serverTimestamp(),
  //           listingPrice: listingAmount,
  //           listingComment: courseComment
  //         });
  //         console.log("course pushed to my listing");

  //         await setDoc(doc(db,"Marketplace",course.id),{
  //             ...course,
  //           listedDate: serverTimestamp(),
  //           listingPrice: listingAmount,
  //           listingComment: courseComment
  //         });
  //         console.log("course added to MarketPlace")

  //         await deleteDoc(doc(coursesRef,course.id));
  //         console.log("course deleted from My Courses ")

  //     // Update ethers provider and contract
  //     const contractAddress = '0x1029d2eb463f1e310e74e7694e725ace17485b0a';
  //     const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
  //     const tempSigner = tempProvider.getSigner();
  //     const tempContract = new ethers.Contract(contractAddress, Abi, tempSigner);

  //     // Assign the contract object to the state variables or use it directly
  //     setProvider(tempProvider);
  //     setSigner(tempSigner);
  //     setContract(tempContract);

  //     // Call the contract function
  //     const tx = await tempContract.sellCourse(course.id, listingAmount);
  //     await tx.wait();

  //       } catch (error) {
  //         console.log(error);
  //       }

  //     handleClose();
  // }

  const handleSell = async (course) => {
    if (Number(listingAmount <= 0)) return;
    console.log("Course Sold", listingAmount);
    console.log(course.id);
    // console.log(courseComment);

    try {
      console.log("ADFSa", utils.parseEther(`${currentCourse.PricePerDay}`));

      const courseData = [
        currentCourse.CourseId,
        utils.parseEther(`${listingAmount}`),
      ];

      const network = getNetwork()?.chain?.id
        ? getNetwork()?.chain?.id
        : "default";

      const sellCourse = await writeContract({
        address: ContractAddress[`${network}`].market,
        abi: MarketABI.abi,
        functionName: "sellCourse",
        args: courseData,
      });

      console.log({ sellCourse });
    } catch (error) {
      console.error("Error purchasing course:", error);
    }

    handleClose();
  };
  const handleAmountChange = (event) => {
    let listingAmount = setListingAmount(event.target.value);
  };
  const handleCommentChange = (event) => {
    setCourseComment(event.target.value);
  };

  return (
    <div className="w-[486px] h-[300px] relative bg-white rounded-2xl">
      <div className="w-[130px] md:w-[130px] lg:w-[145px] xl:w-[150px] h-[46px] px-[69px] pt-4 pb-[15px] left-[22px] top-[230px] absolute rounded-[5px] border border-red-600 justify-center items-center inline-flex">
        <button
          onClick={handleClose}
          className="text-justify text-red-600 text-xl font-medium font-['Inter'] leading-[17px]"
        >
          Cancel
        </button>
      </div>
      <div className="w-[130px] md:w-[130px] lg:w-[145px] xl:w-[145px] h-[46px] px-[63px] pt-4 pb-[15px] left-[220px] md:left-[200px] lg:left-[200px] xl:left-[200px] top-[230px] absolute bg-blue-600 rounded-[5px] justify-center items-center inline-flex">
        <button
          onClick={() => {
            handleSell(currentCourse);
          }}
          className="text-justify text-white text-xl font-medium font-['Inter'] leading-[17px]"
        >
          List
        </button>
      </div>
      <div className="left-[397px] top-[181px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]">
        {" "}
      </div>
      <div className="left-[22px] top-[29px] absolute text-justify text-black text-xl font-medium font-['Inter'] leading-[17px]">
        Basics of Metaverse
      </div>
      <div className="left-[343px] top-[26px] absolute justify-start items-start inline-flex">
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
      </div>

      <div className="px-[9px] pt-[9px] pb-2.5 left-[22px] top-[62px] absolute bg-gradient-to-r from-green-300 via-orange-100 to-white rounded-[3px] border border-neutral-400 justify-center items-center inline-flex">
        <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">
          Course duration : 10 hrs
        </div>
      </div>
      <div className="w-[374px] left-[22px] top-[105px] absolute text-red-600 text-xs font-normal font-['Inter'] leading-[17px]">
        Comment
      </div>
      <textarea
        className="w-[325px] left-[22px] top-[120px] absolute text-red-600 text-xl font-normal font-['Inter'] leading-[17px]"
        value={courseComment}
        onChange={handleCommentChange}
        placeholder="Comment..."
        rows="4"
        cols="25"
        maxLength={165}
        style={{ resize: "none" }}
      />
      <input
        type="number"
        value={listingAmount}
        onChange={handleAmountChange}
        className="w-[325px] left-[22px] top-[200px] absolute text-red-600 text-xl font-normal font-['Inter'] leading-[17px]"
        placeholder="Listing Amount"
      />
      <div className="pl-2.5 pr-[23px] pt-[9px] pb-2.5 left-[235px] top-[62px] absolute rounded border border-gray-400 justify-start items-center inline-flex">
        <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">
          150D:12H:52M
        </div>
      </div>
    </div>
  );
};
export default SellPopUp;

'use client'
import React, { useState } from 'react';
import '../Home/courses.css';
import Link from 'next/link';
import Image from 'next/image';
import PopUp from './PopUp';

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
  }

  const Card: React.FC<CardProps> = (props) => {


	const [isPopupVisible, setIsPopupVisible] = useState(false);
	
	const [currentCourse, setCurrentCourse] = useState<CardProps | null>(null);

	const togglePopup = () => {
		setCurrentCourse(props);
		setIsPopupVisible(!isPopupVisible);
	}
	const handlePurchase = async (course: CardProps) => {			
		setIsPopupVisible(false);
		if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
		  try {
			const fromAddress = (window as any).ethereum.selectedAddress;
			if (!fromAddress) {
			  throw new Error('MetaMask selected address is undefined.');
			}
			
			const transactionParams = {
			  to: '0x4D063a1bF80c751501d4DB4dC6877505A3a5D010',
			  from: fromAddress,
			  value: '1',
			};
	  
			const txhash = await (window as any).ethereum.request({
			  method: 'eth_sendTransaction',
			  params: [transactionParams],
			});
	  
			console.log('Transaction sent successfully:', txhash);
		  } catch (error) {
			console.error('Error sending transaction:');

			alert('Error sending transaction. Please try again later.');
		  }
		} else {
		  console.error('MetaMask extension not detected.');

		  alert('MetaMask extension is required to complete this transaction.');
		}
	};

	const handleAboutClick = () => {
		// Use Next.js router to navigate to the AboutCourse page with query parameters
		window.location.href = `/AboutCourse?CourseName=${props.CourseName}`;
	  };
	

	const imgUrl = `/${props.CourseImgUrl}.png`;
	
	
  return (
	<div>
	  <div className="cards w-[310px] sm:w-[350px] md:w-[350px] lg:w-[373px] xl:w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
	  <div>
	  
			<Image
			  src={imgUrl}
			  width={300} 
			  height={100} 
			  alt='courses' 
			  className='object-cover object-top w-full h-1/2 rounded-tr-3xl rounded-tl-3xl'			  
			 />
			<div className='w-full h-1/2 rounded-tr-3xl rounded-tl-3xl'></div>
		</div>
		<div className="flex justify-between p-4">
			<p className="font-extrabold text-2xl">{props.CourseName}</p>		
		</div>
		<p className="px-4 py-2">{props.short_desc}</p>
		<div className='flex flex-wrap justify-between px-4'>
			<div className=' bg-white px-4 w-max text-black rounded-full'>
				<span>${props.PricePerDay}/day</span>
			</div>
			{/* <div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500'>
				<span></span>
			</div> */}
			<div className='rounded-full px-4 w-max bg-transparent outline'>
				<span>{props.CourseDuration} Hours Total</span>
			</div>
			{/* <div className='rounded-full px-4 mt-3 w-max bg-transparent outline'>
				<span>{props.courseExpiry}</span>
			</div> */}
		</div>	
		<div className='flex justify-between px-4'>
			<Link href='/AboutCourse'><button onClick={handleAboutClick} className="bg-blue-400 font-extrabold p-2 m-4 rounded-xl">About</button></Link>
			<button onClick={togglePopup} className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl">Buy Course</button>
		</div>
		{isPopupVisible && (
		<div className='fixed inset-0 z-100 backdrop-filter backdrop-blur-md flex items-center justify-center'> 
		<PopUp handleClose={handlePurchase} currentCourse={currentCourse} courseName={currentCourse?. CourseName || ''}></PopUp>
		  
		</div>
)}
		</div>
	</div>
  )
}

export default Card;

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Timer from './timer';

interface CardProps extends Window {    
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
	listingPrice: number;	
    listingComment: string;
  }
  interface Window {
    ethereum?: any;
}

  const SellCard: React.FC<CardProps> = (props) => {
	const imgUrl = `/${props.CourseImgUrl}.png`;
	const [selectedTimeframe, setselectedTimeframe] = useState("1");

	const handleClick = async () => {
		if ((window as any).ethereum && (window as any).ethereum.isMetaMask) {
			try {
				const transactionParams = {
					to: '0x4d063a1bf80c751501d4db4dc6877505a3a5d010',
					from: (window as any).ethereum.selectedAddress,
					value: '0x38d7ea4c68000', // 1 ETH in Wei (1 ether = 1000000000000000000 Wei)
				};
	
				const txhash = await (window as any).ethereum.request({
					method: 'eth_sendTransaction',
					params: [transactionParams],
				});
	
				console.log('Transaction sent successfully:', txhash);
			} catch (error) {
				console.error('Error sending transaction:', error);
			}
		} else {
			console.error('MetaMask extension not detected.');
		}
	};
	

	return (
		<div>
			<div className="cards w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
				<div>
					<Image src={imgUrl} width={300} height={100} alt='courses' className='object-cover object-top w-full h-1/2 rounded-tr-3xl rounded-tl-3xl' />
					<div className='w-full h-1/2 rounded-tr-3xl rounded-tl-3xl'></div>
				</div>
				<div className="flex justify-between p-4">
					<p className="font-extrabold text-2xl">{props.CourseName}</p>
					<div className="flex items-center">
						<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
					</div>
				</div>
				<p className="px-4 py-2">{props.short_desc}</p>
				<div className='flex flex-wrap justify-between px-4'>
					<div className=' bg-white px-4 w-max  text-black rounded-full'>
						<span>{props.CourseDuration} Hours Total</span>
					</div>
					<div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500'>
						<span>Selling Price: {props.listingPrice}$</span>
					</div>
{/* 					
					<div className=' m-2 rounded-full px-4 w-max bg-transparent outline'>
						<span>${props.PricePerDay}/Day</span>
					</div> */}
					<div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink mt-4'>
						<Timer selectedTimeframe={selectedTimeframe} />
					</div>
					<div className='rounded-full px-4 mt-3 w-max bg-transparent outline'>
						<span>{props.listingComment}</span>
					</div>
				</div>
				<div className='flex justify-between px-4'>
					<Link href='/'><button className="bg-blue-600 font-extrabold p-2 m-4 rounded-xl w-full">About</button></Link>
					<button onClick={handleClick} className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl w-1/3">Buy</button>
				</div>
			</div>
		</div>
	);
};
export default SellCard;

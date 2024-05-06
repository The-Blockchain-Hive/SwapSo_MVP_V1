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
			const fromAddress = (window as any).ethereum.selectedAddress;
			if (!fromAddress) {
			  throw new Error('MetaMask selected address is undefined.');
			}
			
			const transactionParams = {
			  to: '0x4D063a1bF80c751501d4DB4dC6877505A3a5D010',
			  from: fromAddress,
			  value: props.listingPrice,
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
	  
	

	return (
		<div>
			<div className="cards w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
				<div>
					<Image src={imgUrl} width={300} height={100} alt='courses' className='object-cover object-top w-full h-1/2 rounded-tr-3xl rounded-tl-3xl' loading='lazy' />
					<div className='w-full h-1/2 rounded-tr-3xl rounded-tl-3xl'></div>
				</div>
				<div className='flex flex-row justify-between mt-4 m-2'>
					<div className=' bg-white px-4 w-max text-black rounded-full'>
						<span>{props.CourseDuration} Hours Total</span>
					</div>
					<div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500'>
						<span>Selling Price: {props.listingPrice}$</span>
					</div>
					</div>
					<div className='justify-center'>
					<div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink mt-4 ml-8'>
						<Timer selectedTimeframe={selectedTimeframe} />
					</div>
					{/* <div className='rounded-full px-4 mt-4 ml-32 justify-center w-max bg-transparent outline'>
						<span>{props.listingComment}</span>
					</div> */}
				</div>
				<div className='flex justify-between px-4'>
					<Link href='/AboutCourse'><button className="bg-blue-600 font-extrabold p-2 m-4 rounded-xl w-full">About</button></Link>
					<button onClick={handleClick} className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl w-1/3">Buy</button>
				</div>
			</div>
		</div>
	);
};
export default SellCard;

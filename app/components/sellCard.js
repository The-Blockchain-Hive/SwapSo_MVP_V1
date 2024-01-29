import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NewCard = (courseCopy) => {
	return (
		<div>
			<div className="cards w-[373px] h-max bg-gradient-to-b from-black to-blue-1100 bg-opacity-40 backdrop-blur-md drop-shadow-lg rounded-3xl text-neutral-300 m-1 flex flex-col hover:transform hover:scale-105 transition-transform duration-300 ease-in-out">
				<div>
					<Image src={courseCopy.imageURL} width={300} height={100} alt='courses' className='object-cover object-top w-full h-1/2 rounded-tr-3xl rounded-tl-3xl' />
					<div className='w-full h-1/2 rounded-tr-3xl rounded-tl-3xl'></div>
				</div>
				<div class="flex justify-between p-4">
					<p className="font-extrabold text-2xl">{courseCopy.courseTitle}</p>
					<div class="flex items-center">
						<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
						<svg class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
							<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
						</svg>
					</div>
				</div>
				<p className="px-4 py-2">{courseCopy.courseDescription}</p>
				<div className='flex flex-wrap justify-between px-4'>
					<div className=' bg-white px-4 w-max  text-black rounded-full'>
						<span>{courseCopy.courseDuration}</span>
					</div>
					<div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500'>
						<span>{courseCopy.coursePrice}</span>
					</div>
					<div className='rounded-full px-4 w-max bg-gradient-to-r from-purple-500 to-pink-500'>
						<span>{courseCopy.Timer}</span>
					</div>
					<div className='rounded-full px-4 w-max bg-transparent outline'>
						<span>50$</span>
					</div>
					<div className='rounded-full px-4 mt-3 w-max bg-transparent outline'>
						<span>{courseCopy.courseExpiry}</span>
					</div>
				</div>
				<div className='flex justify-between px-4'>
					<Link href='/'><button className="bg-blue-600 font-extrabold p-2 m-4 rounded-xl">Learn</button></Link>
					<button className="bg-transparent font-extrabold p-2 m-4 outline rounded-xl">Sell Course</button>
				</div>
			</div>
		</div>
	);
};
export default NewCard;
//Next steps to do
//Pass the object courseCopy inside an array
//Then try to update the <NewCard /> component inside the courses.tsx on popup visible..
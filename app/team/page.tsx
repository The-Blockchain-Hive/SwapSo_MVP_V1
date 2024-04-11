import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Team() {
  return (
    <div className='flex flex-wrap'>
      <head>
        <title>Team</title>
        <meta name="description" content='Our Core Team' />
      </head>
      <div className='ml-12 mt-12 p-3 h-1/2 w-1/4 bg-blue-1000 rounded-lg mx-auto'>
        <Image className='mx-auto rounded-lg' src='/karan.jpg' alt='Founder' height={150} width={150} />
        <p className='text-center font-comfortaa'>Karan Gill</p>
        <p className='text-center font-comfortaa'>Founder & CEO</p>
        <div className='flex flex-row justify-around'>
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
      <div className='ml-12 mt-12 p-3 h-1/2 w-1/4 bg-blue-1000 rounded-lg mx-auto'>
        <Image className='mx-auto rounded-lg' src='/mahak.png' alt='Founding Member' height={150} width={150} />
        <p className='text-center font-comfortaa'>Mahak Kalra</p>
        <p className='text-center font-comfortaa'>Co-Founder & CMO</p>
        <div className='flex flex-row justify-around'>
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
      <div className='ml-12 mt-12 p-3 h-1/2 w-1/4 bg-blue-1000 rounded-lg mx-auto'>
        <Image className='mx-auto rounded-lg' src='/ayush.jpg' alt='Founding Member' height={150} width={150} />
        <p className='text-center font-comfortaa'>Ayush Pandey</p>
        <p className='text-center font-comfortaa'>Founding Member</p>
        <div className='flex flex-row justify-around'>
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
      <div className='ml-12 mt-12 p-3 h-1/2 w-1/4 bg-blue-1000 rounded-lg mx-auto'>
        <Image className='mx-auto rounded-lg' src='/mudassir.png' alt='CTO' height={150} width={175} />
        <p className='text-center font-comfortaa'>Md. Mudassir</p>
        <p className='text-center font-comfortaa'>CTO</p>
        <div className='flex flex-row justify-around'>
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
      <div className='ml-12 mt-12 p-3 h-1/2 w-1/4 bg-blue-1000 rounded-lg mx-auto'>
        <Image className='mx-auto rounded-lg' src='/swayam.jpg' alt='CPO' height={150} width={150} />
        <p className='text-center font-comfortaa'>Swayam Sharma</p>
        <p className='text-center font-comfortaa'>CPO</p>
        <div className='flex flex-row justify-around'>
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
      <div className='ml-12 mt-12 p-3 h-1/2 w-1/4 bg-blue-1000 rounded-lg mx-auto'>
        <Image className='mx-auto rounded-lg' src='/bhargav.jpg' alt='Technical Director' height={150} width={150} />
        <p className='text-center font-comfortaa'>Bhargav Pandit</p>
        <p className='text-center font-comfortaa'>Technical Director</p>
        <div className='flex flex-row justify-around'>
          <FaTwitter size={32} />
          <FaLinkedin size={32} />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import useWindowSize from '../successful/useWindowSize';
import Image from "next/image";

export default function Desktop() {

  const {width} = useWindowSize();

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Image src='/trackpath2.jpg' height={1000} width={width} alt='trackpath' />
    </div>
  )
}

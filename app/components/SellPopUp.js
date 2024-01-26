import React, { useState } from 'react';

const SellPopUp = ({handleClose}) => {

    const handleSell = () => {
        console.log('Course Sold');
        handleClose();
    }

    return(
            <div className="w-[486px] h-[276px] relative bg-white rounded-2xl">
    <div className="w-[205px] h-[46px] px-[69px] pt-4 pb-[15px] left-[22px] top-[213px] absolute rounded-[5px] border border-red-600 justify-center items-center inline-flex">
        <div onClick={handleClose} className="text-justify text-red-600 text-xl font-medium font-['Inter'] leading-[17px]">Cancel</div>
    </div>
    <div className="w-[205px] h-[46px] pt-4 pb-[15px] left-[259px] top-[213px] absolute bg-blue-600 rounded-[5px] justify-center items-center inline-flex">
    <button onClick={handleSell} className="text-justify text-white text-xl font-medium font-['Inter'] leading-[17px]">List</button>
    </div>
    <div className="left-[397px] top-[181px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]"> </div>
    <div className="left-[22px] top-[29px] absolute text-justify text-black text-xl font-medium font-['Inter'] leading-[17px]">Basics of Metaverse</div>
    <div className="left-[22px] top-[108px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]">Select time</div>
    <div className="left-[343px] top-[26px] absolute justify-start items-start inline-flex">
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
        <div className="w-6 h-6 relative" />
    </div>
    <div className="pl-[17px] pr-[9px] py-[5px] left-[22px] top-[138px] absolute rounded-[5px] border border-neutral-400 justify-end items-center gap-[5px] inline-flex">
        <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">1 week</div>
        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
            <div className="w-6 h-6 relative">
            </div>
        </div>
    </div>
    <div className="px-[9px] pt-[9px] pb-2.5 left-[22px] top-[62px] absolute bg-gradient-to-r from-green-300 via-orange-100 to-white rounded-[3px] border border-neutral-400 justify-center items-center inline-flex">
        <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">Course duration : 10 hrs</div>
    </div>
    <div className="w-[374px] left-[22px] top-[185px] absolute text-red-600 text-xs font-normal font-['Inter'] leading-[17px]">mostly students take 3 weeks to complete this course</div>
    <div className="w-[108px] py-[11px] left-[141px] top-[138px] absolute rounded border border-neutral-400 justify-center items-center inline-flex">
        <div className="text-justify text-gray-900 text-opacity-20 text-base font-medium font-['Inter'] leading-[17px]">$50</div>
    </div>
    <div className="pl-2.5 pr-[23px] pt-[9px] pb-2.5 left-[235px] top-[62px] absolute rounded border border-gray-400 justify-start items-center inline-flex">
        <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">150D:12H:52M</div>
    </div>
</div>
    )
}
export default SellPopUp;
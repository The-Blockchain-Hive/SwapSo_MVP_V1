import React, { useState } from 'react'

const PopUp = ({ handleClose }) => {

    const [selectedTimeframe, setselectedTimeframe] = useState('1 week');
    const [Price, setPrice] = useState(5);

    const handleTimeframeChange = (e) => {
        setselectedTimeframe(e.target.value);
        switch(e.target.value) {
            case '1 week':
                setPrice(5);
                break;
            case '2 weeks':
                setPrice(10);
                break;
            case '3 weeks':
                setPrice(15);
                break;
            case '4 weeks':
                setPrice(20);
                break;
        }
    }

    return (
        <div class="flex justify-between p-4">
            <div class="flex items-center">
                <div className="w-[486px] h-[276px] relative bg-white rounded-2xl">
                    <div className="w-[205px] h-[46px] px-[69px] pt-4 pb-[15px] left-[22px] top-[213px] absolute rounded-[5px] border border-red-600 justify-center items-center inline-flex">
                        <button onClick={handleClose} className="text-red px-4 py-2 rounded-md text-justify text-red-600 text-xl font-medium font-['Inter'] leading-[17px]">Cancel
                        </button>
                    </div>
                    <div className="h-[46px] px-[63px] pt-4 pb-[15px] left-[259px] top-[213px] absolute bg-blue-600 rounded-[5px] justify-center items-center inline-flex">
                        <button className="text-justify text-white text-xl font-medium font-['Inter'] leading-[17px]">Pay ${Price}</button>
                    </div>
                    <div className="left-[397px] top-[181px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]"> </div>
                    <div className="left-[22px] top-[31px] absolute text-justify text-black text-xl font-medium font-['Inter'] leading-[17px]">Basics of Metaverse</div>
                    <div className="left-[21px] top-[109px] absolute text-justify text-black text-base font-medium font-['Inter'] leading-[17px]">Select time</div>
                    <div className="left-[343px] top-[26px] absolute justify-start items-start inline-flex">
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                        <div className="w-6 h-6 relative" />
                    </div>
                    <div className="pl-[17px] pr-[9px] py-[5px] left-[22px] top-[130px] absolute rounded-[5px] border border-neutral-400 justify-end items-center gap-[5px] inline-flex">
                        {/* <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">1 week</div> */}
                        <div>
                            <select
                            value={selectedTimeframe}
                            onChange={handleTimeframeChange}
                            className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px] border border-gray-300 rounded-md p-2"
                            >
                                <option value="1 week">1 week</option>
                                <option value="2 weeks">2 weeks</option>
                                <option value="3 weeks">3 weeks</option>
                                <option value="4 weeks">4 weeks</option>
                            </select>
                            <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">
                                Selected Timeframe: {selectedTimeframe}
                            </div>
                        </div>
                        <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                            <div className="w-6 h-6 relative">
                            </div>
                        </div>
                    </div>
                    <div className="px-[9px] pt-[9px] pb-2.5 left-[22px] top-[62px] absolute bg-gradient-to-r from-green-300 via-orange-100 to-white rounded-[3px] border border-neutral-400 justify-center items-center inline-flex">
                        <div className="text-justify text-black text-base font-normal font-['Inter'] leading-[17px]">Course duration : 10 hrs</div>
                    </div>
                    <div className="w-[374px] left-[22px] top-[184px] absolute text-red-600 text-xs font-normal font-['Inter'] leading-[17px]">mostly students take 3 weeks to complete this course</div>
                    <div className="w-[108px] py-[11px] left-[141px] top-[130px] absolute bg-gradient-to-r from-orange-100 via-white to-blue-700 rounded border border-neutral-400 justify-center items-center inline-flex">
                        <div className="text-justify text-gray-900 text-base font-medium font-['Inter'] leading-[17px]">${Price}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default PopUp;
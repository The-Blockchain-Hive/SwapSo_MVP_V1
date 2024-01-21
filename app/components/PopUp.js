import React, { useState } from 'react';
import NewCard from './newCard';

function PopUp({ handleClose, course }) {


    const [isPurchaseComplete, setPurchaseComplete] = useState(false);
    const [courseCopyArray, setCourseCopyArray] = useState([]);

    function handlePay() {
        console.log("Course purchased!");
        console.log(course);
        const {id, imageURL, courseTitle, courseDescription, courseDuration} = course;
        const courseCopy = {
            id,
            imageURL,
            courseTitle,
            courseDescription,
            courseDuration,
            Timer: '3 days remaining',
            button: 'Sell Course',
        };
        console.log(courseCopy);
        setPurchaseComplete(true);
        handleClose();
        const {Timer, button} = courseCopy;
        const CardArray = {
            'newArray': [
                {
                    "id": id,// assign the value of the courseCopy to the parameters here
                    "imageURL"  :imageURL,
                    "courseTitle" :courseTitle,
                    "courseDescription":courseDescription,
                    "courseDuration":courseDuration,
                    "Timer": Timer,
                    "button": button,
                }
            ]
        }
        console.log(CardArray);
    }
    

    const [selectedTimeframe, setselectedTimeframe] = useState('1 week');
    const [Price, setPrice] = useState(5);

    const handleTimeframeChange = (e) => {
        setselectedTimeframe(e.target.value);
        switch (e.target.value) {
            case '1 day':
                setPrice(5);
                break;
            case '2 days':
                setPrice(10);
                break;
            case '3 days':
                setPrice(15);
                break;
            case '4 days':
                setPrice(20);
                break;
        }
    };


    return (
        <div className="flex justify-between p-4">
            <div className="flex items-center">
                <div className="w-[486px] h-[276px] relative bg-white rounded-2xl">
                    <div className="w-[205px] h-[46px] px-[69px] pt-4 pb-[15px] left-[22px] top-[213px] absolute rounded-[5px] border border-red-600 justify-center items-center inline-flex">
                        <button onClick={handleClose} className="text-red px-4 py-2 rounded-md text-justify text-red-600 text-xl font-medium font-['Inter'] leading-[17px]">Cancel
                        </button>
                    </div>
                    <div className="h-[46px] px-[63px] pt-4 pb-[15px] left-[259px] top-[213px] absolute bg-blue-600 rounded-[5px] justify-center items-center inline-flex">
                        <button onClick={handlePay} className="text-justify text-white text-xl font-medium font-['Inter'] leading-[17px]">Pay ${Price}</button>
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
                                <option value="1 day">1 day</option>
                                <option value="2 days">2 days</option>
                                <option value="3 days">3 days</option>
                                <option value="4 days">4 days</option>
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
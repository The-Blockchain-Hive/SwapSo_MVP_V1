import React from "react";
import Image from "next/image";
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import './JoinUs.css';

const JoinUs = () => {

    return(
        <main className="relative w-full h-screen mt-24">
            <h2 className="text-6xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white "> Join Us</h2>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">  
                <div className="join-us w-screen">
                    <div className="ca w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/3 mx-auto">
                        <p className="font-bold mr-2"> <br /> <FaChalkboardTeacher />Join us and build web3 education&apos;s future</p>
                        <br /> <h1 className="fill-form"><a href="https://cip.swapso.io">Join our Campus Influencers Program➔</a></h1>
                    </div>
                    <div className="educator w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/3 mx-auto">
                        <p className="font-bold mr-2"> <br /><FaUserGraduate />Educate community with us</p>
                        <br /> <h1 className="fill-form"><a href="">Join us as an educator➔</a></h1>
                    </div>
                </div>
            </div>    
        </main>
    )

}
export default JoinUs;
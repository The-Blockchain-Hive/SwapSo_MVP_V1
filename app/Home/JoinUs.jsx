import React from "react";
import Image from "next/image";
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import './JoinUs.css';

const JoinUs = () => {

    return(
        <main className="relative w-full h-screen">             
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">  
                <div>
                    <h2 className="text-6xl font-bold mt-10 mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-100">Our Mission</h2>
                </div>      
                <Image className=" md:w-4/5 l:w-3/5 xl:w-3/5 2xl:w-3/5 h-auto p-5 mx-auto my-auto" src="/mission.svg" width={100} height={100} />
                <div className="join-us">
                    <div className="ca">
                        <p className="font-bold mr-2"> <br /> <FaChalkboardTeacher />Join us and build web3 education&apos;s future</p>
                        <br /> <p className="fill-form"><a href="https://h3sy8tusoyk.typeform.com/to/ZScdGa5l?typeform-source=www.theblockchainhive.com">Fill Campus ambassador form➔</a></p>
                    </div>
                    <div className="educator">
                        <p className="font-bold mr-2"> <br /><FaUserGraduate />Educate community with us</p>
                        <br /> <p className="fill-form"><a href="">Join us as an educator➔</a></p>
                    </div>
                </div>
            </div>    
        </main>
    )

}
export default JoinUs;
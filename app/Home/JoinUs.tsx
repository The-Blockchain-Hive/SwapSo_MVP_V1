import React from "react";
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const JoinUs = () => {

    return(
        <main className="relative w-full h-auto mb-24">
            <h2 className="text-6xl font-bold mb-4 text-center  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-white"> Join Us</h2>
            <div className="mt-12 text-white text-center">  
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 p-2">
                    <div className="w-4/5 mx-auto bg-gray-800 p-16 rounded-lg flex flex-col justify-center items-center">
                        <FaChalkboardTeacher className="text-5xl mb-4 text-cyan-500" />
                        <p className="font-bold text-xl mb-4">Join us and build web3 education&apos;s future</p>
                        <a href="https://cip.swapso.io" className="text-cyan-300 hover:underline">Join our Campus Influencers Program➔</a>
                    </div>
                    <div className="w-4/5 mx-auto bg-gray-800 p-16 rounded-lg flex flex-col justify-center items-center">
                        <FaUserGraduate className="text-5xl mb-4 text-cyan-500" />
                        <p className="font-bold text-xl mb-4">Educate community with us</p>
                        <a href="" className="text-cyan-300 hover:underline">Join us as an educator➔</a>
                    </div>
                </div>
            </div>    
        </main>
    )

}
export default JoinUs;

import React from "react";
import Image from "next/image";
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';
import './JoinUs.css';

const JoinUs = () => {

    return(
        <main>
            <Image className="mission" src="/mission.svg" width={100} height={100} />
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
        </main>
    )

}
export default JoinUs;
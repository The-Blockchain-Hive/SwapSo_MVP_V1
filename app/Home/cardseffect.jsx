import React from "react";
import './cardeffect.css';
import Image from "next/image";

const CardEffect = () => {

    return (
        <div className="container mx-auto">
     <div className="card">
       <div className="face face1"> 
         <div className="content">
            <i className="fab fa-windows"></i>            
           <Image className="mb-6" src='/blockchain.jpg' height={100} width={250} alt="" />
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p className="font-bold"> In this course, take an exciting stroll with us through the world of Blockchain - discovering how it&apos;s changing things around us</p>
           <a href="/Courses">Read more about Blockchain course</a>
         </div>
       </div>
    </div>
    
    <div className="card">
       <div className="face face1">
         <div className="content">
      <i className="fab fa-android"></i>
      <Image className="mb-6" src='/web3.jpg' height={100} width={250} alt="" />
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p className="font-bold"> Dive into the future of the internet; start with Web3 basics and ascend to becoming a wizard of the decentralized digital world.</p>
           <a href="/Courses">Read More about Web3 Concepts</a>
         </div>
       </div>
    </div>
    
    
    <div className="card">
       <div className="face face1">
         <div className="content">
           <i className="fab fa-apple"></i>
           <Image className="mb-6 opacity" src='/entrepreneurship.jpg' height={100} width={250} alt="" />
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p className="font-bold"> An entrepreneur&apos;s Guide: learn the art required for successful startup building</p>
           <a href="/Courses">Read more about Entrepreneurship course</a>
         </div>
       </div>
    </div>
    
  </div>
    );
};
export default CardEffect;
import React from "react";
import './cardeffect.css';
import Image from "next/image";

const CardEffect = () => {

    return (
        <div className="container mx-auto mt-16">
     <div className="card">
       <div className="face face1"> 
         <div className="content">
            <i className="fab fa-windows"></i>            
           <Image className="mb-6" src='/4.png' height={100} width={250} alt="" />
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p className="font-bold"> In this course, take an exciting stroll with us through the world of deCentralised Apps and make your own DApp.</p>
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
           <Image className="mb-6 opacity" src='/5.png' height={100} width={250} alt="" />
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p className="font-bold"> Learn how to connect wallet and use our Platform</p>
           <a href="/Courses">Read more about Know Your SwapSo</a>
         </div>
       </div>
    </div>
    
  </div>
    );
};
export default CardEffect;
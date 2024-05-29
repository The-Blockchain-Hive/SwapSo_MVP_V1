import React, { useEffect, useRef } from "react";
import Image from "next/image";

const TrackPath = () => {
  

  return (
    <div className="body2 w-full flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
        {/* stack 1 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-slate-900 to-cyan-900 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center">Phase 1</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Launching Edtech platform: 22nd May, 2024 </li>
              <li>UI Changes on website: till June End </li>
              <li>Inhouse LMS creation: till July </li>
              <li>Web2 Payment Layer: Simplifying payment methods</li>
              <li>New Course onboarding</li> 
            </ul>
          </div>
        </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-400 z-4 text-white text-center">1</div>
          </div>
          <div className="col-span-4 w-full h-full"></div> 
          {/* stack2*/}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-400 z-4 text-white text-center">2</div>
          </div>
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-slate-900 to-cyan-900 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center">Phase 2</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Certification:</li>
              <p className="ml-4">- Exam Setup</p>
              <p className="ml-4">- Exam Portal</p>
              <p className="ml-4">- University partner certificates</p>
              <li>Decentralised documentation(one stop solution for all kinds of docs. & related verifications)</li>
              <li>Whitepaper & tokenomics release</li>
              <li>Smart wallet: identity linked decentralised wallets </li>
              <li>Hiring partner & portal </li>
            </ul>
          </div>
        </div>
           
          {/* stack3 */}
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-slate-900 to-cyan-900 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Phase 3</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Token Launch</li>
              <li>Education Loans pool</li>
              <li>Scholarship pool</li>
              <li>Donation portal & Pool</li>
              <li>Education consultation</li>
              <li>Tie-up university for accepting crypto payment</li>
            </ul>
          </div>
        </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-400 z-4 text-white text-center">3</div>
          </div>
          <div className="col-span-4 w-full h-full"></div> 
          {/* stack4 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-cyan-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-cyan-400 z-4 text-white text-center">4</div>
          </div>
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-slate-900 to-cyan-900 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Phase 4</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>University of SwapSo- might be an International institute running complete degrees on chain.</li>
              <li>SwapSo L2 plan </li>
              <li>Open learning protocol</li>
              <li>S-Pay: Student pay: for small loans and finance management.</li>
              <li>SwapSo decentralised Credit system</li>
              <li>Common hiring portal for all partner institutes & Colleges.</li>
            </ul>
          </div>
        </div>          
      </div>
    </div>

  );
};

export default TrackPath;
// 'use client'
// import { useState } from 'react';

// export default function TrackPath() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const handleDotClick = (index) => {
//     setActiveIndex(index);
//   };

//   const handleScroll = (scrollOffset) => {
//     setActiveIndex(Math.floor(scrollOffset / window.innerWidth));
//   };

//   return (
//     <div>
//       <div className="cards-container" onScroll={(e) => handleScroll(e.target.scrollLeft)}>
//         <div className="card">Card 1</div>
//         <div className="card">Card 2</div>
//         <div className="card">Card 3</div>
//         <div className="card">Card 4</div>
//         <div className="card">Card 5</div>
//         <div className="card">Card 6</div>
//       </div>
//       <div className="dots-container">
//         {[0, 1, 2, 3, 4, 5].map((index) => (
//           <span
//             key={index}
//             className={`dot ${activeIndex === index ? 'active' : ''}`}
//             onClick={() => handleDotClick(index)}
//           />
//         ))}
//       </div>
//       <style jsx>{`
//         .cards-container {
//           display: flex;
//           overflow-x: scroll;
//           scroll-snap-type: x mandatory;
//           padding-bottom: 10px;
//           margin-bottom: 20px;
//         }
        
//         .card {
//           flex: 0 0 auto;
//           width: 300px;
//           height: 200px;
//           margin-right: 20px;
//           background-color: #f0f0f0;
//           scroll-snap-align: start;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           font-size: 24px;
//           border-radius: 10px;
//         }
        
//         .dots-container {
//           display: flex;
//           justify-content: center;
//         }
        
//         .dot {
//           width: 10px;
//           height: 10px;
//           border-radius: 50%;
//           background-color: #ccc;
//           margin: 0 5px;
//           cursor: pointer;
//         }
        
//         .dot.active {
//           background-color: #000;
//         }
//       `}</style>
//     </div>
//   );
// }


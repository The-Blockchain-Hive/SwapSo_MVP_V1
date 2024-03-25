import React, { useEffect, useRef } from "react";
import Image from "next/image";

const TrackPath = () => {
  

  return (
    <div className="body2 w-full flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
        {/* stack 1 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center">Q1-2024</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Initial Website Launch</li>
              <li>Initial Course Onboarding</li>
              <li>Swapso EdTech Launch</li>
            </ul>
          </div>
        </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
          </div>
          <div className="col-span-4 w-full h-full"></div> 
          {/* stack2*/}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">2</div>
          </div>
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center">Q2-2024</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Swapso Ecosystem Lite Paper</li>
              <li>EdTech model expansion</li>
            </ul>
          </div>
        </div>
           
          {/* stack3 */}
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Q3-2024</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Tokenomics announcement</li>
              <li>Start Building a L2 Blockchain</li>
              <li>EdTech model expansion</li>
            </ul>
          </div>
        </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">3</div>
          </div>
          <div className="col-span-4 w-full h-full"></div> 
          {/* stack4 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">4</div>
          </div>
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Q4-2024</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Testnet Launch</li>
              <li>University Partnerships</li>
            </ul>
          </div>
        </div>
          {/* stack5 */}
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center">Q1-2025</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Token Public Launch</li>
              <li>Staking pool announcement</li>
              <li>Scholarship pool announcement</li>
              <li>Bridge and Multiple Dex Listing</li>
            </ul>
          </div>
        </div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">5</div>
          </div>
          <div className="col-span-4 w-full h-full"></div> 
          {/* stack6 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">6</div>
          </div>
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Q2-2025</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Mainnet Launch</li>
              <li>On-chain Certification</li>
              <li>Centralized Exchange (CEX) Listing</li>
            </ul>
          </div>
        </div>
        
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Q3-2025</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>Launch Smart wallets</li>
            </ul>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">7</div>
          </div>
        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-indigo-300"></div>
            <div className="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">8</div>
          </div>
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> Q4-2025</h1>
            <ul className="list-disc ml-4 font-comfortaa">
              <li>On-chain Univeristy Trials</li>
              <li>S-pay Launch</li>
              <li>Token Trading Launch</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TrackPath;

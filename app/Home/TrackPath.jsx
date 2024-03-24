import React, { useEffect, useRef } from "react";
import Image from "next/image";

const TrackPath = () => {
  

  return (
    <div className="body2 w-full flex justify-center items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
        {/* stack 1 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> STAGE1</h1>
            <ul className="list-disc ml-4">
              <li> Launching MVP</li>
              <li>Simplifying payment</li>
              <li>Gain initial 10,000 users</li>
              <li>Implement Blockchain courses in Universities.</li>
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
            <h1 className="text-white text-xl font-bold py-2 text-center"> STAGE 2</h1>
            <ul className="list-disc ml-4">
              <li>Setting up an education based NGO</li>
              <li>Educator KPIs and rating system</li>
              <li>Smart contract based revenue sharing</li>
            </ul>
          </div>
        </div>
           
          {/* stack3 */}
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> STAGE 3</h1>
            <ul className="list-disc ml-4">
              <li>Blockchain based certification</li>
              <li>Onchain identity for students</li>
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
            <h1 className="text-white text-xl font-bold py-2 text-center"> STAGE 4</h1>
            <ul className="list-disc ml-4">
              <li>Onboarding Industry partners to hire top talent. </li>
              <li>Onchain Scholarships for top students. </li>
            </ul>
          </div>
        </div>
          {/* stack5 */}
          <div className="col-span-4 w-full h-full">
          <div className="w-full h-full bg-gradient-to-b from-black to-blue-1100 rounded-xl p-2 md:pl-4">
            <h1 className="text-white text-xl font-bold py-2 text-center"> STAGE 5</h1>
            <ul className="list-disc ml-4">
              <li>Open learning protocol</li>
              <li>Accountability protocol</li>
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
            <h1 className="text-white text-xl font-bold py-2 text-center"> STAGE 6</h1>
            <ul className="list-disc ml-4">
              <li>We will Keep building the future</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TrackPath;

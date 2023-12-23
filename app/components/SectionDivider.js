// components/SectionDivider.js

import React from 'react';

const SectionDivider = ({ label }) => {
  return (
    <div className="flex items-center justify-start my-8">      
      <div className="bg-gray-300 h-px w-16 rounded-full"></div>
        <div className="bg-white w-max rounded-full p-2">
          <span className="text-black">{label}</span>
        </div>
        <div className="bg-gray-300 h-px w-96 rounded-full"></div>          
    </div>
  );
};

export default SectionDivider;

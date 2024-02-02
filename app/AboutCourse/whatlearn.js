import React from 'react'

export default function WhatWillYouLearnSection (props)  {

  const { coursesData } = props;

  return (
    <section className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">What Will You Learn</h2>
        <div className="flex flex-wrap mx-4">
          {/* Learn Topics */}
          {coursesData[0]?.WhatLearn.map((topic, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 px-4 mb-4 p-4">
              <div className="hover:bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 border border-gray-300 p-6 rounded-lg hover:shadow-lg transition duration-300 text-black">
                {topic}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

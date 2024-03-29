import React from 'react'

export default function AboutSection(props) {
  const { coursesData } = props;
  return (
<section className="bg-white h-screen/2 w-screen text-black p-8">
  <div className="mx-auto my-auto">
    <h2 className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 mb-10">About the Course</h2>        
  </div>
  <div className='w-4/5 lg:w-1/2 xl:w-1/2 mx-auto mb-12'>
    <p className='text-center text-md md:text-xl lg:text-2xl xl:text-2xl mx-8 text-justify'>{coursesData[0]?.AboutCourse}</p>
  </div>
</section>

  );
};
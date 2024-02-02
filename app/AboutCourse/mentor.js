import React from 'react'
import Image from 'next/image';

export default function MentorSection (props) {
  
  const { coursesData } = props;

  const imgUrl = `/${coursesData[0]?.EducatorImgUrl}.jpg`;

  return (
    <section className="bg-white text-black p-8">
      <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">Meet Your Mentor</h2>
      <div className="flex items-center justify-center mt-16">
        <div className="w-1/2 ml-96">
          <Image 
            src={imgUrl} 
            alt={coursesData[0]?.CourseEducator}
            width={200}
            height={200} 
            className="w-full h-auto mb-4 object-cover rounded-lg"
            style={{maxWidth:'300px'}}
          />
          {/* <div className="flex flex-wrap space-x-4">
            {/* Mentor Skills /}
            {aboutCourseData.course.mentor.skills.map((skill, index) => (
              <div key={index} className="border border-white rounded-full p-2">
                {skill}
              </div>
            ))}
          </div> */}
        </div>
        <div className="w-1/2 mr-96">
          {/* LinkedIn Link */}
          <p className="mb-4 text-xl">{coursesData[0]?.Educator_desc}</p>
          <a href={coursesData[0]?.EducatorSocials} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300">
            {coursesData[0]?.CourseEducator} on LinkedIn
          </a>
        </div>
      </div> 
     
    </section>
  );
};
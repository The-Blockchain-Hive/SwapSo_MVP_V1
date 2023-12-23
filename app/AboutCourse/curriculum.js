import React from 'react'

export default function CurriculumSection  ()  {

   

  return (
    <section className="bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Course Curriculum</h2>
        {/* Curriculum Dropdowns */}
        {/* {a.map((section, index) => (
          <div key={index} className="mb-6">
            <div className="text-lg font-semibold mb-2">{aboutCourseData.curriculum}</div>
            {/* Subsections *//*
            {aboutCourseData.course.curriculum.map((subsection, subIndex) => (
              <div key={subIndex} className="mb-2">
                <div className="cursor-pointer text-blue-500 hover:underline">{aboutCourseData.course.curriculum.section.subsection.title}</div>
                {/* Subtopics *//*
                <div className="ml-4">
                  {aboutCourseData.course.curriculum.section.subsection.subtopics.map((subtopic, subtopicIndex) => (
                    <div key={subtopicIndex} className="text-sm text-gray-500 ml-4">
                      {subtopic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))} */}
        {/* Download Curriculum Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-2 px-6">
          Download Curriculum
        </button>
      </div>
    </section>
  );
};

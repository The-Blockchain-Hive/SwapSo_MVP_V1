'use client'
  import React, { useState } from 'react';

  // Use the aboutCourseData variable as the source of data
const CourseCurriculum = () => {

  const [openSections, setOpenSections] = useState([]);
  
  const toggleSection = (index) => {
    const isOpen = openSections.includes(index);
    if (isOpen) {
      setOpenSections(openSections.filter((item) => item !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };
  
  // Declare the aboutCourseData variable here
  let aboutCourseData = {
    "course": {
      "name": "React Mastery",
      "description": "Master React and build powerful web applications.",
      "about": "In this comprehensive course, you'll learn the ins and outs of React and how to build modern web applications.",
      "tags": ["React", "JavaScript", "Web Development"],
      "imageUrl": "/path/to/hero-image.jpg",
      "learnTopics": ["React Basics", "State Management", "Component Lifecycle", "React Hooks", "API Integration"],
      "mentor": {
        "image": "/path/to/mentor-image.jpg",
        "name": "John Doe",
        "description": "Experienced full-stack developer with a passion for teaching.",
        "skills": ["React", "Node.js", "JavaScript", "HTML", "CSS"],
        "linkedin": "https://www.linkedin.com/in/johndoe/"
      },
      "curriculum": [
        {
          "section": {
            "title": "Getting Started",
            "subsections": [
              {
                "title": "Introduction to React",
                "subtopics": ["Setting up the environment", "Understanding JSX", "Creating your first component"]
              },
              {
                "title": "Components and Props",
                "subtopics": ["Functional components", "Class components", "Props and PropTypes"]
              }
            ]
          }
        },
        {
          "section": {
            "title": "Cryptocurrencies",
            "subsections": [
              {
                "title": "Local State",
                "subtopics": ["useState hook", "Updating state", "Handling forms"]
              },
              {
                "title": "Global State",
                "subtopics": ["Context API", "State management libraries"]
              }
            ]
          }
        },
        {
          "section": {
            "title": "Smart Contracts",
            "subsections": [
              {
                "title": "React Hooks",
                "subtopics": ["useEffect", "useContext", "Custom hooks"]
              },
              {
                "title": "Routing in React",
                "subtopics": ["React Router", "Navigation patterns"]
              }
            ]
          }
        }
      ]
    }
  };
  
  // Use the aboutCourseData variable instead of the course prop
  return (
    <div className="bg-white text-black mx-auto text-center p-8">
    <div>
    <h2 className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 mb-10">Curriculum</h2>        
      {aboutCourseData.course.curriculum.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h4
            onClick={() => toggleSection(sectionIndex)}
            className="cursor-pointer text-xl font-semibold mb-3 flex items-center"
          >
            <span>{section.section.title}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 h-4 w-4 transition-transform ${
                openSections.includes(sectionIndex) ? 'transform rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => toggleSection(sectionIndex)}
            >
              <path
                fillRule="evenodd"
                d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 111.414-1.414L10 15.586l6.293-6.293a1 1 0 111.414 1.414l-7.999 8A1 1 0 0110 18z"
                clipRule="evenodd"
              />
            </svg>
          </h4>
          {openSections.includes(sectionIndex) && (
            <div>
              {section.section.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className="ml-4">
                  <h5
                    onClick={() => toggleSection(`${sectionIndex}.${subIndex}`)}
                    className="cursor-pointer text-lg font-medium mb-2"
                  >
                    {subsection.title}
                  </h5>
                  {openSections.includes(`${sectionIndex}.${subIndex}`) && (
                    <ul className="list-disc ml-4">
                      {subsection.subtopics.map((subtopic, subtopicIndex) => (
                        <li key={subtopicIndex} className="mb-1">
                          {subtopic}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);
};
export default CourseCurriculum;

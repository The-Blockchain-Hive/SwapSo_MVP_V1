import React from 'react'

export default function WhatWillYouLearnSection ()  {

    var aboutCourseData ={
        "course": {
          "name": "React Mastery",
          "description": "Master React and build powerful web applications.",
          "about": "In this comprehensive course, you'll learn the ins and outs of React and how to build modern web applications.",
          "tags": ["React", "JavaScript", "Web Development"],
          "imageUrl": "/path/to/hero-image.jpg",
          "learnTopics": ["React Basics", "State Management", "Component Lifecycle", "React Hooks", "API Integration", "React Libraries"],
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
                "title": "State Management",
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
                "title": "Advanced React",
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
      }

  return (
    <section className="bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">What Will You Learn</h2>
        <div className="flex flex-wrap mx-4">
          {/* Learn Topics */}
          {aboutCourseData.course.learnTopics.map((topic, index) => (
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

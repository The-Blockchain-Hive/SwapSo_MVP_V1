import React from 'react'

export default function WhatWillYouLearnSection ()  {

    var aboutCourseData ={
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
    <section className="bg-white flex flex-col flex-wrap pb-20 items-center justify-center h-max w-screen text-black">
        <div className=" p-5 self-center">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">What Will You Learn</h2>
        </div> 
        <div className="flex flex-wrap ">
          {/* Learn Topics */}
          {aboutCourseData.course.learnTopics.map((topic, index) => (
            <div className='flex p-5'>
              <div key={index} className="text-xl bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">            
                <span class="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                  {topic}              
              </div>
            </div>  
          ))}
        </div>
      
    </section>
  );
};

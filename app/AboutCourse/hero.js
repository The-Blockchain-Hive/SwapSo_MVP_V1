import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function  HeroSection(){

    var aboutCourseData ={
        "course": {
          "name": "React Mastery",
          "description": "Master React and build powerful web applications.",
          "about": "In this comprehensive course, you'll learn the ins and outs of React and how to build modern web applications.",
          "tags": ["React", "JavaScript", "Web Development"],
          "imageUrl": '/js.png',
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
    <section className="bg-white text-black p-8">
      <div className='flex h-screen w-screen justify-around mt-32 lg:ml-24 xl:ml-24'>
          <div className="flex flex-col gap-10 items-center">
            <span className="justify-self-start self-start font-extrabold text-gray-400 mb-8 lg:ml-24">All Courses &gt; {aboutCourseData.course.name}</span>
            <div className="flex w-full md:w-1/2">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 lg:ml-24 xl:ml-24">{aboutCourseData.course.name}</h1>
                <p className="text-teal-600 mb-10 text-xl mt-4 md:text-3xl lg:text-3xl xl:text-3xl md:ml-24 lg:ml-24 xl:ml-24">{aboutCourseData.course.description}</p>
                <div className="flex-row flex-wrap w-1/2 mb-10">
                  {/* Tags */}
                  {aboutCourseData.course.tags.slice(0, 3).map((tag, index) => (
                    <div key={index} className="bg-cyan-950 text-cyan-400 border border-cyan-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group md:ml-24 lg:ml-24 xl:ml-24">
                      <span class="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                      {tag}
                    </div>
                  ))}
                </div>
                <button className="w-2/3 relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 rounded-md bg-sky-800 font-extrabold md:ml-24 lg:ml-24 xl:ml-24">                                 
                  Start Learning
                </button>
              </div>
            </div>
          </div>
         
          <div className="overflow-hidden rounded-xl w-2/5 mt-28">
            {/* <Image src={aboutCourseData.course.imageUrl} alt={aboutCourseData.course.name} className="w-full px-20 h-auto object-cover" /> */}
          </div>
      </div>
      
    </section>
  );
};

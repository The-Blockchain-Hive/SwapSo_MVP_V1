import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';

export default function MentorSection () {

    var aboutCourseData ={
        "course": {
          "name": "React Mastery",
          "description": "Master React and build powerful web applications.",
          "about": "In this comprehensive course, you'll learn the ins and outs of React and how to build modern web applications.",
          "tags": ["React", "JavaScript", "Web Development"],
          "imageUrl": "/path/to/hero-image.jpg",
          "learnTopics": ["React Basics", "State Management", "Component Lifecycle", "React Hooks", "API Integration"],
          "mentor": {
            "image": "/advisor1.jpg",
            "name": "John Doe",
            "description": "Mr. Metaverse 🌐 | Keynote speaker 🤵🏾‍♂️ | Afronaut futurist 🌍 | Helping Brands & Companies create value in the digital age ✨ | Top 30 most influential people in the Metaverse 🌌",
            "skills": [" Work Experience: 10+ Years", " Teaching Experience: 10+ Years"],
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
    <section className="bg-gray-800">
      <div className="bg-gray-800 w-2/3 mx-auto text-white p-8 flex flex-col">
        <div className="p-5 self-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Meet Your Mentor</h2>
        </div>
        <div className='flex'> 
          <Image width={500} height={100} src={aboutCourseData.course.mentor.image} alt={aboutCourseData.course.mentor.name} className="mr-4  mb-4 object-cover rounded-xl" />
          <div className='flex flex-col justify-center space-y-8'>
            <h3 className='text-xl font-semibold'>About Mentor</h3>      
            <p className="text-gray-300 w-full mb-4">{aboutCourseData.course.mentor.description}</p>
            <div className="flex space-x-4">
              {/* Mentor Skills */}
              {aboutCourseData.course.mentor.skills.map((skill, index) => (
                <div key={index} className="border border-white rounded-full p-3">
                  {skill}
                </div>
              ))}
            </div>            
          </div>
        </div>
        <div className="w-1/2">
          {/* LinkedIn Link */}
          <a href={aboutCourseData.course.mentor.linkedin} target="_blank" rel="noopener noreferrer" className="flex gap-2 items-center text-gray-300">
            <FaLinkedinIn/>
            {aboutCourseData.course.mentor.name} on LinkedIn
          </a>
        </div>
      </div> 
     
    </section>
  );
};
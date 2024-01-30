import React from 'react'

export default function WhatWillYouLearnSection ()  {

    var aboutCourseData ={
        "course": {
          "name": "React Mastery",
          "description": "Welcome to Web3 Concepts- : Your Guide to the New Internet Realm. This specially designed course aims to transport you into the world of Web3, the next generation of the internet. Whether you're a beginner stepping into the digital realm or a tech enthusiast looking to keep up with the internet's evolution, we have got you covered. By the end of this course, you won’t just understand Web3 — you'll be poised to contribute to this new era of digital evolution. ",
          "tags": ["React", "JavaScript", "Web Development"],
          "imageUrl": "/path/to/hero-image.jpg",
          "learnTopics": ["Decentralization", "Cryptocurrencies", "Smart Contracts", "DApps & DAOs", "Web3 Storage & IPFS", "Web3 Infrastructure"],
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

import React from 'react'
import Image from 'next/image';

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
            "image": "teddy.jpg",
            "name": "John Doe",
            "description": "Mr. Metaverse 🌐 | Keynote speaker 🤵🏾‍♂️ | Afronaut futurist 🌍 | Helping Brands & Companies create value in the digital age ✨ | Top 30 most influential people in the Metaverse 🌌",
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
      <h2 className="text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700">Meet Your Mentor</h2>
      <div className="flex items-center justify-center mt-16">
        <div className="w-1/2 ml-96">
          <Image 
            src={aboutCourseData.course.mentor.image} 
            alt={aboutCourseData.course.mentor.name} 
            className="w-full h-auto mb-4 object-cover rounded-lg"
            style={{maxWidth:'300px'}}
          />
          <div className="flex flex-wrap space-x-4">
            {/* Mentor Skills */}
            {aboutCourseData.course.mentor.skills.map((skill, index) => (
              <div key={index} className="border border-white rounded-full p-2">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 mr-96">
          {/* LinkedIn Link */}
          <p className="mb-40 text-xl">{aboutCourseData.course.mentor.description}</p>
          <a href={aboutCourseData.course.mentor.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300">
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              {/* LinkedIn Icon */}
              <path d="M2 2v20h20V2H2zm17.5 4a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-2 6v8h-3v-7.5c0-1.73-1.57-3.5-3.5-3.5S7 9.77 7 11.5V18H4v-8h3v1.5C7 9.1 8.57 7 11 7s4 2.1 4 4.5V18h-3z" />
            </svg>
            {aboutCourseData.course.mentor.name} on LinkedIn
          </a>
        </div>
      </div> 
     
    </section>
  );
};
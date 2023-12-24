import React from 'react'

export default function AboutSection() {

    var aboutCourseData ={
        "course": {
          "name": "React Mastery",
          "description": "Master React and build powerful web applications.",
          "about": "Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosTorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
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
    <section className="bg-white flex flex-col flex-wrap p-20 justify-center h-max w-screen text-black">
      <div className=" p-5 self-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">About the Course</h2>        
      </div>
      <div className='flex-1'>
        <p className='p-5'>{aboutCourseData.course.about}</p>
        <p className='p-5'>{aboutCourseData.course.about}</p>
        <p className='p-5'>{aboutCourseData.course.about}</p>
      </div>
    </section>
  );
};
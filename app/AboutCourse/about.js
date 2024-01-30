import React from 'react'

export default function AboutSection() {

  var aboutCourseData ={
    "course": {
      "name": "React Mastery",
      "description": "Master React and build powerful web applications.",
      "about": "Welcome to 'Blockchain Bonanza' - your one-stop destination to decode the world of blockchain. This course is meticulously designed to empower you with a comprehensive understanding of blockchain technology, right from the fundamentals to its far-reaching applications. We start off easing you into the concept of blockchain, helping to grasp the basics.From there, we dive deep into one of the most famous applications of blockchain - Bitcoin. We explore its workings along with an overview of other digital currencies. But that's not where we stop! We push beyond to explore various applications of blockchain in different industries, illustrating how it is reshaping the world one block at a time. Throughout your journey, you'd be engaging with interactive material, practical examples, and hands-on exercises that make your blockchain learning experience fun and engaging. Join 'Blockchain Bonanza', and let's set off on this exhilarating journey of discovery together!",
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
<section className="bg-white h-screen/2 w-screen text-black p-8">
  <div className="mx-auto my-auto">
    <h2 className="text-center text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-700 mb-10">About the Course</h2>        
  </div>
  <div className='w-4/5 lg:w-1/2 xl:w-1/2 mx-auto mb-12'>
    <p className='text-center text-justify text-md md:text-xl lg:text-2xl xl:text-2xl mx-8'>{aboutCourseData.course.about}</p>
  </div>
</section>

  );
};
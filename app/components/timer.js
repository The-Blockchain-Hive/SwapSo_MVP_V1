import React, { useState, useEffect } from "react";


const Timer = () => {

  // Function to calculate remaining time for each course
  const calculateRemainingTime = () => {
    const currentDate = new Date();

    const updatedCourses = initialCourseData.courses.map(course => {
      const expiryDate = new Date(course.courseExpiry);
      const timeDifference = expiryDate - currentDate;

      const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

      return {
        ...course,
        daysRemaining,
        hoursRemaining,
        minutesRemaining
      };
    });

    setCourseData({
      courses: updatedCourses
    });
  };

  // Call the function initially
  calculateRemainingTime();

  useEffect(() => {
    const interval = setInterval(() => {
      calculateRemainingTime();
    }, 1000 * 60); 
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gradient-to-b from-blue-1125 to-blue-1150">
    </main>
  );
};

export default Timer;
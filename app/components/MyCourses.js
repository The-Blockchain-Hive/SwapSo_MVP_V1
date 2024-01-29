import React from 'react';
import NewCard from './newCard';

const MyCourses = ({ purchasedCourses }) => {
  return (
    <div>      
      {purchasedCourses.map((course, index) => (
        <NewCard key={index} {...course} />
      ))}
    </div>
  );
};

export default MyCourses;

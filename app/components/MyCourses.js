import React from 'react';
import SellCard from './SellCard'
import NewCard from './newCard';

const MyCourses = ({ purchasedCourses }) => {
  return (
    <div> 
      <div>
      {purchasedCourses.map((course, index) => (
        <NewCard key={index} {...course} />
      ))}
      </div>
    </div>
  );
};

export default MyCourses;

import React from 'react';

const MyVideoComponent = () => {
  return (
    <div>
      <h1>My Video Component</h1>
      <video controls width="400" height="300">
        <source src="tbh-v1/public/animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default MyVideoComponent;

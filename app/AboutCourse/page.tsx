// components/CoursePage.js

import React from 'react';
import HeroSection from './hero';
import AboutSection from './about';
import WhatWillYouLearnSection from './whatlearn';
import MentorSection from './mentor';
import CurriculumSection from './curriculum';
const CoursePage = () => {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <WhatWillYouLearnSection/>
      <MentorSection/>
      <CurriculumSection/>
    </div>
  );
};

export default CoursePage;

import React, { useEffect, useRef } from "react";
import './TrackPath.css';

const TrackPath = () => {

  const sliderRef = useRef(null);

    
  useEffect(() => {

    const slider = sliderRef.current;
    const slides = slider.querySelectorAll('.upcoming-slide');

    let slideIndex = 0;
    let slideTimer = null;

    const startSlideShow = () => {
      slideTimer = setInterval(() => {
        slideIndex++;
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;

        if (slideIndex === slides.length - 1) {
          slideIndex = -1;
        }
      }, 3000);
    };

    const stopSlideShow = () => {
      clearInterval(slideTimer);
    };

    slider.addEventListener('mouseout', stopSlideShow);
    slider.addEventListener('mouseover', startSlideShow);

    startSlideShow();

    return () => {
      clearInterval(slideTimer);
    };
  }, []);



  return (
    <div id="services-section" className="section">
      <div className="events">
        <div className="upcoming-slider-container">
          <div className="upcoming-slider" ref={sliderRef}>
            <div className="upcoming-slide">
              <p className="font-bold">Stage 1</p>
              <ul className="text-justify">
                <li>Launching MVP</li>
                <li>Simplifying payment </li>
                <li>Gain initial 10,000 validators</li>
                <li>Launching Certification exams</li>
              </ul>
            </div>
            <div className="upcoming-slide">
            <p className="font-bold">Stage 2</p>
              <ul className="">
                <li>Setting up an education based NGO</li>
                <li>Educator KPIs and rating system</li>
                <li>Smart contract based revenue sharing</li>
              </ul>
            </div>
            <div className="upcoming-slide">
            <p className="font-bold">Stage 3</p>
              <ul className="">
                <li>B2B Integration API</li>
                <ul className=""> Onboarding Institutes for 
                  <li>Running Electives</li>
                  <li>Blockchain based certification</li>
                  <li>Onchain identity for students</li>
                </ul>
              </ul>
            </div>
            <div className="upcoming-slide">
            <p className="font-bold">Stage 4</p>
              <ul className="">
                <li>Onboarding Industry partners to hire top talent. </li>
                <li>Onchain Scholarship for top students. </li>
              </ul>
            </div>
            <div className="upcoming-slide">
            <p className="font-bold">Stage 5</p>
              <ul className="">
                <li>Open learning protocol</li>
                <li>Accountability protocol</li>
              </ul>
            </div>
            <div className="upcoming-slide">
            <p className="font-bold">Stage 6</p>
              <ul className="">
                <li>We will Keep building the future</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPath;
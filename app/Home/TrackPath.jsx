import React from "react";

const TrackPath = () => {
    
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
        <div className="section-head">Upcoming Events</div>
        <div className="upcoming-slider-container">
          <div className="upcoming-slider" ref={sliderRef}>
            <div className="upcoming-slide">
              <p>MUMBAI</p>
              <p className="upcoming-duration-events">Coming Soon</p>
            </div>
            <div className="upcoming-slide">
              <p>JAIPUR</p>
              <p className="upcoming-duration-events">Coming Soon</p>
            </div>
            <div className="upcoming-slide">
              <p>BANGALORE</p>
              <p className="upcoming-duration-events">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPath;
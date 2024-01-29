import React, { useEffect, useState } from 'react';

const Timer = ({ selectedTimeframe }) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const daysInSelectedTimeframe = parseInt(selectedTimeframe)
    const timeframeInSeconds = daysInSelectedTimeframe * 24 * 60 * 60;
    setTimeLeft(timeframeInSeconds);
    console.log("selected timeframe:", selectedTimeframe);
    console.log("time in seconds", timeframeInSeconds);
    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime <= 0 ? 0 : prevTime - 1));
    }, 1000);

    return () => clearInterval(countdown);
  }, [selectedTimeframe]);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor(((timeLeft % (60 * 60 * 24)) / (60 * 60)));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      {days} D : {hours} H : {minutes} M : {seconds} S  remaining
    </div>
  );
};

export default Timer;

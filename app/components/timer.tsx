import React, { useEffect, useState } from 'react';

interface TimerProps {
  selectedTimeframe: string;
}

const Timer: React.FC<TimerProps> = ({ selectedTimeframe }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const storedTimeLeft = localStorage.getItem('timeLeft');
    const currentTime = Date.now();
    const storedTimestamp = localStorage.getItem('timestamp');
    const elapsedTime = storedTimestamp ? currentTime - parseInt(storedTimestamp) : 0;
    const remainingTime = storedTimeLeft ? Math.max(0, parseInt(storedTimeLeft) - Math.floor(elapsedTime / 1000)) : 0;
    return remainingTime;
  });

  useEffect(() => {
    const daysInSelectedTimeframe = parseInt(selectedTimeframe);
    const timeframeInSeconds = daysInSelectedTimeframe * 24 * 60 * 60;
    setTimeLeft((prevTime) => {
      const storedTimestamp = localStorage.getItem('timestamp');
      const currentTime = Date.now();
      const elapsedTime = storedTimestamp ? currentTime - parseInt(storedTimestamp) : 0;
      const remainingTime = Math.max(0, prevTime - Math.floor(elapsedTime / 1000));
      return remainingTime > timeframeInSeconds ? timeframeInSeconds : remainingTime;
    });

    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime <= 0 ? 0 : prevTime - 1));
    }, 1000);

    return () => clearInterval(countdown);
  }, [selectedTimeframe]);

  useEffect(() => {
    const currentTime = Date.now();
    localStorage.setItem('timestamp', currentTime.toString());
  }, []);

  useEffect(() => {
    localStorage.setItem('timeLeft', timeLeft.toString());
  }, [timeLeft]);

  const days = Math.floor(timeLeft / (60 * 60 * 24));
  const hours = Math.floor(((timeLeft % (60 * 60 * 24)) / (60 * 60)));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div>
      {days} D : {hours} H : {minutes} M : {seconds} S remaining
    </div>
  );
};

export default Timer;

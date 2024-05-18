import React, { useEffect, useState } from "react";
import { CountDownType } from "../constants/Types";

const DEFAULT_TIMER = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const CountDown: React.FC<CountDownType> = ({
  startTime,
  duration,
  showTime,
}) => {
  const [timer, setTimer] = useState(DEFAULT_TIMER);

  const updateCountDown = () => {
    setInterval(() => {
      const currentTime = parseInt(`${Number(new Date()) / 1000}`);
      const endTime = startTime + duration;

      if (endTime <= currentTime) setTimer(DEFAULT_TIMER);
      else {
        const remainingTimeInSecs = endTime - currentTime;
        const days = Math.floor(remainingTimeInSecs / (24 * 60 * 60));

        const divisor_for_hours = remainingTimeInSecs % (24 * 60 * 60);
        const hours = Math.floor(divisor_for_hours / (60 * 60));

        const divisor_for_minutes = remainingTimeInSecs % (60 * 60);
        const minutes = Math.floor(divisor_for_minutes / 60);

        const divisor_for_seconds = divisor_for_minutes % 60;
        const seconds = Math.ceil(divisor_for_seconds);

        setTimer({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    let interval: any;
    if (!startTime) setTimer(DEFAULT_TIMER);
    else {
      interval = setInterval(() => updateCountDown(), 1000);
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startTime, duration]);

  const response = () => {
    if (showTime)
      return (
        <div>
          {timer.days} D : {timer.hours} H : {timer.minutes} M : {timer.seconds}{" "}
          S remaining
        </div>
      );

    return (
      <div>
        {timer.days}:{timer.hours}:{timer.minutes}:{timer.seconds}
      </div>
    );
  };

  return response();
};

export default CountDown;

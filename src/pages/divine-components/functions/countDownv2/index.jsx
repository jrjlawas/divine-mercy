import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countDown = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    countDown(); // initial call
    const interval = setInterval(countDown, 1000);

    return () => clearInterval(interval); // cleanup
  }, [targetDate]);

  return (
    <span>
      {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
      {timeLeft.seconds}s
    </span>
  );
};

export default Countdown;

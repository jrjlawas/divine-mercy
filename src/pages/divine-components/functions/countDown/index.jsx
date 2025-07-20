import { useState, useEffect } from "react";

const formatNumber = (num) => String(num).padStart(2, "0");

const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const end = new Date(targetDate);
  const difference = end - now;

  if (difference <= 0) {
    return null;
  }

  return {
    days: formatNumber(Math.floor(difference / (1000 * 60 * 60 * 24))),
    hours: formatNumber(Math.floor((difference / (1000 * 60 * 60)) % 24)),
    minutes: formatNumber(Math.floor((difference / 1000 / 60) % 60)),
    seconds: formatNumber(Math.floor((difference / 1000) % 60)),
  };
};

const useCountdown = (targetDate) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
};

export default useCountdown;

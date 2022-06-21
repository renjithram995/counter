import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [days, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const calculateTimer = (diff: number) => {
    setSec(Math.floor(diff % 60));
    setMin(Math.floor((diff / 60) % 60));
    setHour(Math.floor((diff / (60 * 60)) % 24));
    setDay(Math.floor(diff / (60 * 60 * 24)));
  };
  const endDate = new Date(
    new Date(new Date(new Date().setFullYear(2022)).setMonth(6)).setDate(4)
  ).setHours(9, 0, 0);
  useEffect(() => {
    function cleanUp() {
      clearInterval(timeOut);
    }
    const timeOut = setInterval(() => {
      const timeDiff = (endDate - new Date().getTime()) / 1000;
      if (timeDiff < 0) {
        cleanUp();
        return;
      }
      calculateTimer(timeDiff);
    }, 1000);
    return cleanUp;
  });
  return (
    <div className="full-size-container p30 app">
      <div className="timer poppins400 justify-flex-end d-flex">
        <span className="pr10">{days} days</span>
        <span className="pr10">{hour} hours</span>
        <span className="pr10">{min} minutes</span>
        <span className="pr10">{sec} seconds</span>
      </div>
    </div>
  );
}

export default App;

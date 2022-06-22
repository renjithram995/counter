import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [days, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [bgClass, setBgClass] = useState("image1");
  const setBackground = (seconds: number) => {
    if (seconds < 10) {
      setBgClass("image1");
    } else if (seconds < 20) {
      setBgClass("image2");
    } else if(seconds < 30) {
      setBgClass("image3");
    } else if (seconds < 40) {
      setBgClass("image4");
    } else if (seconds < 50) {
      setBgClass("image5");
    } else {
      setBgClass("image6");
    }
  };
  const calculateTimer = (diff: number) => {
    const seconds = Math.floor(diff % 60);
    setSec(seconds);
    setBackground(seconds);
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
    <div className="full-size-container p30 d-flex flex-flow-column bg-80">
      <div className="timer poppins400 justify-center d-flex pb10">
        <span className="pr10">{days} days</span>
        <span className="pr10">{hour} hours</span>
        <span className="pr10">{min} minutes</span>
        <span className="pr10">{sec} seconds</span>
      </div>
      <div className="flex-auto">
        <div
          className={
            "container full-size-container " + bgClass
          }
        ></div>
      </div>
    </div>
  );
}

export default App;

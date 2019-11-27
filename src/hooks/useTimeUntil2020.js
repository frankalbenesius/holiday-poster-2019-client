import { useEffect, useRef, useState } from "react";

export default function useTimeUntil2020() {
  const [timerText, setTimerText] = useState(getTimeUntil2020());

  useInterval(() => {
    setTimerText(getTimeUntil2020());
  }, 1000);

  return timerText;
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function getTimeUntil2020() {
  var now = new Date();
  var endDate = new Date(2020, 0, 1);
  var difference = endDate.getTime() - now.getTime();

  if (difference <= 0) {
    return "NONE";
  } else {
    var seconds = Math.floor(difference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return [days, hours, minutes, seconds]
      .map(num => num.toString().padStart(2, "0"))
      .join(":");
  }
}

import { useEffect, useRef, useState } from "react";

export default function useTimeUntil2020() {
  const [timerText, setTimerText] = useState(
    formatTimeLeft(getTimeUntil2020())
  );

  useInterval(() => {
    const timeValues = getTimeUntil2020();
    const formattedTimeLeft = formatTimeLeft(timeValues);
    setTimerText(formattedTimeLeft);
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

export function submissionsClosed(optionalTimeValues) {
  const timeValues = optionalTimeValues || getTimeUntil2020();
  return Object.values(timeValues).every(value => value === 0);
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

    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
}

function formatTimeLeft(timeValues) {
  if (submissionsClosed(timeValues)) {
    return "None. It's over, y'all.";
  }

  const { days, hours, minutes, seconds } = timeValues;
  if (days > 0) {
    return `${days} days`;
  }

  return [hours, minutes, seconds].map(x => x.toString().padStart(2)).join(":");
}

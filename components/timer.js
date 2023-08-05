import { useEffect, useState } from "react";

export default function Timer({ timeLeft, setTimeLeft, setPlay }) {
  const [start, setStart] = useState(false)

  const handleClick = (e) => {
    setStart(true)
  }
  useEffect(() => {
    if (!timeLeft) {
      setPlay(false)
      return
    }

    // save intervalId to clear the interval when the
    // component re-renders
    if (start) {
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      
      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
    }
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, start]);

  return (
    <div>
      <h1>{timeLeft}</h1>
      {!start &&
        <button onClick={handleClick}>START</button>
      }
    </div>
  );
};
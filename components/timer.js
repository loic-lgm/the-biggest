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
    <div className="timer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button onClick={handleClick}>
          <span className="countdown font-mono text-6xl flex flex-col">
            <span className={timeLeft > 5 ? "text-green-500" : "text-red-800"} style={{"--value":timeLeft}}></span>
          </span>
          {!start && "START"}
        </button>
    </div>
  );
};
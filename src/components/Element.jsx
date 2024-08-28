import { useState, useRef } from "react";
import { useTimer } from "../TimerContext";

function Element({ type, icon }) {
  const { dispatch, prepare, work, rest, cycles } = useTimer();
  const [intervalId, setIntervalId] = useState(null);

  // Map the type to the correct time value
  const timeMap = {
    prepare,
    work,
    rest,
    cycles,
  };



   const currentTime = timeMap[type];

  const startChange = (amount) => {
    if (timeMap[type] === 0 && amount === -1) {
      return;
    }
    dispatch({ type: "changeTime", timeType: type, amount });

    const id = setInterval(() => {
      dispatch({ type: "changeTime", timeType: type, amount });
    }, 80);

    setIntervalId(id);
  };

  const stopChange = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };


  

  return (
    <div className="element">
      <img src={icon} alt={type} />
      <p>{type}</p>
      <div className="time">
        <button
          onMouseDown={() => startChange(-1)}
          onMouseUp={stopChange}
          onMouseLeave={stopChange}
        >
          -
        </button>
        <p>{currentTime}</p>
        <button
          onMouseDown={() => startChange(1)}
          onMouseUp={stopChange}
          onMouseLeave={stopChange}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Element;


import React from "react";
import { useTimer } from "../TimerContext";
function Bottom() {
  let { dispatch, handleStart } = useTimer();

  return (
    <div className="bottom">
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => handleStart()}>Start</button>
    </div>
  );
}

export default Bottom;

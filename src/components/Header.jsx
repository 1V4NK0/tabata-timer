import React from "react";
import "../index.css";
import { useTimer } from "../TimerContext";

function Header() {
  const { trainingTime, cycles } = useTimer();
  const minutes = Math.floor(trainingTime / 60); 
  const seconds = trainingTime % 60;
  return (
    <div className="header">
      {" "}
      {minutes < 1 ? 0 : minutes}
      :{seconds < 10 ? `0${seconds}` : seconds} | {cycles} cycles
    </div>
  );
}

export default Header;

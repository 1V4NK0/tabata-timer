import React from "react";
import Element from "./Element";
import workoutStretchingIcon from "../resources/Work out stretching.png"; // Import the image
import workIcon from "../resources/Workout weight lifting.png";
import restIcon from "../resources/Resting icon.png";
import cycleIcon from "../resources/Cycle icon.png";
import boxingIcon from '../resources/Taekwondo from Flaticon.png'


function Main() {

  return (
    <div className="main">
      <Element type="prepare" time={60} icon={workoutStretchingIcon} />
      <Element type="work" time={60} icon={boxingIcon} />
      <Element type="rest" time={60} icon={restIcon} />
      <Element type="cycles" time={60} icon={cycleIcon} />

    </div>
  );
}

export default Main;

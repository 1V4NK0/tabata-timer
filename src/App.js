import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Bottom from "./components/Bottom";
import { TimerProvider } from "./TimerContext"; // Ensure correct import path

function App() {
  return (
    <TimerProvider>
      <div className="App">
        <Header />
        <Main />
        <Bottom />
      </div>
    </TimerProvider>
  );
}

export default App;

import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Bottom from "../components/Bottom";
import { useReducer } from "react";

const initialState = {
  prepare: 0,
  work: 0,
  rest: 0,
  cycles: 0,
};

function reducer(action, state) {
  switch (action.type) {
    case "start":
      console.log("start");
      return state;
    case "reset":
      console.log("reset")
      return initialState;
    
    default:
      throw new Error("error");
  }
}

function App() {
  const [{ prepare, work, rest, cycles }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <Header />
      <Main />
      <Bottom />
    </div>
  );
}

export default App;

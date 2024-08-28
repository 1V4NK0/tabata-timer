import { useReducer, createContext, useContext } from "react";

const TimerContext = createContext();


const initialState = {
  prepare: 0,
  work: 0,
  rest: 0,
  cycles: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      console.log("start");

      return state;
    case "reset":
      console.log("reset");
      return initialState;
    case "changeTime":
      return {
        ...state,
        [action.timeType]: state[action.timeType] + action.amount,
      };
    default:
      throw new Error("Unknown action type");
  }
}

export function TimerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleStart() {
    dispatch({ type: "start" });
    countDown();
  }
  let trainingTime = (state.prepare + state.work + state.rest) * state.cycles;

  const countDown = () => {
    if (trainingTime === 0) return;
    trainingTime--;
    const id = setInterval(countDown, 1000);
    if (trainingTime === 0) clearInterval(id);
  };

  return (
    <TimerContext.Provider value={{ ...state, dispatch, trainingTime }}>
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("useTimer must be used within a TimerProvider");
  }

  return context;
}

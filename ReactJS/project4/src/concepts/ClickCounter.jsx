import React from "react";
import CounterComp from "./CounterComp";
function ClickCounter({ count, onIncrement }) {
  return (
    <div>
      <h1>I have clicked {count} times</h1>
      <button onClick={onIncrement}>Click Me</button>
    </div>
  );
}

export default CounterComp(ClickCounter);

import React from "react";
import CounterComp from "./CounterComp";

function HoverCounter({ count, onIncrement }) {
  return (
    <div>
      <h1>Over on the text below:</h1>
      <p onMouseOver={onIncrement}>Hover count: {count}</p>
    </div>
  );
}

export default CounterComp(HoverCounter);

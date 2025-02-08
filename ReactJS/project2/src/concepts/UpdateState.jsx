import React from "react";

function UpdateState() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Clicked times:</h1>
      <p>Count: {count}</p>
      {console.log(count)}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default UpdateState;

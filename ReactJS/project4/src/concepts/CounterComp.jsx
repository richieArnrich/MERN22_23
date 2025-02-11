import React, { useState } from "react";

// Counter HOC
const CounterComp = (WrappedComponent) => {
  return () => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    };
    return <WrappedComponent count={count} onIncrement={handleIncrement} />;
    // inner function returns the modified wrapped component
  };
};
// Usage
export default CounterComp;

import React from "react";

function Event5() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1
        onMouseOver={() => {
          setCount(count + 1);
        }}
      >
        Hover the mouse on this line to increase count: {count}
      </h1>
    </div>
  );
}

export default Event5;

import React from "react";

// namespace export
export function Event3() {
  function handleClick() {
    let p1 = document.getElementById("i1");
    p1.innerHTML =
      "Hello I am <b>Amith</b> and I work on <b>full stack development</b>";
  }
  return (
    <div>
      <h1>Event Handling in Functional Components</h1>
      <p id="i1">
        I am <b>Richie</b> and I train on <b>Fullstack</b>
      </p>
      <button onClick={handleClick}>Change Para</button>
    </div>
  );
}

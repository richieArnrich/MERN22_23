import React from "react";
import "./Style1.css";
function Style1() {
  const styleObj = {
    color: "red",
    fontSize: "24px",
    padding: "10px",
    backgroundColor: "yellow",
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", backgroundColor: "green" }}>
        I am heading
      </h1>
      <p style={styleObj}>This is a paragraph</p>
      <div className="box1">I am styled using external css</div>
    </div>
  );
}

export default Style1;

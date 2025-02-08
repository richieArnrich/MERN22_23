import React, { useState } from "react";

function TaskEvent1() {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [fontColor, setFontColor] = useState("");

  function handleSubmit(event) {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    let para = document.createElement("p");
    para.textContent = text;
    para.style.fontSize = fontSize + "px";
    para.style.color = fontColor;
    resultDiv.appendChild(para);
    event.preventDefault();
  }
  return (
    <div>
      <h1 style={{ textAlign: "center", 
        backgroundColor: "violet" }}>
        Interactive Webpage
      </h1>
      <form>
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="text"
          name="content"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="fontSize">Font Size</label>
        <input
          type="text"
          id="fontSize"
          name="fontSize"
          onChange={(e) => {
            setFontSize(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="fontColor">Font Colour</label>
        <input
          type="text"
          id="fontColor"
          name="fontColor"
          onChange={(e) => {
            setFontColor(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <div id="result"></div>
    </div>
  );
}

export default TaskEvent1;

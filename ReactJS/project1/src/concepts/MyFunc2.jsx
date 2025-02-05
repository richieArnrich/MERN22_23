import React from "react";

function MyFunc2(props) {
  const myStyle = {
    fontSize: 30,
    color: "green",
  };
  return (
    <div>
      <h1
        style={{
          backgroundColor: "yellow",
          padding: "5px",
          textAlign: "center",
        }}
      >
        My Function 2
      </h1>
      <p>I get access to props (properties) object</p>
      <p style={myStyle}>
        My name is {props.name} and age is {props.age} and school is{" "}
        {props.school}
      </p>
      {console.log(props)}
    </div>
  );
}

export default MyFunc2;

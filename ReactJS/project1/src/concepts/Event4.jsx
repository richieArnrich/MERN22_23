import React from "react";

function Event4() {
  //useState hook: function which allows us to access class based properties in our functional
  //   components
  const [fullName, setFullName] = React.useState("");
  let handleChange = (event) => {
    setFullName(event.target.value);
  };
  return (
    <div>
      <label htmlFor="name">Full Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} />
      <h3>My name is {fullName}</h3>
      <h3>I have clicked : {fullName.length} letters</h3>
    </div>
  );
}

export default Event4;

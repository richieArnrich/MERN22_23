import React from "react";
import ChildComp from "./ChildComp";

function ParentComp(props) {
  const { user } = props;
  //   console.log(user);
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Parent calls child component</p>
      <ChildComp userdata={user} />
    </div>
  );
}

export default ParentComp;

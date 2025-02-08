import React from "react";

function ChildComp(props) {
  const { userdata } = props;
  console.log(userdata);
  return (
    <div>
      <h3>Child component</h3>
      <p>User name: {userdata.name}</p>
      <p>User age: {userdata.age}</p>
    </div>
  );
}

export default ChildComp;

import React from "react";
import { useContext } from "react";
import { UserContext } from "./MyContext";

function ContextUsage() {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <div>
      <h1>Context Usage</h1>
      ContextUsage is a React component that uses the useContext hook to access
      the UserContext. The useContext hook
      <p>
        Hello <b>{userContext.name}, </b> your email is:{" "}
        <b> {userContext.email}</b> and age is <b>{userContext.age}</b>
      </p>
    </div>
  );
}

export default ContextUsage;

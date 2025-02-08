import React from "react";
import { useContext } from "react";
import { UserContext } from "./MyContext";

function ContextUsage2() {
  const userContext = useContext(UserContext);
  return <div></div>;
}

export default ContextUsage2;

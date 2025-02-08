import ApiCall from "./concepts/ApiCall";
import ContextUsage from "./concepts/ContextUsage";
import { UserProvider } from "./concepts/MyContext";
import ParentComp from "./concepts/ParentComp";
import UpdateState from "./concepts/UpdateState";

function App() {
  const obj = {
    name: "Abhi",
    age: 25,
  };
  return (
    <>
      {/* <UserProvider> */}
      {/* <ParentComp user={obj} /> */}
      {/* <ContextUsage /> */}
      {/* <UpdateState /> */}
      {/* </UserProvider> */}
      <ApiCall />
    </>
  );
}

export default App;

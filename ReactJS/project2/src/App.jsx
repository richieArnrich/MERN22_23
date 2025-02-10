import ApiCall from "./concepts/ApiCall";
import ApiCall2 from "./concepts/ApiCall2";
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
      {/* <ApiCall /> */}
      <ApiCall2 />
    </>
  );
}

export default App;

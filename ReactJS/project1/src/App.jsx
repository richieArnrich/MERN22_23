import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MyClass from "./concepts/MyClass";
import MyFunc from "./concepts/MyFunc";
import MyFunc2 from "./concepts/MyFunc2";

function App() {
  return (
    <>
      {/* <Header />
      <Main></Main>
      <Footer /> */}
      <MyFunc />
      <MyFunc2 name="Amith" age="12" school="bbbgs" />
      <MyClass name="Harsha" age="14" school="ssghs" />
    </>
  );
}

export default App;

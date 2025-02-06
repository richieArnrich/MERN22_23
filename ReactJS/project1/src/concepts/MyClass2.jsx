import React from "react";

class MyClass2 extends React.Component {
  // state : object : where are they initialised?
  constructor(props) {
    super(props);
    this.state = {
      name: "Anand",
      age: 25,
      occupation: "teacher",
    };
  }

  render() {
    return (
      <div>
        <h1>My Class 2 component with state</h1>
        <p>
          Hello I am {this.state.name} and my age is {this.state.age} and I work
          as a {this.state.occupation}
        </p>
      </div>
    );
  }
}
export default MyClass2;

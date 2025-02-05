import React from "react";

class MyClass extends React.Component {
  // gets access to objects inherently
  render() {
    return (
      <div>
        <h2>My class component</h2>
        <p>I get access to props</p>
        <p>
          My name is {this.props.name} and age {this.props.age} and school is{" "}
          {this.props.school}
        </p>
      </div>
    );
  }
}

export default MyClass;

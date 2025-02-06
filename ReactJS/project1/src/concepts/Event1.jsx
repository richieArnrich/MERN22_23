import React from "react";

class Event1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Amith",
      age: 24,
      occupation: "Graphic Designer",
      address: "Bangalore",
    };
  }
  handleClick = () => {
    this.setState({
      name: "Rahul",
      age: 25,
      occupation: "Software Engg",
      address: "Delhi",
    });
  };
  render() {
    return (
      <div>
        <h1>Event 1 class</h1>
        <p>
          Hi my name is {this.state.name} and I am {this.state.age} years old
          and I work as a {this.state.occupation} and I live in{" "}
          {this.state.address}
        </p>
        <button onClick={this.handleClick}>Change Details</button>
      </div>
    );
  }
}

export default Event1;

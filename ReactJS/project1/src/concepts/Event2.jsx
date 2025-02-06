import React from "react";

// Define the Event2 class component
class Event2 extends React.Component {
  constructor(props) {
    super(props);

    // Initialize the component state
    this.state = {
      toggle: true, // State to toggle between person1 and person2
      person1: {
        name: "John", // Name of the first person
        age: 30, // Age of the first person
      },
      person2: {
        name: "Amith", // Name of the second person
        age: 25, // Age of the second person
      },
    };
  }

  // Method to handle button click and toggle the state
  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle, // Toggle the state between true and false
    });
  };

  // Render method to display the component
  render() {
    // Conditional rendering based on the toggle state
    if (this.state.toggle) {
      return (
        <div>
          <h1>Person 1</h1>
          <p>
            Hello my name is {this.state.person1.name} and I am{" "}
            {this.state.person1.age} years old
          </p>
          <button onClick={this.handleClick}>Change Details</button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Person 2</h1>
          <p>
            Hello my name is {this.state.person2.name} and I am{" "}
            {this.state.person2.age} years old
          </p>
          <button onClick={this.handleClick}>Change Details</button>
        </div>
      );
    }
  }
}

export default Event2;

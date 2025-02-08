import React, { Component } from "react";
import axios from "axios";
import "./ApiStyles.css";
class ApiCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({
          people: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  displayPeopleData() {
    return this.state.people.map((person, index) => {
      return (
        <tr key={index}>
          <td>{person.id}</td>
          <td>{person.name}</td>
          <td>{person.username}</td>
          <td>{person.email}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Fetching Users Data</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{this.displayPeopleData()}</tbody>
        </table>
      </div>
    );
  }
}

export default ApiCall;

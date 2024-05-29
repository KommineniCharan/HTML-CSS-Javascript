//install npm i axios
import React, { Component } from "react";
import Axios from "axios";

class Axioss extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>React Axios</h1>
        {this.state.users.length > 0 ? (
          <div>
            <table className="table table-responsive table-primary">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No Users Found</p>
        )}
      </div>
    );
  }
}

export default Axioss;

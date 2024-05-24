import React, { Component } from "react";

class Employee extends Component {
  render() {
    return (
      <div>
        <h1>Employee Component</h1>
        <pre>{JSON.stringify(this.props.user)}</pre>
        <h2>Emp Id: {this.props.user.id}</h2>
        <h2>Emp Name: {this.props.user.name}</h2>
        <h2>Emp Sal: {this.props.user.sal}</h2>
      </div>
    );
  }
}

export default Employee;

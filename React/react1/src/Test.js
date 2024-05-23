import React, { Component } from "react";

class Test extends Component {
  ename = "Sachin";
  message = "Hello";
  emp = { id: 101, name: "Bhoomika", sal: 50000 };

  render() {
    return (
      <React.Fragment>
        <h1>Message : {this.message}</h1>
        <h2>EName : {this.ename}</h2>
        <h3>Emp ID : {this.emp.id}</h3>
        <h3>Emp Name: {this.emp.name}</h3>
        <h3>Emp Salary: {this.emp.sal}</h3>
      </React.Fragment>
    );
  }
}

export default Test;

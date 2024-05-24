import React, { Component } from "react";
import Employee from "./Employee";

class User extends Component {
  user = { id: 101, name: "Sachin", sal: 45000 };

  render() {
    return (
      <div>
        <h1>User Data: {this.user.id}</h1>
        <h2>User Emp : {JSON.stringify(this.user)}</h2>
        <hr />
        <Employee user={this.user} />
        <hr />
      </div>
    );
  }
}

export default User;

import React, { Component } from "react";

class Message extends Component {
  state = { msg: "Hello" };

  gmHandler = () => {
    this.setState({ msg: "Good Morning" });
  };

  geHandler = () => {
    this.setState({ msg: "Good Evening" });
  };

  render() {
    return (
      <div>
        <h1>Message: {this.state.msg}</h1>
        <button className="btn btn-primary" onClick={this.gmHandler}>
          Good Morning
        </button>
        <button className="btn btn-secondary" onClick={this.geHandler}>
          Good Evening
        </button>
      </div>
    );
  }
}

export default Message;

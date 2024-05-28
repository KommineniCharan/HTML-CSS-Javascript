import React, { Component } from "react";

class Binding extends Component {
  state = { sal: 50000 };

  IncrHandler = (value) => {
    this.setState({ sal: this.state.sal + value });
  };

  render() {
    return (
      <div>
        <h1>Binding Class Component</h1>
        <h2>Salary : {this.state.sal}</h2>
        <button type="button" onClick={this.IncrHandler.bind(this, 50000)}>
          Hike 50K
        </button>
        <button type="button" onClick={this.IncrHandler.bind(this, 30000)}>
          Hike 30K
        </button>
      </div>
    );
  }
}

export default Binding;

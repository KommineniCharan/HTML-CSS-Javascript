import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { digital: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ digital: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Life Cycle Methods</h1>
        <h2>Digital Clock: {this.state.digital}</h2>
      </div>
    );
  }
}

export default Lifecycle;

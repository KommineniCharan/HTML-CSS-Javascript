import React, { Component } from "react";

class Form extends Component {
  state = { name: "", password: "" };

  inputHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: [event.target.value],
    });
  };

  sbmtHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>Form Component</h1>

        <form className="form" onSubmit={this.sbmtHandler}>
          <div className="form-group">
            <label for="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={this.inputHandler}
            />
          </div>
          <div className="form-group">
            <label for="name" className="form-label">
              Password:
            </label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={this.inputHandler}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              name="submit"
              className="sbmt"
              value="Submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;

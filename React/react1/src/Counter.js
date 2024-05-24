import React, { Component } from "react";

class Counter extends Component {
  state = { name: "IPhone", unitprice: 65000, price: 65000, qty: 1 };

  Incr = () => {
    this.setState((prevState) => ({
      qty: prevState.qty + 1,
      price: prevState.unitprice * (prevState.qty + 1),
    }));
  };

  Decr = () => {
    this.setState((prevState) => {
      const newQty = prevState.qty > 1 ? prevState.qty - 1 : 1;
      return {
        qty: newQty,
        price: prevState.unitprice * newQty,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <h2>Name: {this.state.name}</h2>
        <h2>Price: {this.state.price}</h2>
        <h2>Qty: {this.state.qty}</h2>

        <button className="btn btn-primary" onClick={this.Incr}>
          +
        </button>
        <button className="btn btn-info" onClick={this.Decr}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;

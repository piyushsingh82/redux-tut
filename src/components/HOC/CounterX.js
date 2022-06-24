import React, { Component } from "react";
import withCounter from "../HOC/withCounter";

class CounterX extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button className="btn btn-primary" onClick={incrementCount}>
        Clicked {count} times
      </button>
    );
  }
}

export default withCounter(CounterX);

import React, { Component } from "react";
import withCounter from "../HOC/withCounter";
class HoverCounter extends Component {
   
  render() {
    const { count,incrementCount } = this.props;
    return (
      
        <h2 className="Heading" onMouseOver={incrementCount}>
            Hovered {count} times
        </h2>
      
    );
  }
}

export default withCounter(HoverCounter);

import React from "react";

const withCounter = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    incrementCount = () => {
      this.setState((count) => {
        return { count: count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.state.incrementCount}
        />
      );
    }
  }
  return NewComponent
};

export default withCounter;

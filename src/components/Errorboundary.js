import React, { Component } from "react";

class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: false,
    };
  }
  componentDidCatch(error, errorinfo) {
    console.log("Logging", error, errorinfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>Failed to load this component  </h1>;
    }
    return this.props.children;
  }
}

export default Errorboundary;

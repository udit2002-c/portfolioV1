import React from "react";


import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor: Component initialized");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Deciding if re-render is needed");
    // Only update if count is even
    return nextState.count % 2 === 0;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component updated");
    console.log("Previous State:", prevState);
    console.log("Current State:", this.state);
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log("Render: Component rendering");
    return (
      <div>
        <h1>React Component Lifecycle</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}


export default LifecycleDemo;
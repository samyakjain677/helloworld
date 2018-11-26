import React from "react";
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
  }

  addOne() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  subOne() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addOne}>Increment</button>
        <button onClick={this.subOne}>decrement</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default Hello;

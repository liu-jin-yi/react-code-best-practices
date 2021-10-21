import React, { Component, memo } from "react";
import { Son } from "./Bad";

const MemoSon = memo(() => <Son></Son>);

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div className="parent">
        <h5>正确示例3</h5>
        <p>父组件Count--{count}</p>
        <button onClick={this.handleClick}>增加</button>
        <MemoSon />
      </div>
    );
  }
}

export default Parent;

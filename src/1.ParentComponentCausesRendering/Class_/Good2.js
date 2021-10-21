import React, { Component } from "react";
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
    const { children } = this.props;
    return (
      <div className="parent">
        <h5>正确示例2</h5>
        <p>父组件Count--{count}</p>
        <button onClick={this.handleClick}>增加</button>
        {children}
      </div>
    );
  }
}

export default Parent;

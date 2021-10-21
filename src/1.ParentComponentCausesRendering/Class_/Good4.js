import React, { Component, useState, Fragment } from "react";
import { Son } from "./Bad";

const ClickCount = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((old) => old + 1);
  };
  return (
    <Fragment>
      <div>
        <h5>正确示例4</h5>
        <p>父组件Count--{count}</p>
        <button onClick={handleClick}>增加</button>
      </div>
    </Fragment>
  );
};

class Parent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="parent">
        <ClickCount />
        <Son />
      </div>
    );
  }
}

export default Parent;

import React, { Component, PureComponent } from "react";

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
        <h5>错误示例</h5>
        <p>父组件Count--{count}</p>
        <button onClick={this.handleClick}>增加</button>
        <Son componentDetails={{ name: "子组件" }} anyMethod={() => {}} />
      </div>
    );
  }
}

class Son extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { componentDetails, anyMethod } = this.props;
    console.log("Son -> render -> anyMethod", anyMethod);
    console.log("Son -> render -> componentDetails", componentDetails);
    return <div className="son">{componentDetails?.name}</div>;
  }
}

export { Parent, Son };

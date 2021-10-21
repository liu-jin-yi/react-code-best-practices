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
        <h5>正确示例1</h5>
        <p>父组件Count--{count}</p>
        <button onClick={this.handleClick}>增加</button>
        <Son />
      </div>
    );
  }
}

class Son extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("子组件重新渲染了！！");
    return <div className="son">子组件</div>;
  }
}

export default Parent;

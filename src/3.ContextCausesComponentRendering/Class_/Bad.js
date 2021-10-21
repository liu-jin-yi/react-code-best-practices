import React, { Component, createContext } from "react";

const contextValue = createContext(undefined);

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  render() {
    return (
      <contextValue.Provider
        value={{
          count: this.state.count,
          handleIncrement: this.handleIncrement,
        }}
      >
        <div className="parent">
          <h5>错误示例</h5>
          <Son1 />
          <contextValue.Consumer>
            {(conProps) => <Son2 conProps={conProps} />}
          </contextValue.Consumer>
        </div>
      </contextValue.Provider>
    );
  }
}

class Son1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("子组件 1 重新渲染了！！");
    return <div className="son">子组件 1</div>;
  }
}

class Son2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("子组件 2 重新渲染了！！");

    const {
      conProps: { count, handleIncrement },
    } = this.props;
    return (
      <div className="son">
        <p>子组件 2--{count}</p>
        <button onClick={handleIncrement}>增加</button>
      </div>
    );
  }
}

export { Parent };

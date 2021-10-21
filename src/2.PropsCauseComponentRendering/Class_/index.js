import React from "react";
import { Parent as BadParent } from "./Bad";
import Good1 from "./Good1";
class Clsaa_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-center">
        <h1>Class 示例</h1>
        <BadParent />
        <Good1 />
      </div>
    );
  }
}

export default Clsaa_;

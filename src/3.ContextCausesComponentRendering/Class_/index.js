import React from "react";
import { Parent as BadParent } from "./Bad";
import { Parent as Good1, Son1 } from "./Good1";
import Good2 from "./Good2";
class Clsaa_ extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-center">
        <h1>Class 示例</h1>
        <BadParent />
        <Good1>
          <Son1 />
        </Good1>
        <Good2 />
      </div>
    );
  }
}

export default Clsaa_;

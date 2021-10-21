import React from "react";

import { Parent as BadParent, Son } from "./Bad";
import Good1 from "./Good1";
import Good2 from "./Good2";
import Good3 from "./Good3";
import Good4 from "./Good4";
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
        <Good2>
          <Son />
        </Good2>
        <Good3 />
        <Good4 />
      </div>
    );
  }
}

export default Clsaa_;

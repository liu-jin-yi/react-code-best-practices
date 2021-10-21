import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ParentComponentCausesRendering from "../1.ParentComponentCausesRendering";
import PropsCauseComponentRendering from "../2.PropsCauseComponentRendering";
import ContextCausesComponentRendering from "../3.ContextCausesComponentRendering";
function HomePage() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/1.PCCR">父组件更新导致子组件渲染</Link>
          </li>
          <li>
            <Link to="/2.PCCR">Props的错误写法导致组件渲染</Link>
          </li>
          <li>
            <Link to="/3.CCCR">Context的更新导致组件渲染</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/1.PCCR" component={ParentComponentCausesRendering} />
          <Route path="/2.PCCR" component={PropsCauseComponentRendering} />
          <Route path="/3.CCCR" component={ContextCausesComponentRendering} />
        </Switch>
      </div>
    </Router>
  );
}

export default HomePage;

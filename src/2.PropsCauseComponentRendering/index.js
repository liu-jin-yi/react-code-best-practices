import React from "react";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

import Hooks_ from "./Hooks_";
import Class_ from "./Class_";
const PropsCauseComponentRendering = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>Props的错误写法导致组件渲染</h1>
      <ul>
        <li>
          <Link to={`${url}/Class_`}>Class示例</Link>
        </li>
        <li>
          <Link to={`${url}/Hooks_`}>Hooks示例</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/Hooks_`}>
          <Hooks_ />
        </Route>
        <Route exact path={`${path}/Class_`}>
          <Class_ />
        </Route>
      </Switch>
    </div>
  );
};

export default PropsCauseComponentRendering;

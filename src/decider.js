import React from "react";
import { Switch } from "react-router-dom";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const Decider = () => (
  <Switch>
    <Route exact path="/faculty_profile" component={App} />
  </Switch>
);

export default Decider;

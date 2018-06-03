import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import CreateGroup from "../components/CreateGroup";

export default function Router() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/create-group" component={CreateGroup} />
      </Switch>
    </React.Fragment>
  );
}

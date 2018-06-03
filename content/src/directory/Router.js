import React from "react";
import { Route, Switch } from "react-router-dom";
import Video from "../components/Video";
import Header from "../components/Header";
import CreateGroup from "../components/CreateGroup";

export default function Router() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Video} />
        <Route path="/create-group" component={CreateGroup} />
      </Switch>
    </React.Fragment>
  );
}

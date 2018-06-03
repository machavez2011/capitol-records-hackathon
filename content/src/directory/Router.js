import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import CreateGroup from "../components/CreateGroup";
import RapWords from "../components/rapWords";

export default function Router() {
  return (
    <React.Fragment>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/create-group" component={CreateGroup} />
            <Route path="/rap-words" component={RapWords} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

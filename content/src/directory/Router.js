import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import Home from "../components/Home";
import RapBattle from "../components/RapBattle";
import Dashboard from "../components/Dashboard";
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
            <Route exact path="/" component={Home} />
            <Route path="/rap-battle" component={RapBattle} />
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

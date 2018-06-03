import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Header from "../components/Header";
import CreateGroup from "../components/CreateGroup";
//form the website layout here.

class LayoutRouter extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div id="main" role="main">
            <Route exact path="/" component={Dashboard} />
            <Route path="/create-group" component={CreateGroup} />
        </div>
      </div>
    );
  }
}

export default LayoutRouter;

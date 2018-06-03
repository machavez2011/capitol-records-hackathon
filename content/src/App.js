import React, { Component } from "react";
import { Router } from "react-router-dom";
// import "./App.css";
import Routes from "./directory/Router";
import createHistory from "history/createBrowserHistory";
import RapWords from "./components/rapWords";

const history = createHistory();
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <Routes />
          <RapWords />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

import React, { Component } from "react";
import { Router } from "react-router-dom";
// import "./App.css";
import Layout from "./directory/Layout"
import createHistory from "history/createBrowserHistory";

const history = createHistory();
class App extends Component {
  render() {
    return(
      <Router history={history}>
        <Layout/>
        <p>Hi</p>
    </Router>
    )
  }
}

export default App;

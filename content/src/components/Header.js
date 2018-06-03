import React from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import smallLogo from "./images/Logo.png";

const logo = {
  width: "25%"
};

export default class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <img src={smallLogo} alt="tentIcon" style={logo} />
          <Link to="/" className="btn btn-link">
            Home
          </Link>
          <Link to="/rap-battle" className="btn btn-link">
            Rap Battle
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

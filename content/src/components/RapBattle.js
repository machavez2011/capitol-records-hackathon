import React from "react";
import RapWords from "./rapWords";
import Users from "./Users";
import Video from "./Video";

class RapBattle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <Video />
            <Users />
          </div>
          <div className="col-md-6">
            <RapWords />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RapBattle;

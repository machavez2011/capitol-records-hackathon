import React from "react";
import RapWords from "./rapWords";
import Users from "./Users";

class RapBattle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <iframe
              src="https://tokbox.com/embed/embed/ot-embed.js?embedId=2b0c2f80-276e-4577-b9d6-1bf4938698fa&room=DEFAULT_ROOM&iframe=true"
              allow="microphone; camera"
            />
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

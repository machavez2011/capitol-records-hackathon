import React from "react";
import RapWords from "./rapWords";
import Users from "./Users";
import { Col, Row } from "react-bootstrap";

class RapBattle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={6}>
            <iframe
              src="https://tokbox.com/embed/embed/ot-embed.js?embedId=2b0c2f80-276e-4577-b9d6-1bf4938698fa&room=DEFAULT_ROOM&iframe=true"
              allow="microphone; camera"
            />
            <Users />
          </Col>
          <Col md={6}>
            <RapWords />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default RapBattle;

import React from "react";
import RapWords from "./rapWords";
import Users from "./Users";
import Video from "./Video";
import { Col, Row } from "react-bootstrap";

class RapBattle extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={6}>
            <Video />
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

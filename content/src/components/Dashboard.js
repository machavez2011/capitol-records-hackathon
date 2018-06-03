import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid>
        <Row className="testing">
          <Col>
          <h1>yo</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;

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
        <Row>
          <Col>
            <iframe
              src="https://tokbox.com/embed/embed/ot-embed.js?embedId=2b0c2f80-276e-4577-b9d6-1bf4938698fa&room=DEFAULT_ROOM&iframe=true"
              allow="microphone; camera"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;

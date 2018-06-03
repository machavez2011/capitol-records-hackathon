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
            <iframe src="https://tokbox.com/embed/embed/ot-embed.js?embedId=f6c1282f-9546-439c-aa4a-c74ca907164d&room=DEFAULT_ROOM&iframe=true" allow="microphone; camera" ></iframe>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Dashboard;

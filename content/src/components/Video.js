import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import WebCam from "react-webcam";
import WebCamWrapper from "../containers/WebCamWrapper";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null
    };
    this.onPlay = this.onPlay.bind(this);
  }

  onPlay(e) {
    debugger;
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col>
            {/* <iframe
              src="https://tokbox.com/embed/embed/ot-embed.js?embedId=2b0c2f80-276e-4577-b9d6-1bf4938698fa&room=DEFAULT_ROOM&iframe=true"
              width="800"
              height="640"
              scrolling="no"
              allow="microphone; camera"
            /> */}
            <WebCamWrapper>
              <div style={{ position: "relative" }}>
                <WebCam width="800" height="600" muted={true} />
              </div>
            </WebCamWrapper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Video;
